<template>
  <div>
    <svg :width="width" :height="height">
      <g :transform="`translate(0,${height - 6 * barrierHeight})`">
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
      <input type="button" @click="startAnim" value="start">
      <input type="button" @click="stopAnim" value="stop">
    </div>
    <div>
      {{ val }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 300,
      height: 300,
      barrierHeight: 10,
      barrierWidth: 280,
      barrierAnchor: 50,
      minVal: 0,
      maxVal: 100,
      val: 40,
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
  },
  methods: {
    startAnim() {
      clearInterval(this.anim);
      this.anim = setInterval(() => {
        this.val = +this.val + (this.direction * 1);
        if (this.val > this.maxVal) {
          this.direction = -1;
        }
        if (this.val < this.minVal) {
          this.direction = 1;
        }
      }, 20);
    },
    stopAnim() {
      clearInterval(this.anim);
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
