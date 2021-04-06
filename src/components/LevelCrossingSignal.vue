<template>
  <svg
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="138"
    height="99"
    viewBox="0 0 1150 825">
    <g class="frame">
      <path
        d="M 250 50
            A 200 200 0 0 0 50 250
            A 200 200 0 0 0 108.66602 391.33398
            L 108.57812 391.42188
            L 433.57812 716.42188
            L 433.66602 716.33398
            A 200 200 0 0 0 575 775
            A 200 200 0 0 0 716.33398 716.33398
            L 716.42188 716.42188
            L 1041.4219 391.42188
            L 1041.334 391.33398
            A 200 200 0 0 0 1100 250
            A 200 200 0 0 0 900 50
            L 250 50 z"
        fill="black"
        stroke-width="25" stroke="grey" />
    </g>
    <g class="lamps" transform="translate(50,50)">
      <g transform="translate(200,200)">
        <circle class="lr lr1" cx="0" cy="0" r="130" :style="{ opacity: opacity(lr1) }" />
        <circle class="lr lr2" cx="650" cy="0" r="130" :style="{ opacity: opacity(lr2) }" />
      </g>
      <g transform="translate(525,525)">
        <circle class="lp" cx="0" cy="0" r="130" :style="{ opacity: opacity(lp) }" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  // ['cl', 'klb', 'klr1', 'klr2']
  props: {
    cl: {
      type: Number,
      required: true,
    },
    klp: {
      type: Number,
      required: true,
    },
    klr1: {
      type: Number,
      required: true,
    },
    klr2: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      margin: 5,
      width: 150,
      height: Math.round((Math.sqrt(3) / 2) * 150),
      r: 15,
      periodLR: 60 / 65,
      periodLB: 60 / 32,
      tween: 0,
      t0: Date.now(),
    };
  },
  mounted() {
    this.blink();
  },
  computed: {
    d() {
      return `M 0,0 ${this.width},0 ${this.width / 2},${this.height} z`;
    },
    lp() {
      return this.cl * this.klp * this.tween;
    },
    lr1() {
      return (1 - this.cl) * this.klr1 * this.tween;
    },
    lr2() {
      return (1 - this.cl) * this.klr2 * (1 - this.tween);
    },
    period() {
      if (this.cl === 1) {
        return this.periodLB;
      }
      return this.periodLR;
    },
  },
  methods: {
    opacity(x) {
      return 0.20 + (0.80 * x);
    },
    blink() {
      const t = (Date.now() - this.t0) / 1000;
      this.tween = (Math.sin((t * 2 * Math.PI) / this.period) + 1) / 2;
      requestAnimationFrame(this.blink);
    },
  },
};
</script>

<style scoped>
  .signal > .board {
    stroke-width: 4;
    stroke-linejoin: round;
    stroke: grey;
    fill: black;
  }
  .lp {
    stroke: none;
    fill: white;
  }
  .lr {
    stroke: none;
    fill: red;
  }
</style>
