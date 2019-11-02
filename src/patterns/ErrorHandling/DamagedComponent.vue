<template>
  <div>
    <p>User: {{ user }}</p>
    <el-button @click="getUserInfo">
      Get user info
    </el-button>
  </div>
</template>

<script>
function infiniteRecursion() {
  return infiniteRecursion(); // throws "Maximum call stack size exceeded"
}

export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    getUserInfo() {
      infiniteRecursion();
    }
  }
};
</script>
