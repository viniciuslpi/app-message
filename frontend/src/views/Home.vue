<template>
  <div class="home columns">
    <div class="column is-one-third t">
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
    <div class="column is-two-thirds t">
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
          />
        </div>
        <div class="pos-input-section">
          <button class="button is-primary is-rounded is-fullwidth">Send</button>
        </div>
      </section>

      <article class="media card">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              class="image-user"
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"
                  ><i class="fas fa-retweet"></i
                ></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  width: 70%;
  /* border: 1px solid black; */
  margin: 50px auto;
}

.t {
  /* border: 1px solid red; */
  height: 100%;
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

.media {
  padding: 10px;
  /* border: 1px solid red; */
  border-radius: 20px;
  overflow: hidden;
}

.image-user {
  border-radius: 50px;
}

.user-text p {
  margin: 0;
}
</style>