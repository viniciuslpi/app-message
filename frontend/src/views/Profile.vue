<template>
  <div class="home">
    <div class="columns home-container">
      <ProfileBlock />
      <div class="column is-two-quarters">
        <About />
        <section class="title-section">
          <h2 class="title is-6">Last posts</h2>
        </section>
        <section class="card reverseorder">
          <PostProfile v-for="(post, index) in posts" :key="index" :post="post" :user="user" />
        </section>
      </div>
      <ProfileBlock />
    </div>
  </div>
</template>
<script>
// import Post from "@/components/Post.vue";
import PostProfile from "@/components/PostProfile.vue";
import ProfileBlock from "@/components/ProfileBlock.vue";
import About from "@/components/About.vue";

import axios from "axios";

export default {
  name: "ProfileView",
  components: {
    PostProfile,
    ProfileBlock,
    About
  },
  data() {
    return {
      posts: [],
      user: this.$store.state.user
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const url = `http://localhost:3000/users/${this.user.id}/posts`;
      try {
        const { data } = await axios.get(url);
        this.posts = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style scoped>
.home {
  padding: 50px 0;
  background: rgb(241, 241, 241);
}

.home-container {
  width: 80%;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: rgb(172, 172, 172);
}

.title-section {
  margin: 1em 0;
}

.card {
  border-radius: 20px;
}

.reverseorder {
  display: flex;
  flex-direction: column-reverse;
}
</style>