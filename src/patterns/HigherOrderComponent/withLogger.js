import Vue from 'vue';

export default function withLogger(component) {
  return Vue.component('withLogger', {
    data() {
      return {
        messages: [],
        observableComponentData: null
      };
    },
    mounted() {
      this.messages.push('Component mounted with logger.');
    },
    methods: {
      handleUpdate() {
        const updatedDataString = JSON.stringify(this.observableComponentData);
        this.messages.push(`Component get updated: ${updatedDataString}`);
      }
    },
    render() {
      if (this.$refs.loggedComponent) {
        this.observableComponentData = this.$refs.loggedComponent.$data;
      }
      return (
        <div>
          With logger component
          <component
            ref="loggedComponent"
            attrs={{ ...this.$attrs }}
            on={{ ...this.$listeners, 'hook:updated': this.handleUpdate }}
          />
          <div>
            {this.messages.map(
              (message) => <el-alert title={message} closable={false} />
            )}
          </div>
        </div>
      );
    }
  });
}
