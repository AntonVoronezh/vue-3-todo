<template>
  <div class="note-form-wrap">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea type="text" required v-model="value" placeholder="" />
      <TagList />
      <button class="btn btnPrimary" type="submit">add new note</button>
    </form>
  </div>
</template>

<script>
import TagList from "@/components/UI/TagList";
export default {
  components: { TagList },
  data() {
    return {
      value: "",
      tags: ["aaaaa", "bbbbb", "ccccc"],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value);
      console.log(this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss">
.note-form {
  width: 600px;
  display: flex;
  flex-direction: column;

  textarea {
    margin-bottom: 0;
  }
}

.note-form-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
