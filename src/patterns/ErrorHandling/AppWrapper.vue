<template>
  <error-handler>
    <damaged-component />
  </error-handler>
</template>

<script>
import ErrorHandler from './ErrorHandler';
import DamagedComponent from './DamagedComponent';

export default {
  components: { ErrorHandler, DamagedComponent }
};
</script>
