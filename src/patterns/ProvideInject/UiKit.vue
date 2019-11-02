<template>
  <theme-provider>
    <div>
      <alert type="primary" class="mb10">
        Primary alert
      </alert>
      <alert type="success" class="mb10">
        Primary alert
      </alert>
      <alert type="danger" class="mb10">
        Primary alert
      </alert>
    </div>
  </theme-provider>
</template>

<script>
import ThemeProvider from './ThemeProvider';
import Alert from './Alert';

export default {
  components: { ThemeProvider, Alert }
};
</script>

<style lang="scss">
  .mb10 { margin-bottom: 10px }
</style>
