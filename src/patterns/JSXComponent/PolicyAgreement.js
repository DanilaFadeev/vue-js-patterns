import Vue from 'vue';

export default Vue.component('PolicyAgreement', {
  data() {
    return {
      isAgreed: false
    };
  },
  methods: {
    goNext() {
      this.isAgreed = false;
      this.$message('Read one more time please');
    }
  },
  render() {
    return (
      <div>
        <h3>Policy agreement seems like this..</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dolor urna. Maecenas
          gravida iaculis purus, ac dignissim lorem malesuada faucibus. In hac habitasse platea
          dictumst. Sed accumsan dictum felis, id scelerisque risus mattis vitae. Maecenas in nisi
          malesuada, euismod magna non, mollis diam. Pellentesque vel tortor convallis,
          luctus turpis pretium, semper erat.</p>
        <el-checkbox v-model={this.isAgreed}>
          I honestly read this and apply 😇
        </el-checkbox>
        <el-button v-on:click={this.goNext} disabled={!this.isAgreed}>
          Go ahead
        </el-button>
      </div>
    );
  }
});
