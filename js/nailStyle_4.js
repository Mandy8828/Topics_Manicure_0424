const app = Vue.createApp({
  data() {
    return {
      nailstyles: [],
    };
  },
  mounted() {
    fetch("./json/nailStyle_4.json")
      .then((response) => response.json())
      .then((data) => {
        this.nailstyles = data;
      });
  },
  methods: {
    gotoHomepage() {
      window.location = "./index.html";
    },
  },
});

app.mount("#app");
