<template>
  <div>
    <input-group
      v-model="name"
      label="Name"
      placeholder="Jhon Doe"
      clearable
    />
    <input-group
      v-model="email"
      label="Email"
      type="email"
      placeholder="jhon.doe@example.com"
      clearable
    />
    <p v-show="name && email">
      Name: {{ name }}. Email: {{ email }}
    </p>
  </div>
</template>

<script>
import InputGroup from './InputGroup';

export default {
  components: { InputGroup },
  data() {
    return {
      name: '',
      email: ''
    };
  }
};
</script>
