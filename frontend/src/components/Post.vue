<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="post.user.userImg" class="image-user" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.user.name }}</strong>
            <small>{{ post.user.nickName }}</small>
            <small>31m</small>
            <br />
            {{ post.description }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <div class="divide-card"></div>
  </div>
</template>
<script>
export default {
  name: "PostComponent",
  props: {
    post: {
      description: String,
      date: Date,
      user: {
          name: String,
          nickName: String,
          userImg: String,
        },
    },
  },
};
</script>
<style scoped>
.media {
  padding: 10px;
  overflow: hidden;
}

.image-user {
  border-radius: 50px;
}

.divide-card {
  width: 80%;
  margin: 10px auto;
  height: 1px;
  background-color: #ccc;
}
</style>
