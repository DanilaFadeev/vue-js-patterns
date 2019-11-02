<template>
  <code-viewer
    v-if="sources && previewComponent"
    :sources="sources"
  >
    <component :is="previewComponent" />
  </code-viewer>
</template>

<script>
import CodeViewer from '../components/CodeViewer';

export default {
  components: { CodeViewer },
  data() {
    return {
      sources: null,
      previewComponent: null
    };
  },
  watch: { $route: 'fetchRouterProps' },
  mounted() {
    this.fetchRouterProps();
  },
  methods: {
    async fetchRouterProps() {
      this.sources = this.$route.matched[0].props.default.sources;

      const previewComponent = this.$route.matched[0].props.default.component;
      if (previewComponent instanceof Promise) { // handle dynamic import
        this.previewComponent = (await previewComponent).default;
      } else {
        this.previewComponent = await previewComponent;
      }
    }
  }
};
</script>
