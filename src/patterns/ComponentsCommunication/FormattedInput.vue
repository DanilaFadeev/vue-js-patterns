<template>
  <div>
    <el-input-number
      v-show="isEditing"
      ref="numberInput"
      v-model="tempValue"
      :controls="false"
      @blur="onBlur"
    />
    <el-input
      v-if="!isEditing"
      :value="formattedValue"
      @focus="onFocus"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    postfix: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tempValue: this.value,
      isEditing: false
    };
  },
  computed: {
    formattedValue() {
      return `${this.value} ${this.postfix}`;
    }
  },
  methods: {
    onFocus() {
      this.isEditing = true;
      this.$nextTick(this.$refs.numberInput.focus);
    },
    onBlur() {
      this.isEditing = false;
      this.$emit('input', this.tempValue);
    }
  }
};
</script>
