<template>
  <div class="view-block">
    <router-link :to="link">
      <strong>
        <small> {{ text }} </small>
      </strong>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ProfileBlockLinkComponent",
  props: {
    url: String,
  },
  data() {
    return {
      text: "",
      link: "",
    };
  },
  mounted() {
    if (this.url == "/profile") {
      this.text = "Logout";
      this.link = "login";
    } else {
      this.text = "View my profile";
      this.link = "profile";
    }
  },
};
</script>
<style scoped>
.view-block {
  padding: 10px;
}
</style>