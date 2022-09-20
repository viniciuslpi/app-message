<template>
  <div class="column is-one-quarter">
    <article class="media card">
      <figure class="media-left">
        <p class="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            class="image-user"
          />
        </p>
      </figure>
      <div class="media-content user-block">
        <div class="content user-text">
          <p><strong>John Smith</strong></p>
          <p><small>@johnsmith</small></p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "ProfileBlockComponent",
};
</script>
<style scoped>
.card {
  border-radius: 20px;
}

.media {
  padding: 10px;
  /* border: 1px solid red; */
  overflow: hidden;
}

.image-user {
  border-radius: 50px;
}

.user-text p {
  margin: 0;
}
</style>
