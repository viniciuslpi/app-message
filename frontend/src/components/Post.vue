<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img
            :src="post.user.userImg"
            class="image-user"
          />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.user.name }}</strong> <small>{{ post.user.nickName }}</small>
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
  </div>
  <div class="divide-card"></div>
</template>
<script>
export default {
  name: "PostComponent",
  data() {
    return {
      post: {
        user: {
          name: "John Smith",
          nickName: "@johnsmith",
          userImg: "https://pbs.twimg.com/profile_images/697111425529962496/FxgO6Crg_400x400.jpg",
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
        date: new Date(),
      },
    };
  },
};
</script>
<style scoped>
.media {
  padding: 10px;
  /* border: 1px solid red; */
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
