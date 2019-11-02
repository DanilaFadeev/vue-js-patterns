<template>
  <div class="layout">
    <header>
      <slot name="header">
        Header slot
      </slot>
    </header>
    <main>
      <slot>
        Content default slot
      </slot>
    </main>
    <footer>
      <slot name="footer">
        Footer slot
      </slot>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;

  header, footer {
    padding: 5px 10px;
    background-color: #ccc;
  }
}
</style>
