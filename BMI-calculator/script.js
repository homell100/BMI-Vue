const myApp = Vue.createApp({
  data() {
    return {
      height: "",
      weight: "",
      bmi: undefined
    }
  },
  methods: {
    computeBMI: function () {
      this.bmi = (this.weight / (this.height * this.height) * 10000).toFixed(1)
    }
  },
  computed: {
    isUnderBMI: function () {
      return this.bmi <= 18.6
    },
    isNormalBMI: function () {
      return this.bmi > 18.6 && this.bmi <= 24.9
    },
    isOverBMI: function () {
      return this.bmi > 24.9
    }
  }
})

myApp.mount("body")