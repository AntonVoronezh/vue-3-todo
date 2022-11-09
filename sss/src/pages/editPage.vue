<template>
   <TheEdit
       v-if="note"
       :initialId="note.id"
       :initialName="note.name"
       :initialDescription="note.description"
       :initialPrice="note.price"
       :initialOnOffer="note.onOffer"
   />
</template>
<script>
import axios from "axios";
import TheEdit from "@/components/Notes/TheEdit";
export default {
  components: {TheEdit},
  data() {
    return {
      note: null
    };
  },
  methods: {
    async geNoteById(id) {
      const {data} = await axios.get('http://127.0.0.1:8000/item/' + id);
      this.note = data
    },
  },
  mounted() {
    this.geNoteById(this.$route.params.id);
  }
}
</script>
