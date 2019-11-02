<template>
  <div class="Clicker">
    <p>Total clicks: {{ clicks }}</p>
    <el-button @click="onPress">
      Press
    </el-button>
    <el-button @click="onReset">
      Reset
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    increaseCount: {
      type: Number,
      default: 1
    }
  },
  data() {
    return { clicks: 0 };
  },
  methods: {
    onPress() { this.clicks = this.clicks + this.increaseCount; },
    onReset() { this.clicks = 0; }
  }
};
</script>
