<template>
  {{ getUsers }}
</template>

<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>
