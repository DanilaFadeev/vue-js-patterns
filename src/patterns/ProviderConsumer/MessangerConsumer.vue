<template functional>
  <div class="Messanger">
    <p>
      Author: {{ props.state.author }}
    </p>
    <ul>
      <li v-for="(message, index) in props.state.messages" :key="index">
        {{ message }}
      </li>
    </ul>
    <div class="Messanger__input">
      <el-input :value="props.state.message" @input="props.actions.onInput" />
      <el-button type="success" @click="props.actions.addMessage('fdfd')">
        Send
      </el-button>
    </div>
    <el-button type="danger" @click="props.actions.clearChat">
      Clear chat
    </el-button>
  </div>
</template>

<style lang="scss">
.Messanger {
  &__input {
    display: flex;
    margin: 15px 0;

    button {
      margin-left: 7px;
    }
  }
}
</style>
