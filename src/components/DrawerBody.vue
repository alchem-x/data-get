<template>
  <div class="drawer-body-container">
    <div class="download-report-data">
      <NH3>下载报告数据</NH3>
      <div class="date-range">
        <NButton @click="onClickDownload">下载</NButton>
        <NInput v-bind="inputProps" v-model:value="dateRange.startDate" />
        <NInput v-bind="inputProps" v-model:value="dateRange.endDate" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton, NInput, NH3 } from 'naive-ui'
import { downloadReportData } from '@/services/get_report_data.js'
import { reactive } from 'vue'
import dayjs from 'dayjs'

const inputProps = {
  type: 'date',
  placeholder: '',
}

const dateRange = reactive({
  startDate: dayjs().subtract(2, 'd').format('YYYY-MM-DD'),
  endDate: dayjs().subtract(1, 'd').format('YYYY-MM-DD'),
})

async function onClickDownload() {
  await downloadReportData({ ...dateRange })
}
</script>

<style scoped lang="less">
.drawer-body-container {
  text-align: left;

  .download-report-data {
    .date-range {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
