<template>
    <svg width="75" height="75">
      <g id="g1">
        <polygon
          ref="polygon1"
          points="
            39.389,13.769 22.235,
            28.606 6,28.606 6,
            47.699 21.989,
            47.699 39.389,
            62.75 39.389,
            13.769"
          style="stroke:#111111;stroke-width:5;stroke-linejoin:round;fill:#111111;"
        />
        <g v-if="playing">
          <path
            ref="path1"
            d="M 48.128,49.03
              C 50.057,45.934 51.19,42.291 51.19,38.377
              C 51.19,34.399 50.026,30.703 48.043,27.577"
            style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"
          />
          <path
            ref="path2"
            d="M 55.082,20.537
              C 58.777,25.523 60.966,31.694 60.966,38.377
              C 60.966,44.998 58.815,51.115 55.178,56.076"
            style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"
          />
          <path
            ref="path3"
            d="M 61.71,62.611
              C 66.977,55.945 70.128,47.531 70.128,38.378
              C 70.128,29.161 66.936,20.696 61.609,14.01"
            style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"
          />
        </g>
        <g v-if="mute">
          <g transform="translate(5, 12) rotate(45)">
            <rect
              width="75"
              height="3"
              x="0"
              y="0"
              style="fill:red"
            />
          </g>
        </g>
        <g>
          <rect
            x="0"
            y="0"
            width="75"
            height="75"
            :style="{ fill: 'none', 'pointer-events': 'all', 'cursor': 'pointer' }"
            @click="mute = !mute"
          />
        </g>
      </g>
    </svg>
</template>

<script>
const url = 'media/sonnerie-trimmed.mp3';

export default {
  props: {
    cl: {
      type: Number,
      required: true,
    },
    kfb: {
      type: Number,
      required: true,
    },
    kga2: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      audio: new Audio(url),
      playing: false,
      mute: false,
    };
  },
  mounted() {
    this.audio.addEventListener('ended', () => {
      this.audio.currentTime = 0;
      this.audio.play();
    }, false);
  },
  watch: {
    cl() {
      this.updateAudio();
    },
    kfb() {
      this.updateAudio();
    },
    kga2() {
      this.updateAudio();
    },
    mute() {
      this.audio.muted = this.mute;
    },
  },
  methods: {
    updateAudio() {
      if (this.cl === 0 && this.kfb === 0 && this.kga2 === 0) {
        this.audio.play();
        this.playing = true;
      } else {
        this.audio.pause();
        this.playing = false;
      }
    },
  },
};
</script>
