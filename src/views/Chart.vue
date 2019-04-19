<template>
  <div>
    <div>
      <div>
        <LevelCrossingBarrier
          v-if="activeVars"
          :cb="activeVars.cb_xy"
          :kob="activeVars.kob_x"
          :kfb="activeVars.kfb_x"
        />
        <LevelCrossingBarrier
          v-if="activeVars"
          :cb="activeVars.cb_xy"
          :kob="activeVars.kob_y"
          :kfb="activeVars.kfb_y"
          :reverse="-1"
        />
      </div>
      <div>
        <LevelCrossingSignal
          v-if="activeVars"
          :cl="activeVars.cl"
          :klp="activeVars.klp"
          :klr1="activeVars.klr1_xy"
          :klr2="activeVars.klr2_xy"
        />
        <LevelCrossingSignal
          v-if="activeVars"
          :cl="activeVars.cl"
          :klp="activeVars.klp"
          :klr1="activeVars.klr1_xy"
          :klr2="activeVars.klr2_xy"
        />
      </div>
      <p>{{ x }}</p>
      <p>{{ scaleX.invert(x) }}</p>
      <table class="center">
        <tbody>
          <tr
            v-for="ch in ev"
            :key="ch.key">
            <td>
            {{ ch.key }}
            </td>
            <td>
              <ChartDigitalComponent
                :vals="ch.values"
                :scale-x="scaleX"
                :width="width"
                :mouse-x="x"
                @mouse-x="mouseX"
                @varval-change="varvalChange" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import d3 from '@/assets/d3';
import PnService from '@/services/pn-service';

import ChartDigitalComponent from '@/components/ChartDigitalComponent.vue';
import LevelCrossingBarrier from '@/components/LevelCrossingBarrier.vue';
import LevelCrossingSignal from '@/components/LevelCrossingSignal.vue';

export default {
  data() {
    return {
      pnService: PnService,
      events: [],
      x: 0,
      width: 800,
      activeVars: undefined,
    };
  },
  created() {
    this.getEvents();
  },
  watch: {
    ev(newVal) {
      const vars = {};
      newVal.forEach((x) => {
        vars[x.key] = 0;
      });
      this.activeVars = vars;
    },
  },
  computed: {
    ev() {
      return d3.nest()
        .key(d => d.varname)
        .entries(this.events);
    },
    tsFrom() {
      return new Date(Math.min(...this.events.map(e => e.ts_meas)));
    },
    tsTo() {
      return new Date(Math.max(...this.events.map(e => e.ts_meas)));
    },
    scaleX() {
      return d3.scaleTime()
        .domain([this.tsFrom, this.tsTo])
        .range([0, this.width]);
    },
  },
  methods: {
    getEvents() {
      this.pnService.getEvents().then((data) => {
        this.events = data;
      });
    },
    mouseX(event) {
      this.x = event;
    },
    varvalChange(varname, varval) {
      this.activeVars = Object.assign({}, this.activeVars, { [varname]: varval });
    },
  },
  components: {
    ChartDigitalComponent,
    LevelCrossingBarrier,
    LevelCrossingSignal,
  },
};
</script>

<style scoped>
  table.center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
