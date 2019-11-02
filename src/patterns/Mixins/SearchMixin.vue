<script>
export default {
  data() {
    return {
      searchValue: ''
    };
  },
  computed: {
    urlEncodedSearchValue() {
      return encodeURI(this.searchValue);
    }
  },
  methods: {
    onClear() {
      this.searchValue = '';
    }
  }
};
</script>
