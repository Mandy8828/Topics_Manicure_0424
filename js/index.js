const app = Vue.createApp({
  data() {
    return {
      account: "",
    };
  },
  computed: {
    loginText() {
      return this.account ? `Welcome, ${this.account}!` : "登入 / 註冊";
    },
  },
  methods: {
    loginClick() {
      if (!this.account) {
        window.location = "./member.html";
      }
    },
    logout() {
      console.log("Logout function called");
      sessionStorage.removeItem("account");
      localStorage.removeItem("account");

      console.log("Session storage: ", sessionStorage.getItem("account"));
      console.log("Local storage: ", localStorage.getItem("account"));

      this.account = ""; // 更新Vue的狀態
      window.location.href = "./index.html";
    },
    goToHomepage() {
      window.location = "./index.html";
    },
    goToShape() {
      window.location = "./Nailstyle-0.html";
    },
    goToGuide() {
      window.location = "./Storeguide.html";
    },
    goToAppointmentForm() {
      window.location = "./Appointmentform.html";
    },
    goToNail1() {
      window.location = "./Nailstyle-1.html";
    },
    goToNail2() {
      window.location = "./Nailstyle-2.html";
    },
    goToNail3() {
      window.location = "./Nailstyle-3.html";
    },
    goToNail4() {
      window.location = "./Nailstyle-4.html";
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.account = urlParams.get("account");
  },
});

app.mount("#app");
