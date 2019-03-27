<template>
  <div>
    <svg :width="width" :height="height">
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
    </svg>
    <div>
      <input
        id="pn"
        type="range"
        name="pn"
        :min="minVal"
        :max="maxVal"
        v-model="val"
      >
    </div>
    <div>
      {{ val }}
    </div>
  </div>
</template>

<script>
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
      direction: 1,
      anim: null,
    };
  },
  computed: {
    transform() {
      return `rotate(${-this.val / (this.maxVal - this.minVal) * 90} ${this.barrierAnchor} ${this.barrierHeight / 2})`;
    },
    val() {
      if (this.kob === 0 && this.kfb === 0) {
        return 50;
      }
      return this.kob * (1 - this.kfb) * 100;
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
