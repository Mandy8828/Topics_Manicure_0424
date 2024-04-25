const app = Vue.createApp({
  data() {
    return {
      showLogin: true,
      loginAccount: "",
      loginPassword: "",
      signupAccount: "",
      signupPassword: "",
      confirmPassword: "",
    };
  },

  methods: {
    goToHomepage() {
      window.location = "./index.html";
    },
    toggleForm() {
      console.log("toggleForm called");
      this.showLogin = !this.showLogin;
      console.log("showLogin:", this.showLogin);
    },

    login() {
      if (
        this.loginAccount === localStorage.getItem("account") &&
        this.loginPassword === localStorage.getItem("password")
      ) {
        alert("登入成功!");
        window.location.href = "./index.html?account=" + this.loginAccount;
      } else {
        alert("帳號或密碼錯誤!");
      }
    },
    signup() {
      if (this.signupPassword === this.confirmPassword) {
        alert("已成功註冊");

        localStorage.setItem("account", this.signupAccount);
        localStorage.setItem("password", this.signupPassword);

        // 設置 showLogin 為 true 以顯示登入部分
        this.showLogin = true;
      } else {
        alert("密碼輸入不正確");
      }
    },
  },
  computed: {
    showSignup() {
      return !this.showLogin;
    },
  },
});

app.mount("#app");
