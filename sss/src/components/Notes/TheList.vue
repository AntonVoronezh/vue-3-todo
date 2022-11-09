<template>
  <div class="notes-list">
    <div v-if="notes.length">
      <div  class="note-item" v-for="(note, index) in notes" :key="index">
        <div class="note-header">
          <h2>{{ note.name }}</h2>
          <div>
          <p @click="editNoteById(note.id)" class="close">(E)</p>
          <p @click="dellNoteById(note.id)" class="close">&#10005;</p>
          </div>
        </div>
          <div class="note-body">{{ note.description }}</div>
          <div class="note-body">{{ note.price }}</div>
          <div class="note-body">{{ note.on_offer }}</div>
        <div class="note-footer">
<!--          <TagList isPreview v-if="note.tags.length" :items="note.tags" />-->
        </div>
      </div>
    </div>

    <div v-if="!notes.length">Записей нет</div>
  </div>
</template>

<script>
// import TagList from "@/components/UI/TagList";

import axios from "axios";

export default {
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    async getAllNotes() {
      const {data} = await axios.get('http://127.0.0.1:8000/items')
      this.notes = data
    },
    async dellNoteById(id) {
      await axios.delete('http://127.0.0.1:8000/item/' + id);
      await this.getAllNotes();
    },
    editNoteById(id) {
      this.$router.push(`edit/${id}`)
    }
  },
  mounted() {
    this.getAllNotes();
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

.close:hover {
  cursor: pointer;
}

h2 {
  color: blue;
}
</style>
