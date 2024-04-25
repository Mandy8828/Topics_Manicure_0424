const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      faqs: [], // 初始化 faqs 為一個空陣列
    };
  },
  mounted() {
    fetch("/mProblem.json")
      .then((response) => response.json())
      .then((data) => {
        this.faqs = data;
        this.$nextTick(() => {
          this.initializeEvents();
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  methods: {
    initializeEvents() {
      const router = app._router;
      this.$refs.Homepage.onclick = () => {
        router.push({ path: "/" });
      };
    },
  },
});

app.mount("#app");
