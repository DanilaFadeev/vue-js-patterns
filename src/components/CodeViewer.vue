<template>
  <div class="CodeViewer">
    <el-row :gutter="20">
      <el-col :span="9">
        <el-tag type="success">
          Example Preview:
        </el-tag>
        <slot />
      </el-col>
      <el-col :span="15">
        <el-collapse v-model="activeSources">
          <el-collapse-item
            v-for="source in sourceItems"
            :key="source.path"
            :title="source.path | filename"
            :name="source.path"
          >
            <highlight-code :lang="source.lang">
              {{ source.codeListing }}
            </highlight-code>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  filters: {
    filename(path) {
      return path.split('/').pop();
    }
  },
  props: {
    sources: {
      type: Array,
      required: true,
      validator(sources) {
        if (!sources || !Array.isArray(sources) || sources.length === 0) {
          return false;
        }
        return !sources.some((source) => !(source.path && source.lang));
      }
    },

  },
  data() {
    return {
      sourceItems: [],
      activeSources: []
    };
  },
  watch: { sources: 'loadSources' },
  mounted() {
    this.loadSources();
  },
  methods: {
    async loadSources() {
      this.sourceItems = await Promise.all(
        this.$props.sources.map(async (source) => ({
          ...source,
          codeListing: (await import(`!!raw-loader!../${source.path}`)).default
        }))
      );
      this.activeSources = this.sourceItems.map((item) => item.path);
    }
  }
};
</script>

<style lang="scss">
.CodeViewer {
  .el-tag {
    margin-bottom: 20px;
  }

  .hljs {
    padding: 20px;
    line-height: 1.2;
  }
}
</style>
