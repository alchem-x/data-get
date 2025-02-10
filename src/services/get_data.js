const dataQuery = `
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

async function fetchData() {
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
          startDate: '2025-01-01',
          endDate: '2025-02-09',
          asins: [],
        },
      },
      query: dataQuery.trim(),
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

export async function downloadData() {
  const { showSaveFilePicker } = window
  try {
    const data = await fetchData()
    const handle = await showSaveFilePicker({
      suggestedName: 'data.csv',
    })
    const writable = await handle.createWritable()
    await writable.write(new Blob([convertDataToCSV(data)]))
    await writable.close()
  } catch (err) {
    //
  }
}
