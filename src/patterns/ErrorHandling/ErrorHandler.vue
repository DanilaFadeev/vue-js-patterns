<script>
export default {
  data() {
    return {
      error: null,
      errorInfo: null
    };
  },
  errorCaptured(error, vm, info) {
    this.error = error;
    this.errorInfo = {
      component: vm.$options.name,
      method: info
    };
  },
  render(h) {
    if (this.error) {
      return h(
        'el-alert',
        { props: { closable: false, type: 'error' } },
        `Error happen on "${this.errorInfo.component}:${this.errorInfo.method}": ${this.error.message}`
      );
    }
    return h('div', this.$slots.default);
  }
};
</script>
