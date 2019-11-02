<template>
  <el-card>
    <h3>{{ post.title }}</h3>
    <p>{{ post.description }}</p>
    <slot name="publish-date" :date="post.date">
      Published {{ post.date }}
    </slot>
  </el-card>
</template>

<script>
const post = {
  title: 'Something happens',
  description: 'Be aware around you',
  date: new Date()
};

export default {
  data() {
    return { post };
  }
};
</script>

<style lang="scss" scoped>

</style>
