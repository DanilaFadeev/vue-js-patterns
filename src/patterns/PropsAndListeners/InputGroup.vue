<template>
  <div class="InputGroup">
    <label class="InputGroup__label" :for="id">
      {{ label }}
    </label>
    <el-input
      :id="id"
      class="InputGroup__input"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // disable inherit undeclared props for the root node
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: `inp_gr_${Math.round(Math.random() * 1e8)}`
    }
  }
};
</script>

<style lang="scss">
.InputGroup {
  &:before {
    content: '';
    display: block;
    position: relative;
    top: 10px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }

  &__label {
    display: inline-block;
    position: relative;
    left: 50%;
    padding: 0 20px;
    transform: translateX(-50%);
    background-color: #fff;
    color: #615e63;
  }

  &__input {
    margin-top: 5px;
  }
}
</style>
