<script>
const responseFromServer = {
  passanger: 'Night Walker',
  destination: 'Abu Dhabi Airport',
  arrivalDate: new Date(),
  transport: 'Plane'
};

export default {
  data() {
    return { ticketInfo: null, loading: false };
  },
  mounted() {
    this.loading = true;

    setTimeout(() => {
      this.ticketInfo = responseFromServer;
      this.loading = false;
    }, 3000);
  },
  render() {
    return this.$scopedSlots.default(this.$data);
  }
};
</script>
