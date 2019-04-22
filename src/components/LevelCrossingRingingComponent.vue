<template>
  <div>
  </div>
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
  },
  data() {
    return {
      audio: new Audio(url),
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
  },
  methods: {
    updateAudio() {
      if (this.cl === 0 && this.kfb === 0) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
  },
};
</script>
