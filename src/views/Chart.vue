<template>
  <b-row>
    <b-col>
      <h1>Animation passage à niveau</h1>
      <p>Basée sur les données du SGM.<br />
        Cliquez sur &laquo;&nbsp;Play&nbsp;&raquo; ci-dessous pour rejouer les événements.</p>
      <b-card>
        <b-card class="mb-2" v-if="activeVars">
          <h4>Barrières</h4>
          <b-row class="mb-3">
            <b-col class="text-center">
              <LevelCrossingBarrier
                v-if="activeVars"
                :cb="activeVars.cb_xy"
                :kob="activeVars.kob_x"
                :kfb="activeVars.kfb_x"
              />
              <b-card class="text-center">
                <span
                  v-for="v in ['cb_xy', 'kob_x', 'kfb_x']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></span>
              </b-card>
            </b-col>
            <b-col class="text-center">
              <LevelCrossingBarrier
                v-if="activeVars"
                :cb="activeVars.cb_xy"
                :kob="activeVars.kob_y"
                :kfb="activeVars.kfb_y"
                :reverse="-1"
              />
              <b-card class="text-center">
                <span
                  v-for="v in ['cb_xy', 'kob_y', 'kfb_y']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></span>
              </b-card>
            </b-col>
          </b-row>
          <hr />
          <h4>Feux</h4>
          <b-row>
            <b-col>
              <LevelCrossingSignal
                v-if="activeVars"
                :cl="activeVars.cl"
                :klp="activeVars.klp"
                :klr1="activeVars.klr1_xy"
                :klr2="activeVars.klr2_xy"
              />
              <b-card class="text-center">
                <span
                  v-for="v in ['cl', 'klp', 'klr1_xy', 'klr2_xy']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></span>
              </b-card>
            </b-col>
            <b-col>
              <LevelCrossingSignal
                v-if="activeVars"
                :cl="activeVars.cl"
                :klp="activeVars.klp"
                :klr1="activeVars.klr1_xy"
                :klr2="activeVars.klr2_xy"
              />
              <b-card class="text-center">
                <span
                  v-for="v in ['cl', 'klp', 'klr1_xy', 'klr2_xy']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></span>
              </b-card>
            </b-col>
          </b-row>
          <hr />
          <h4>Sonnerie</h4>
          <b-row>
            <b-col>
              <LevelCrossingRingingComponent
                v-if="activeVars"
                :cl="activeVars.cl"
                :kfb="activeVars.kfb_x * activeVars.kfb_y"
                :kga2="activeVars.kga2"
              />
              <b-card class="text-center">
                <span class="mr-3" v-b-tooltip.hover :title="names['cl']">cl
                  <b-badge>{{ activeVars.cl }}</b-badge></span>
                <span class="mr-3">
                  <span v-b-tooltip.hover :title="names['kfb_x']">kfb_x</span> *
                  <span v-b-tooltip.hover :title="names['kfb_y']">kfb_y</span>
                   &nbsp;<b-badge>{{ activeVars.kfb_x * activeVars.kfb_y }}</b-badge></span>
                <span class="mr-3" v-b-tooltip.hover :title="names['kga2']">kga2
                  <b-badge>{{ activeVars.kga2 }}</b-badge></span>
              </b-card>
            </b-col>
          </b-row>
          <!--<p>{{ x }}</p>-->
          <hr />
          <h5 class="mt-2">
            <b-badge variant="info" class="mr-1">{{ t.toLocaleString() }}</b-badge>
          </h5>
          <p>
            <b-button @click="play" v-if="stopped">Play</b-button>
            <b-button @click="stop" v-if="!stopped">Stop</b-button>
          </p>
        </b-card>
        <b-card header="Variables">
          <table class="center">
            <tbody>
              <tr
                v-for="ch in ev"
                :key="ch.key">
                <td>
                  <span v-b-tooltip.hover :title="names[ch.key]" v-once>{{ ch.key }}</span>
                </td>
                <td>
                  <ChartDigitalComponent
                    :vals="ch.values"
                    :scale-x="scaleX"
                    :width="width"
                    :mouse-x="x"
                    :clicked="clicked"
                    @clicked="clicked = $event"
                    @mouse-x="mouseX"
                    v-model="activeVars[ch.key]"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import d3 from '@/assets/d3';
import PnService from '@/services/pn-service';

import ChartDigitalComponent from '@/components/ChartDigitalComponent.vue';
import LevelCrossingBarrier from '@/components/LevelCrossingBarrier.vue';
import LevelCrossingSignal from '@/components/LevelCrossingSignal.vue';
import LevelCrossingRingingComponent from '@/components/LevelCrossingRingingComponent.vue';

import getName from '@/assets/designations';

export default {
  data() {
    return {
      pnService: PnService,
      events: [],
      x: 0,
      width: 800,
      activeVars: undefined,
      starttime: Date.now(),
      t0: undefined,
      stopped: true,
      animRef: undefined,
      clicked: false,
      getName,
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
    t: {
      get() {
        return this.scaleX.invert(this.x);
      },
      set(newVal) {
        this.x = this.scaleX(newVal);
      },
    },
    names() {
      const vars = {};
      this.ev.forEach((x) => {
        vars[x.key] = this.getName(x.key);
      });
      return vars;
    },
  },
  methods: {
    getEvents() {
      this.pnService.getEvents().then((data) => {
        this.events = data;
      });
    },
    mouseX(payload) {
      this.x = payload;
    },
    play() {
      this.stopped = false;
      this.starttime = Date.now();
      this.animRef = this.animate();
    },
    stop() {
      this.stopped = true;
      cancelAnimationFrame(this.animRef);
    },
    animate() {
      if (this.t > this.tsTo) {
        this.stop();
      }
      if (!this.stopped) {
        this.t = new Date(this.t.getTime() + Date.now() - this.starttime);
      }
      this.starttime = Date.now();
      return requestAnimationFrame(this.animate);
    },
  },
  components: {
    ChartDigitalComponent,
    LevelCrossingBarrier,
    LevelCrossingSignal,
    LevelCrossingRingingComponent,
  },
};
</script>

<style scoped>
  table.center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
