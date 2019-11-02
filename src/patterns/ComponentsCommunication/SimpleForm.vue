<template>
  <div>
    <p>Input your age:</p>
    <FormattedInput v-model="age" postfix="years" />
    <p>Your current age is {{ age }}!</p>
  </div>
</template>

<script>
import FormattedInput from './FormattedInput';

export default {
  components: { FormattedInput },
  data() {
    return { age: 10 };
  }
};
</script>
