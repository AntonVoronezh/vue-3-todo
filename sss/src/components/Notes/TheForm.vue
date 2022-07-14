<template>
  <div class="note-form-wrap">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea type="text" required v-model="value" placeholder="" />
      <button class="btn btnPrimary" type="submit">add new note</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      console.log(this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss">
.note-form {
  max-width: 600px;
}

.note-form-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
