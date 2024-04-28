const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      faqs: [],
    };
  },
  mounted() {
    fetch("./json/mProblem.json")
      .then((response) => response.json())
      .then((data) => {
        this.faqs = data;
        // 在这里执行事件初始化
        document.querySelectorAll("details").forEach((detail) => {
          detail.addEventListener("toggle", () => {
            detail.classList.toggle("open");
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    gotoHomepage() {
      window.location = "./index.html";
    },
  },
});

app.mount("#app");
