const Navbar = {
  methods: {
    go(page) {
      this.$router.go(page);
    }
  },
  template: `
    <nav>
      <button @click="go('home-page')">Home</button>
      <button @click="go('login-page')">Login</button>
      <button @click="go('register-page')">Register</button>
      <button @click="go('create-post-page')">Đăng bài</button>
      <button @click="go('profile-page')">Profile</button>
    </nav>
  `
};
