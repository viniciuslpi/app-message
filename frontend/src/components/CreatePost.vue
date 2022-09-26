<template>
  <div>
    <section class="card input-section">
      <div class="pos-input-section">
        <p class="image">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
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
        <button class="button is-primary is-rounded is-fullwidth" @click="createPost">Send</button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name: 'CreatePostComponent',
    data() {
      return {
        newPost: null
      }
    },
    emits: ['updatePost'],
    methods: {
      async createPost() {
        
        const url = 'http://localhost:3000/posts'
        const post = {
          description: this.newPost,
          date: new Date().toString(),
          user: "62fec5dcecc427f323f77f8c"
        }

        try {
          const res = await axios.post(url, post);
          // setTimeout(() => {
          //   this.$emit('onCreatePost');
          // }, 0);
          this.$emit('onCreatePost');
          console.log(res.data);
        } catch (error) {
          console.log(error)
        }
        this.newPost = '';
      }
    }
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
