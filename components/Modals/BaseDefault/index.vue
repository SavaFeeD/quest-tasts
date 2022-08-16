<template>
  <base-modal-box>
    <div class="base-modal__content base-modal__text">
      {{ options.testText }}
    </div>
  </base-modal-box>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
};
</script>
