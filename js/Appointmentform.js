const en = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  today: "Today",
  clear: "Clear",
  dateFormat: "yyyy/MM/dd",
  timeFormat: "hh:mm",
  firstDay: 0,
};

const app = Vue.createApp({
  data() {
    return {
      selectedStore: "0",
      stores: [
        { name: "請選擇", value: "0" },
        { name: "starlight nails", value: "starlight nails" },
        { name: "PUT ON NAILS", value: "PUT ON NAILS" },
        { name: "Time Fans時分美甲工作室", value: "Time Fans時分美甲工作室" },
        { name: "Lavender.nail", value: "Lavender.nail" },
        { name: "Mita nail", value: "Mita nail" },
        { name: "CI.NAIL_BEAUTY", value: "CI.NAIL_BEAUTY" },
        { name: "HAN NAIL", value: "HAN NAIL" },
        { name: "Muse nails", value: "Muse nails" },
        { name: "OG_HSIN_Nails", value: "OG_HSIN_Nails" },
        { name: "柚子捏", value: "柚子捏" },
        { name: "METEA ART", value: "METEA ART" },
      ],
      formData: {
        selectedStore: "",
        selectedDate: "",
        manicureType: "",
        name: "",
        phone: "",
        remove: "",
        extend: "",
      },
      sliderImages: [
        "./image/nailstyle-Christmas/05-musenails.jpg",
        "./image/nailstyle-Maillard/04-metea_.art.jpg",
        "./image/nailstyle-modeling/01-time_fans.studio.jpg",
        "./image/nailstyle-monochrome/08-youzinei.nail.jpg",
      ],
      sliderControls: ["control-1", "control-2", "control-3", "control-4"],
    };
  },
  methods: {
    handleSubmit() {
      const formData = {
        selectedStore: this.selectedStore,
        selectedDate: this.$refs.myDatepicker.selectedDates,
        manicureType: document.getElementById("manicuretype").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        remove: document.getElementById("remove").value,
        extend: document.getElementById("extend").value,
      };

      console.log("提交的表單數據:", formData);
    },
    printCurrentTime() {
      console.log(this.$refs.myDatepicker.selectedDates);
    },
    goToHomepage() {
      window.location = "./index.html";
    },
  },

  mounted() {
    const datepicker = new AirDatepicker(this.$refs.myDatepicker, {
      locale: en,
    });
  },
});

app.mount("#app");
