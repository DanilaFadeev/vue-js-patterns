<template>
  <ClickerLogger :increase-count="3" />
</template>

<script>
import Clicker from './Clicker';
import withLogger from './withLogger';

export default {
  components: { ClickerLogger: withLogger(Clicker) }
};
</script>
