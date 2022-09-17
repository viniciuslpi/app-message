<template>
  <section class="login-body">
    <div class="login">
      <div class="block">
        <h1 class="login-title">Welcome to App Message!</h1>
        <p>Share messages with your friends...</p>
      </div>
      <form class="block block-form" @submit="loginForm">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              v-model="email"
              type="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              v-model="password"
              type="password"
              placeholder="Password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <p class="has-text-danger" v-if="incorrect">
            Email ou senha incorretos
          </p>
        </div>
        <div class="field">
          <div class="options">
            <div class="option-remember">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
              />
              <label for="remember" class="remember-label">Remember-me</label>
            </div>
            <a href="#">Forgot your passaword?</a>
          </div>
          <p class="control">
            <button class="button is-success" type="submit">Sign in</button>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      email: null,
      password: null,
      incorrect: false,
    };
  },
  methods: {
    async doLogin(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password,
      };
      await this.verifyLogin(user);
    },
    async verifyLogin(user) {
      const url = `http://localhost:3000/users/email/${user.email}`;
      try {
        const { data } = await axios.get(url);
        if(this.verifyUser(user, data)) {
          console.log(data);
          this.$router.push("/home");
        } else {
          this.incorrect = true;
        }
      } catch (error) {
        this.incorrect = true;
        console.log(error.response.data);
      }
    },
    verifyUser(user, data) {
      if (user.email === data.email && user.password === data.password) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scope>
.login-body {
  display: flex;
  justify-content: center;
}

.login {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  /* border: pink solid 1px; */
  width: 70%;
  height: 80vh;
}

.block {
  /* border: solid 1px red; */
  margin: 20px;
  width: 500px;
}

.block-form {
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px rgb(231, 231, 231);
}

.login-title {
  font-size: 40px;
}

.remember-label {
  padding-left: 5px;
}

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
