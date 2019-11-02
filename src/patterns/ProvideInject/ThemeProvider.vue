<script>
export default {
  provide: {
    theme: {
      primary: '#29B6F6',
      success: '#66BB6A',
      danger: '#FF7043'
    }
  },
  render() {
    return this.$slots.default;
  }
};
</script>
