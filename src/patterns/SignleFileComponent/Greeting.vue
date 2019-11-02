<template>
  <div>
    <el-input v-model="name" type="text" />
    <el-button class="hello-btn" @click="sayHello">
      Say hello!
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    sayHello() {
      this.$alert(
        `Hello ${this.name}! Have a good time!`,
        'Greeeting box',
        { confirmButtonText: 'Thanks' }
      );
    }
  }
};
</script>

<style lang="scss" scroped>
  .hello-btn {
    margin-top: 15px;
  }
</style>
