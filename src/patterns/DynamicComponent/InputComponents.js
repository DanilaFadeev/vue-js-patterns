import Vue from 'vue';

export const AgeInput = Vue.component('age-input', {
  data() {
    return { age: null };
  },
  template: '<el-input-number v-model="age" />'
});

export const GenderRadio = Vue.component('gender-radio', {
  data() {
    return { gender: null };
  },
  template: `
    <div>
      <el-radio v-model="gender" label="male">Male</el-radio>
      <el-radio v-model="gender" label="female">Femail</el-radio>
    </div>
  `
});

export const NameInput = Vue.component('name-input', {
  data() {
    return {
      name: ''
    };
  },
  template: '<el-input v-model="name" placeholder="Your name"/>'
});
