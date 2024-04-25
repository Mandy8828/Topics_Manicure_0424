const app = Vue.createApp({
  data() {
    return {
      stores: [],
      selectedLocation: null,
    };
  },
  methods: {
    fetchData() {
      fetch("./json/stores.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.stores = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    filterStoresByLocation(location) {
      this.selectedLocation = location;
    },
    goToHomepage() {
      window.location = "./index.html";
    },
  },
  computed: {
    filteredStores() {
      if (!this.selectedLocation) {
        return this.stores;
      }
      return this.stores.filter(
        (store) => store.location === this.selectedLocation
      );
    },
  },
  mounted() {
    this.fetchData();

    document.querySelectorAll(".side ul li").forEach((li) => {
      li.addEventListener("click", (event) => {
        const location = event.target.textContent.trim();
        this.filterStoresByLocation(location);
      });
    });

    document.querySelector("#Homepage").addEventListener("click", () => {
      this.goToHomepage();
    });
  },
});

app.component("store-item", {
  props: ["store"],
  template: `
    <div :id="store.id" style="display: flex" class="colall">
      <span class="storepic">
        <img :src="store.storepic" width="180px" height="180px" style="border-radius: 50%" />
      </span>
      <ul class="storecontent">
        <li>店名：<a :href="store.storelink">{{ store.storename }}</a></li>
        <li>店家地區：{{ store.location }}</li>
        <li>位置：{{ store.address }}</li>
      </ul>
      <div class="zoom">
        <img :src="store.priceimg" width="170px" height="190px" style="border-radius: 20px" />
      </div>
    </div>
  `,
});

app.mount("#app");
