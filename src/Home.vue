<template>
  <div class="HomeWrapper">
    <div class="HomeWrapper__icon">
      <img src="https://vuejs.org/images/logo.png" alt="">
    </div>
    <div>
      <p>
        This application is a demonstration of using some advanced concepts
         of Vue.js frontend library.
      </p>
      <p>
        You could read more about implemented patterns here:
        <a href="https://learn-vuejs.github.io/vue-patterns/patterns/">Vue Patterns</a>.
      </p>
      <p>
        Vue.js has a huge and reliable ecosystem with bunch of tools and UI Kits.
        Check it out <a href="https://github.com/vuejs/awesome-vue">Vue Awesome</a>.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.HomeWrapper {
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  &__icon img {
    width: 200px;
    margin-right: 20px;
  }

  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;

      &__icon img {
        margin-right: 0;
      }
    }
  }
}
</style>
