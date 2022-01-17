const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master of Vue!',
      vueLink: 'https://vuejs.org/',
      imgLink: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? this.courseGoalA : this.courseGoalB
    },
    increment() {
      this.counter++;
    },
    setName(event) {
      this.name = event.target.value;
    }
  }
});

app.mount('#user-goal');
