<template>
  <div class="search">
    <input type="text" v-model="search" placeholder="поиск"/>
    <button class="btn btnPrimary se" @click="getSearch()">ok</button>
  </div>

  <div class="search">
    <select v-model="skip">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <select v-model="limit">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <button class="btn btnPrimary se" @click="getPagination()">ok</button>
  </div>

<div v-if="tags.length" class="tags-list">
  <div  class="tag-item" v-for="(note, index) in tags" :key="index">{{note.name}}</div>
</div>

  <div class="notes-list">
    <div v-if="notes.length">
      <div class="sort-wrap">
        <div class="sort-item" @click="sortByCol('id')">id</div>
        <div class="sort-item" @click="sortByCol('name')">name</div>
        <div class="sort-item" @click="sortByCol('description')">description</div>
        <div class="sort-item" @click="sortByCol('price')">price</div>
        <div class="sort-item" @click="sortByCol('on_offer')">on_offer</div>
      </div>
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
        </div>
      </div>
    </div>

    <div v-if="!notes.length">Записей нет</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      notes: [],
      tags: [],
      sortBy: '',
      sortDirection: 'asc',
      search: '',
      skip: 0,
      limit: 1,
    };
  },
  methods: {
    async getAllNotes() {
      const {data} = await axios.get('http://127.0.0.1:8000/items')
      this.notes = data;
    },
    async dellNoteById(id) {
      await axios.delete('http://127.0.0.1:8000/item/' + id);
      await this.getAllNotes();
    },
    editNoteById(id) {
      this.$router.push(`edit/${id}`)
    },
    async sortByCol(sortBy) {
      const sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

      this.sortBy = sortBy;
      this.sortDirection = sortDirection;

      const {data} = await axios.get('http://127.0.0.1:8000/sort?order_by=' + sortBy + '&order_direction=' + sortDirection);
      this.notes = data;
    },
    async getSearch() {
      const {data} = await axios.get('http://127.0.0.1:8000/search?q=' + this.search);
      this.notes = data;
    },
    async getPagination() {
      const {data} = await axios.get('http://127.0.0.1:8000/pagination?skip=' + this.skip + '&limit=' + this.limit);
      this.notes = data;
    },
    async getAllTags() {
      const {data} = await axios.get('http://127.0.0.1:8000/tags')
      this.tags = data;
    },
  },
  mounted() {
    this.getAllNotes();
    this.getAllTags();
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

.sort-wrap {
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.search {
  display: flex;
  gap: 10px;
  align-items: center;
  max-height: 50px;
}

.se {
  height: 50px;
}

.tags-list {
  border: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px
}

.tag-item {
  border: 1px solid #ccc;
}
</style>
