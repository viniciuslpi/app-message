<template>
  <div>
    <section class="card input-section">
      <div class="pos-input-section">
        <p class="image">
          <img
            :src="user.userImg"
            class="image-user"
          />
        </p>
      </div>
      <div class="pos-input-section">
        <input
          class="input is-rounded"
          type="text"
          placeholder="Share something with your friends..."
          v-model="newPost"
        />
      </div>
      <div class="pos-input-section">
        <button
          class="button is-primary is-rounded is-fullwidth"
          @click="createPost"
        >
          Send
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreatePostComponent",
  data() {
    return {
      newPost: null,
      user: this.$store.state.user
    };
  },
  emits: ["updatePost"],
  methods: {
    async createPost() {
      const post = {
        description: this.newPost,
        date: new Date().toString(),
        user: this.user.id
      };
      try {
        const res = await axios.post("http://localhost:3000/posts", post);
        const postID = res.data.message._id;
        await axios.put(`http://localhost:3000/users/${post.user}/posts`, {
          post: postID,
        });
        this.$emit("onCreatePost");
      } catch (error) {
        console.log(error);
      }
      this.newPost = "";
    },
  },
};
</script>
<style scope>
.image-user {
  border-radius: 50px;
}

.input-section {
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  padding: 30px 10px;
}

.input-section img {
  width: 40px;
  height: 40px;
}

.pos-input-section {
  padding: 5px;
}

.pos-input-section:nth-child(1) {
  width: 10%;
}

.pos-input-section:nth-child(2) {
  width: 70%;
}

.pos-input-section:nth-child(3) {
  width: 20%;
}
</style>
