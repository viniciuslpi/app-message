<template>
  <div class="home columns">
    <ProfileBlock />
    <div class="column is-two-quarters">
      <CreatePost @onCreatePost="getPosts"/>
      <section class="title-section">
        <h2 class="title is-2">Recent posts</h2>
      </section>
      <section class="card reverseorder">
        <Post v-for="(post, index) in posts" :key="index" :post="post" />
      </section>
    </div>
    <ProfileBlock />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import CreatePost from "@/components/CreatePost.vue";
import ProfileBlock from "@/components/ProfileBlock.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Post,
    CreatePost,
    ProfileBlock,
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      const url = `http://localhost:3000/posts`;
      try {
        const { data } = await axios.get(url);
        this.posts = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
  }
};
</script>

<style scoped>
.home {
  width: 70%;
  margin: 50px auto;
}

.title {
  text-align: center;
  font-size: 1em;
  color: rgb(172, 172, 172);
}

.title-section {
  margin-bottom: 1em;
}

.card {
  border-radius: 20px;
}

.reverseorder {
  display: flex;
  flex-direction: column-reverse;
}
</style>
