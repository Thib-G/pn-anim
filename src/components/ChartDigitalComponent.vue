<template>
  <svg :width="width" :height="height">
    <rect
      v-for="r in rectangles"
      :key="r.key"
      :x="r.x"
      :y="r.y"
      :width="r.width"
      :height="r.height"
      :class="{ [r.class]: true, active: r === activeRectangle }">
    </rect>
    <g :transform="`translate(${mouseX},0)`">
      <line
        class="position"
        :x1="0"
        :x2="0"
        :y1="0"
        :y2="height" />
      <text x="3" y="20">
        {{ activeRectangle.varval }}
      </text>
    </g>
    <rect
      ref="mouseRect"
      :width="width"
      :height="height"
      :style="{ fill: 'none', 'pointer-events': 'all' }"
    />
  </svg>
</template>

<script>
import d3 from '@/assets/d3';

export default {
  props: {
    scaleX: {
      type: Function,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    vals: {
      type: Array,
      required: true,
    },
    mouseX: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      height: 30,
      classes: {
        0: 'zero',
        1: 'one',
      },
    };
  },
  mounted() {
    d3.select(this.$refs.mouseRect)
      .on('mousemove', (d, i, nodes) => {
        const x = d3.mouse(nodes[i])[0];
        this.$emit('mouse-x', x);
      });
  },
  watch: {
    activeRectangle(newVal) {
      this.$emit('varval-change', newVal.varname, newVal.varval);
    },
  },
  computed: {
    rectangles() {
      if (this.vals.length > 1) {
        return this.vals
          .filter((v, i) => i < this.vals.length - 1)
          .map((v, i) => ({
            key: i,
            width: this.scaleX(this.vals[i + 1].ts_meas) - this.scaleX(v.ts_meas),
            height: this.height,
            x: this.scaleX(v.ts_meas),
            y: 0,
            varname: v.varname,
            varval: v.varval,
            class: this.classes[v.varval],
          }));
      }
      return [{
        key: 0,
        width: this.width,
        height: this.height,
        x: 0,
        y: 0,
        varname: this.vals[0].varname,
        varval: this.vals[0].varval,
        class: this.classes[this.vals[0].varval],
      }];
    },
    activeRectangle() {
      return this.rectangles.find(r => r.x <= this.mouseX && r.x + r.width > this.mouseX);
    },
  },
};
</script>

<style>
  .one {
    fill: green;
  }
  .zero {
    fill: lightgrey;
  }
  .active {
    opacity: 0.7;
  }
  line.position {
    stroke-width: 1px;
    stroke: black;
  }
</style>
