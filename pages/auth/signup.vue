<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <h1 class="title has-text-grey">
            Sign up
          </h1>
          <div class="box">
            <form @submit.prevent="submit">
              <div class="field">
                <label class="label">Name</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="form.name"
                    class="input is-success"
                    :class="{ 'is-danger': errors.name }"
                    type="text"
                    placeholder="Enter name"
                  />
                  <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="form.email"
                    class="input is-success"
                    type="email"
                    placeholder="Enter email address"
                    :class="{ 'is-danger': errors.email }"
                  />
                  <p class="help is-danger" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="form.password"
                    class="input"
                    type="password"
                    placeholder="Password input"
                    :class="{ 'is-danger': errors.password }"
                  />
                  <p class="help is-danger" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <button class="button is-block is-info is-large is-fullwidth">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ["guest"],

  data() {
    return {
      form: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    async submit() {
      //   console.log('Form submitted')
      try {
        await this.$axios.post("register", this.form);
        await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        });
        if (loggedIn === true) {
          this.$router.push({
            path: this.$route.query.redirect || "/" //@todo redirect intended
          });
        }
      } catch (error) {
        console.log("Hello");
      }
    }
  }
};
</script>
