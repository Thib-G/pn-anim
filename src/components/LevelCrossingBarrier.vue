<template>
  <svg :width="width" :height="height">
    <g :transform="mirror">
      <g :transform="`translate(${barrierHeight},${height - 6 * barrierHeight})`">
        <g :transform="transform">
          <rect
            v-for="i in nrRects"
            :key="i"
            :x="(i - 1) * barrierWidth / nrRects"
            :width="barrierWidth / nrRects"
            :height="barrierHeight"
            class="barrier"
            :class="{ red: i % 2 === 0 }"
          />
          <circle
            :cx="((nrRects - 1.5) / nrRects) * barrierWidth"
            :cy="barrierHeight / 2"
            :r="r"
            class="circle-barrier"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
import { TweenLite } from 'gsap';

export default {
  props: {
    cb: {
      type: Number,
      required: true,
    },
    kob: {
      type: Number,
      required: true,
    },
    kfb: {
      type: Number,
      required: true,
    },
    reverse: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      width: 300,
      height: 300,
      barrierHeight: 10,
      barrierWidth: 280,
      barrierAnchor: 50,
      minVal: 0,
      maxVal: 100,
      nrRects: 6,
      r: 25,
      tweenVal: { x: 0 },
    };
  },
  created() {
    this.tweenVal = { x: this.val };
  },
  watch: {
    val(newVal, oldVal) {
      this.tweenVal = { x: oldVal };
      TweenLite.to(this.tweenVal, 1.5, { x: newVal });
    },
  },
  computed: {
    transform() {
      return `rotate(${-this.tweenVal.x / (this.maxVal - this.minVal) * 90} ${this.barrierAnchor} ${this.barrierHeight / 2})`;
    },
    val() {
      if (this.kob === 0 && this.kfb === 0) {
        return 50;
      }
      return this.kob * (1 - this.kfb) * 100;
    },
    mirror() {
      return `translate(${this.reverse === -1 ? this.width : 0},0) scale(${this.reverse},1)`;
    },
  },
};
</script>

<style scoped>
  .barrier {
    stroke-width: 1;
    stroke: red;
    fill: white;
  }
  .red {
    fill: red;
  }
  .circle-barrier {
    stroke-width: 8;
    stroke: red;
    fill: white;
  }
</style>
