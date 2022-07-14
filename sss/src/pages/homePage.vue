<template>
  <p>home pahe</p>
<TheForm @onSubmit="handleSubmit"/>
</template>

<script>
import TheForm  from '@/components/Notes/TheForm'

export default {
  components: {TheForm},
  data() {
    return {

    };

  },
  methods: {
    handleSubmit(val) {
      console.log(val)
    }
  }
};
</script>
