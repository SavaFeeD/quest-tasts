<template>
  <div class="template container">
    <h1 class="template__header">
      <img
        class="header__image"
        src="~assets/images/logo.png"
        alt="logo">
      <span class="header__text">Quest Tasks _</span>
    </h1>
    <div class="template__content">
      <nuxt />
    </div>
    <base-modal-container />
  </div>
</template>

<script>
export default {
  name: "base"
}
</script>

<style lang="scss" scoped>
.template {
  max-width: 1000px;
  &__header {
    margin: 20px 0;
  }
  &__content {
    margin: 50px 0;
  }
}
.header {
  &__image {
    width: 30px;
    height: 30px;
  }
  &__text {
    font-size: 30px;
    color: #F36C78;
    font-weight: bold;
  }
}
</style>
