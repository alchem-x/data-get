export async function downloadData() {
  const { showSaveFilePicker } = window
  try {
    const handle = await showSaveFilePicker({
      suggestedName: 'data.csv',
    })
    const writable = await handle.createWritable()
    await writable.write(new Blob([`1,2,3`]))
    await writable.close()
  } catch (err) {
    //
  }
}