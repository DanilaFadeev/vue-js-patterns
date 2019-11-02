<template>
  <div>
    <p>Select what you want to tell us about yourself:</p>
    <el-select v-model="selectedValue" placeholder="Choose info field">
      <el-option label="Age" value="age-input" />
      <el-option label="Gender" value="gender-radio" />
      <el-option label="Name" value="name-input" />
    </el-select>
    <div class="mv20">
      <keep-alive>
        <component :is="selectedValue" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
/*
  With <keep-alive> we could save internal state of a component.
*/

import { AgeInput, GenderRadio, NameInput } from './InputComponents';

export default {
  components: { AgeInput, GenderRadio, NameInput },
  data() {
    return {
      selectedValue: null
    };
  }
};
</script>

<style lang="scss" scoped>
  .mv20 { margin: 20px 0; }
</style>
