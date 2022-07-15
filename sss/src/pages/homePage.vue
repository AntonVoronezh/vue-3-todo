<template>
  <p>home pahe</p>
  <TheForm @onSubmit="handleSubmit" />
  <TheList :items="notes" @onRemove="handleRemove" />
</template>

<script>
import TheForm from "@/components/Notes/TheForm";
import TheList from "@/components/Notes/TheList";

export default {
  components: { TheForm, TheList },
  data() {
    return {
      notes: ["1111", "2222", "33333"],
    };
  },
  methods: {
    handleSubmit(val) {
      this.notes.push(val);
    },
    handleRemove(idx) {
      this.notes.splice(idx, 1);
    },
  },
};
</script>
