<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in items" :key="index">
      <div class="note-header">
        <p>{{ note }}</p>
        <p @click="$emit('onRemove', index)">&#10005;</p>
      </div>
      <!--      <div class="note-footer"></div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods:{

  }
};
</script>


<style lang="scss">

.note-item {
  border: 1px solid gray;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
}

.note-header {
  display: flex;
  justify-content: space-between;
}
</style>
