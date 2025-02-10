
async function fetchData() {
  const response = await fetch('https://sellercentral.amazon.com/business-reports/api',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "operationName": "reportDataQuery",
      "variables": {
        "input": {
          "legacyReportId": "102:DetailSalesTrafficByChildItem",
          "startDate": "2025-01-01",
          "endDate": "2025-02-09",
          "asins": []
        }
      },
      "query": "query reportDataQuery($input: GetReportDataInput) {\n  getReportData(input: $input) {\n    granularity\n    hadPrevious\n    hasNext\n    size\n    startDate\n    endDate\n    page\n    columns {\n      label\n      valueFormat\n      isGraphable\n      translationKey\n      isDefaultSortAscending\n      isDefaultGraphed\n      isDefaultSelected\n      isDefaultSortColumn\n      __typename\n    }\n    rows\n    __typename\n  }\n}\n"
    })
  })
  return await response.json()
}

export async function downloadData() {
  const { showSaveFilePicker } = window
  try {
    const data = await fetchData()
    const handle = await showSaveFilePicker({
      suggestedName: 'data.txt',
    })
    const writable = await handle.createWritable()
    await writable.write(new Blob([JSON.stringify(data)]))
    await writable.close()
  } catch (err) {
    //
  }
}