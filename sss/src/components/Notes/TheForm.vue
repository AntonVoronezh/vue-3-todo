<template>
  <div class="note-form-wrap">
    <form class="note-form" @submit.prevent="onSubmit">
      <input type="text" required v-model="name" placeholder="название"/>
      <textarea type="text" required v-model="description" placeholder="текст" />
      <input type="number" required v-model="price" placeholder="цена"/>
      <div class="note-radio">
        <input type="radio" id="on-offer-1" value="true" v-model="onOffer">
        <label for="on-offer-1">доступно</label>
        <input type="radio" id="on-offer-2" value="false" v-model="onOffer">
        <label for="on-offer-2">не доступно</label>
      </div>


      <TagList :items="tags" @onItemClick="handleTagClick"/>
      <button class="btn btnPrimary" type="submit">добавить запись</button>
    </form>
  </div>
</template>

<script>
import TagList from "@/components/UI/TagList";
import axios from "axios";

export default {
  components: { TagList },
  data() {
    return {
      value: "",
      tags: ["aaaaa", "bbbbb", "ccccc"],
    };
  },
  methods: {
    async onSubmit() {
      const payload = {
        "id": new Date().getTime(),
        "name": this.name,
        "description": this.description,
        "price": this.price,
        "on_offer": this.onOffer === 'true'
      }

      await axios.post('http://127.0.0.1:8000/items', {...payload});
      this.$router.push(`/`);
    },
    handleTagClick(val) {
      console.log(val)
    }
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

.note-radio {
  display: flex;
  justify-content: flex-start;
}
</style>
