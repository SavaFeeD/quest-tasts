<template>
  <div class="base-modal__box">
    <div
      v-if="isHeader === true"
      class="base-modal__header"
    >
      <div class="base-modal__title">
        <span>{{ options.title || title || 'Default' }}</span>
      </div>
      <button
        v-if="!options.isUnclosable"
        class="base-modal__close close"
        @click="close()"
      >
        <span class="close__icon icon-Close" />
      </button>
    </div>
    <div
      v-if="isSuccess === true"
      class="base-modal__success success"
    >
      <div class="success__icon">
        <img
          src="~/assets/images/success.png"
          alt
        >
      </div>
      <span class="success__title">{{ $t("modals.isSuccess") }}</span>
    </div>
    <p
      class="base-modal__text"
      :class="textClass"
    >
      {{ options.text }}
    </p>
    <slot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    isUnclosable: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: true,
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
    textClass() {
      const {
        isSuccess,
      } = this;
      return [
        {
          'base-modal__text_center': isSuccess,
        },
      ];
    },
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/mixins/modal.scss';

.base-modal {
  @include modalKit;
}
</style>
