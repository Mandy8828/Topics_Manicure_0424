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
    // Call Air datepicker function
    const datepicker = new AirDatepicker(this.$refs.myDatepicker, {
      locale: en,
      // ... other datepicker settings ...
    });
  },
});

app.mount("#app");
