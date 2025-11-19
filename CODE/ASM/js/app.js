const app = Vue.createApp({
  computed: {
    currentView() {
      return router.current;
    }
  },
  template: `
    <navbar></navbar>
    <component :is="currentView"></component>
  `
});

// Register router vào global scope cho Vue
app.config.globalProperties.$router = router;

// REGISTER PAGES
app.component("home-page", HomePage);
app.component("login-page", LoginPage);
app.component("register-page", RegisterPage);
app.component("create-post-page", CreatePostPage);
app.component("post-detail-page", PostDetailPage);
app.component("profile-page", ProfilePage);

// REGISTER COMPONENTS
app.component("navbar", Navbar);
app.component("post-item", PostItem);
app.component("comment-item", CommentItem);

app.mount("#app");
