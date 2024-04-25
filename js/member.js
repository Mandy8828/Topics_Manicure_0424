const app = Vue.createApp({
  data() {
    return {
      showLogin: true,
      showSignup: false,
      account1: "",
      password1: "",
      account2: "",
      password2: "",
      password3: "",
    };
  },
  methods: {
    goHome() {
      window.location = "./index.html";
    },
    show_hide() {
      this.showLogin = !this.showLogin;
      this.showSignup = !this.showSignup;

      if (!this.showLogin) {
        this.account1 = "";
        this.password1 = "";
      } else {
        this.account2 = "";
        this.password2 = "";
        this.password3 = "";
      }
    },
    signupHandler(data) {
      this.account2 = data.account2;
      this.password2 = data.password2;
      this.password3 = data.password3;

      alert("已成功註冊");
      localStorage.setItem("account", this.account2);
      localStorage.setItem("password", this.password2);

      this.showLogin = true;
      this.showSignup = false;
    },
    login1(data) {
      event.preventDefault();

      const accountList = localStorage.getItem("account");
      const passwordList = localStorage.getItem("password");

      if (data.account1 === accountList && data.password1 === passwordList) {
        alert("登入成功!");
        window.location.href = "./index.html?account=" + data.account1;
      } else {
        alert("帳號或密碼錯誤!");
      }
    },
  },
});

app.component("frame-component", {
  template: `
  <div class="frame">
    <div class="left" id="Homepage" style="cursor: pointer;"></div>
    <div class="right">
        <div class="item"><a href="./Nailstyle-0.html">美甲款式</a></div>
        <div class="item"><a href="./Storeguide.html">店家導覽</a></div>
        <div class="item"><a href="./Appointmentform.html">預約表單</a></div>
        <div class="item"><a href="./mproblem.html">常見問題</a></div>
    </div>
    <div class="right1">
        <button class="item-right1" @click="showHide"><a href="./member.html">登入 / 註冊</a></button>
    </div>
  </div>
  `,
  methods: {
    goHome() {
      this.$emit("go-home");
    },
    showHide() {
      this.$emit("show-hide");
    },
  },
});

app.component("login-component", {
  props: {
    account1: String,
    password1: String,
  },
  template: `
  <div class="login_page" id="login">
    <div class="login">
        <h3>登入 Login</h3>
        <form @submit.prevent>
            <div><label for="account">帳號：</label></div>
            <div><input type="email" name="account1" id="account1" required v-model="account1"></div>
            <div><br></div>
            <div><label for="password">密碼：</label></div>
            <div><input type="password" name="password1" id="password1" required v-model="password1"></div>

            <div><br></div>
            <div><button type="login" name="login" @click="login1">登入</button></div>
        </form>

        <p @click="show_hide" style="cursor: pointer;">註冊帳號</p>
    </div>
  </div>
  `,
  methods: {
    show_hide() {
      this.$emit("show-signup"); // 發出 show-signup 事件
    },
    login1() {
      this.$emit("login", {
        account1: this.account1,
        password1: this.password1,
      });
    },
  },
});

app.component("signup-component", {
  props: {
    account2: String,
    password2: String,
    password3: String,
  },
  template: `
  <div class="signup_page" id="signup">
    <div class="signup">
        <h3>註冊 Sign up</h3>
        <form @submit.prevent="signupHandler">
            <div><label for="account2">帳號：</label></div>
            <div><input type="email" id="account2" name="account2" required v-model="account2"></div>
            <div><br></div>
            <div><label for="password2">密碼：</label></div>
            <div><input type="password" name="password2" id="password2" required v-model="password2"></div>
            <div><br></div>
            <div><label for="password3">請再次輸入密碼：</label></div>
            <div><input type="password" name="password3" id="password3" required v-model="password3"></div>
            <div><br></div>
            <div><button type="submit" name="submit">註冊</button></div>
        </form>

        <p @click="show_hide" style="cursor: pointer;">登入會員</p>
    </div>
  </div>
  `,
  methods: {
    show_hide() {
      this.$emit("show-login"); // 發出 show-login 事件
    },
    signupHandler() {
      if (this.password2 === this.password3) {
        this.$emit("signup", {
          account2: this.account2,
          password2: this.password2,
          password3: this.password3,
        });
      } else {
        alert("密碼輸入不正確");
      }
    },
  },
});

app.component("footer-component", {
  template: `
  <div class="footer">
    <div class="footer1">
        <div class="footer1_pic"></div>
    </div>
    <div class="footer2">
        <div>
            <p>美甲預約平台</p>
            <p>☏ 0900-000000</p>
        </div>
    </div>
    <div class="footer3">
        <div>
            <p>✉ manicure@gmail.com</p>
            <p>台中市南屯區公益路二段51號18樓</p>
        </div>
    </div>
  </div>
  `,
});

app.mount("#app");
