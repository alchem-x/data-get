const reportDataQuery = `
query reportDataQuery($input: GetReportDataInput) {
  getReportData(input: $input) {
    granularity
    hadPrevious
    hasNext
    size
    startDate
    endDate
    page
    columns {
      label
      valueFormat
      isGraphable
      translationKey
      isDefaultSortAscending
      isDefaultGraphed
      isDefaultSelected
      isDefaultSortColumn
      __typename
    }
    rows
    __typename
  }
}
`

async function fetchReportData({ startDate, endDate }) {
  const response = await fetch('https://sellercentral.amazon.com/business-reports/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'reportDataQuery',
      variables: {
        input: {
          legacyReportId: '102:DetailSalesTrafficByChildItem',
          startDate,
          endDate,
          asins: [],
        },
      },
      query: reportDataQuery,
    }),
  })
  return await response.json()
}

function convertDataToCSV(data) {
  const columns = data.data.getReportData.columns
  const rows = data.data.getReportData.rows
  const headerLine = columns.map((it) => it.label).join(',')
  const content = rows.map((it) => it.join(',')).join('\n')
  return headerLine + '\n' + content
}

export async function downloadReportData({ startDate, endDate }) {
  const { showSaveFilePicker } = window
  try {
    const data = await fetchReportData({ startDate, endDate })
    const handle = await showSaveFilePicker({
      suggestedName: `report_data_${startDate}_${endDate}.csv`,
    })
    const writable = await handle.createWritable()
    await writable.write(new Blob([convertDataToCSV(data)]))
    await writable.close()
  } catch (err) {
    //
  }
}
