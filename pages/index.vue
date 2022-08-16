<template>
  <div class="">
    <button @click="openModalDefault">!</button>
  </div>
</template>

<script>
import modals from '~/store/modals/modals';

export default {
  layout: 'base',
  name: 'IndexPage',
  components: {
  },
  methods: {
    openModalDefault() {
      this.ShowModal({
        key: modals.createTask,
        title: 'Create Task',
      });
    },
  }
};
</script>

<style lang="scss" scoped>

</style>
