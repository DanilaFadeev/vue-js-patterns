<template>
  <div>
    <slot v-bind="{ state, actions }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'Me',
      messages: [],
      message: ''
    };
  },
  computed: {
    state() {
      return this.$data;
    },
    actions() {
      return {
        onInput: this.onInput,
        addMessage: this.addMessage,
        clearChat: this.clearChat
      };
    }
  },
  methods: {
    onInput(value) {
      this.message = value;
    },
    addMessage() {
      if (this.message.length === 0) return;
      this.messages.push(this.message);
      this.message = '';
    },
    clearChat() {
      this.messages = [];
    }
  }
};
</script>
