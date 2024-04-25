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
      window.location = "./nailStyle_0.html";
    },
    goToGuide() {
      window.location = "./storeGuide.html";
    },
    goToAppointmentForm() {
      window.location = "./appointmentForm.html";
    },
    goToNail1() {
      window.location = "./nailStyle_1.html";
    },
    goToNail2() {
      window.location = "./nailStyle_2.html";
    },
    goToNail3() {
      window.location = "./nailStyle_3.html";
    },
    goToNail4() {
      window.location = "./nailStyle_4.html";
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.account = urlParams.get("account");
  },
});

app.mount("#app");
