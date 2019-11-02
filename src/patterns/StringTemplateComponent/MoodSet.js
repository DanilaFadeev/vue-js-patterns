import Vue from 'vue';

export default Vue.component('MoodSet', {
  data() {
    return {
      sliderValue: 0
    };
  },
  computed: {
    currentMood() {
      if (this.sliderValue < 20) { return 'Bad'; }
      if (this.sliderValue < 40) { return 'Common'; }
      if (this.sliderValue < 60) { return 'Nice'; }
      if (this.sliderValue < 80) { return 'Cool'; }
      return 'Amazing!';
    }
  },
  methods: {
    formatTooltip() {
      return this.currentMood;
    }
  },
  template: `
    <div>
      <h3>Your mood: {{ currentMood }}</h3>
      <el-slider v-model="sliderValue" :format-tooltip="formatTooltip"></el-slider>
    </div>
  `,
});
