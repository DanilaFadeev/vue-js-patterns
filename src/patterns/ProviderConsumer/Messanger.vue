<template>
  <messanger-provider v-slot="{ state, actions }">
    <messanger-consumer v-bind="{ state, actions }" />
  </messanger-provider>
</template>

<script>
import MessangerProvider from './MessangerProvider';
import MessangerConsumer from './MessangerConsumer';

export default {
  components: { MessangerProvider, MessangerConsumer }
};
</script>
