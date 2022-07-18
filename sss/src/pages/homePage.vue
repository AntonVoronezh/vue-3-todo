<template>
 <ul>
   <li v-for="user in getUsers" :key="user.id">
     <p>{{user.name}}</p>
     <p>{{user.isAdmin ? '+++' : '---'}}</p>
   </li>
 </ul>

  количсевто = {{getAllUsers.length}}

  <div>
    {{getUser}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 3
    }
  },
  computed: {
    getAllUsers() {
      return this.$store.getters.getAllUsers;
    },

    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId);
    },
  },
};
</script>
