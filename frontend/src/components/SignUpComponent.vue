<template>
  <div class="hello"></div>
</template>

<script>
import UserService from "../UserService";
export default {
  name: "SignUpComponent",
  props: {
    msg: String
  },
  data() {
    return {
      user: [],
      err: ""
    };
  },
  async created() {
    try {
      this.user = await UserService.getUser();
    } catch (err) {
      this.err = err.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
