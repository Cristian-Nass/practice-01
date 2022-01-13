const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? 'LearnVue' : 'Master Vue'
    }
  }
});

app.mount('#user-goal');