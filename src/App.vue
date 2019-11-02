<template>
  <div class="app">
    <h1 class="app__title">
      🚀 <span class="app__title_green">Vue.js</span> Patterns Implementation
    </h1>
    <el-divider />
    <el-container>
      <el-aside width="250px">
        <el-menu :router="true">
          <el-menu-item
            v-for="link in links"
            :key="link.name"
            :index="link.path"
          >
            {{ link.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import routes from './routes/index';

const links = routes.map((route) => ({
  name: route.name,
  path: route.path
}));

export default {
  data() {
    return { links };
  }
};

</script>

<style lang="scss">
.app {
  &__title {
    text-align: center;

    &_green {
      color: #3eaf7c;
    }
  }

  .content {
    max-width: 980px;
    margin: 0 auto;
  }
}
</style>
