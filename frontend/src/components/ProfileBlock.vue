<template>
  <div class="profile-block">
    <article class="media card">
      <div class="image">
        <img
          :src="user.userImg"
          class="image-user"
        />
      </div>
      <div class="user-block">
        <p><strong>{{ user.name }}</strong></p>
        <p><small>{{ user.headline }}</small></p>
      </div>
      <div class="media-content info-block">
        <div class="info">
          <p><strong>357</strong></p>
          <p><small>Friends</small></p>
        </div>
        <div class="info">
          <p><strong>{{ user.posts.length }}</strong></p>
          <p><small>Posts</small></p>
        </div>
      </div>
      <ProfileBlockLink :url="infoUrl" />
    </article>
  </div>
</template>
<script>
import ProfileBlockLink from "../components/ProfileBlockLink.vue";

export default {
  name: "ProfileBlockComponent",
  components: {
    ProfileBlockLink,
  },
  data() {
    return {
      infoUrl: window.location.pathname,
      user: {},
    };
  },
  created() {
    this.user = this.$store.state.user
  }
};
</script>
<style scoped>
.profile-block {
  width: 25%;
  padding: 12px;
}

.card {
  border-radius: 20px;
}

.media {
  padding: 40px 0 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image {
  width: 130px;
}

.image-user {
  border-radius: 50%;
}

.user-block {
  text-align: center;
  margin: 20px 0 0 0;
}

.info-block {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0 0 0;
}

.info {
  border: rgb(238, 238, 238) 1px solid;
  width: 50%;
  padding: 10px;
  text-align: center;
}
</style>
