<template>
  <div>
    <el-input v-model="searchValue" />
    <el-button @click="onClear">
      Clean
    </el-button>
    <p>You are searching for: {{ searchValue }}</p>
    <p>URL encoded: {{ urlEncodedSearchValue }}</p>
  </div>
</template>

<script>
import SearchMixin from './SearchMixin';

export default {
  mixins: [SearchMixin]
};
</script>
