<script>
export default {
  data() {
    return {
      files: [
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件1',
          link: 'page1.html',
        },
        {
          selected: false,
          icon: 'file-icon.png',
          name: '文件2',
          link: 'page2.html',
        },
        // 添加更多文件...
      ],
      upFiles: [],
      selectedRows: [],
    }
  },
  methods: {
    // eslint-disable-next-line unused-imports/no-unused-vars
    downloadFile(file) {
      // 下载文件的逻辑
    },
    handleSelectionChange(selectedRows) {
      this.selectedRows = selectedRows
    },
    handleSuccess3(res, file, fileList) {
      if (res.error === '') {
        files.value.push({
          name: file.name,
          url: res.error === '' ? res.data.path : '',
        })
      }
      else {
        fileList.pop()
        ElMessage.warning(res.error)
      }
    },
  },
}
</script>

<template>
  <div>
    <PageMain class="">
      <FileUpload :files="upFiles" action="网址" @on-success="handleSuccess3" />
    </pagemain>
    <PageMain class="">
      <PageMain title="文件列表">
        <ElTable v-model="selectedRows" :data="files" stripe border :style="{ width: '100%' }" @selection-change="handleSelectionChange">
          <!-- <ElTableColumn prop="selected" label="" width="80"> -->
          <ElTableColumn type="selection" width="80" />
          <ElTableColumn prop="name" label="文件名" width="800" />
          <ElTableColumn prop="address" label="文件下载" width="100" align="center">
            <SvgIcon name="i-ep:download" class="text-xl op-30 transition-opacity hover:op-100" />
          </ElTableColumn>
          <ElTableColumn prop="link" label="易错提示">
            <template #default="scope">
              <a :href="scope.row.link" target="_blank">{{ scope.row.link }}</a>
            </template>
          </ElTableColumn>
        </ElTable>
      </PageMain>
    </pagemain>
  </div>
  <div />
</template>

<style>
.title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.upload {
  margin-left: 0;
  font-size: 24px;
  color: #333;
}
</style>
