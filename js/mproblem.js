const { createApp, ref } = Vue;

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
        this.$nextTick(() => {
          this.initializeEvents();
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
