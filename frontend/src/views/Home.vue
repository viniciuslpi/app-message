<template>
  <div class="home columns">
    <ProfileBlock />
    <div class="column is-two-quarters">
      <CreatePost />
      <section class="title-section">
        <h2 class="title is-2">Recent posts</h2>
      </section>
      <section class="card">
        <Post />
        <Post />
        <Post />
      </section>
    </div>
    <ProfileBlock />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import CreatePost from "@/components/CreatePost.vue";
import ProfileBlock from "@/components/ProfileBlock.vue";

export default {
  name: "HomeView",
  components: {
    Post,
    CreatePost,
    ProfileBlock,
},
};
</script>

<style scoped>
.home {
  width: 70%;
  /* border: 1px solid black; */
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
</style>
