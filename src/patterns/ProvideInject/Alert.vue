<template>
  <div
    :style="{
      'padding': '10px 20px',
      'border-radius': '7px',
      'box-shadow': '2px 2px #ccc',
      'background-color': theme[type]
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  inject: { theme: {} },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'success', 'danger'].includes(value)
    }
  }
};
</script>
