<template>
  <div>
    <h1>We have a list of employees:</h1>
    <list-item
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
    />
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import ListItem from './ListItem';

const employees = [
  { id: 1, name: 'Jhon D', age: 24, position: 'QA Specialist' },
  { id: 2, name: 'Carol C', age: 23, position: 'DevOps engineer' },
  { id: 3, name: 'David B', age: 21, position: 'HR Specialist' }
];

export default {
  components: { ListItem },
  data() {
    return { employees };
  }
};

</script>

<style lang="scss"></style>
