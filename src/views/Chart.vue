<template>
  <b-row>
    <b-col>
      <h1>Animation passage à niveau</h1>
      <p>Basée sur les données du SGM.<br />
        Cliquez sur &laquo;&nbsp;Play&nbsp;&raquo; ci-dessous pour rejouer les événements.</p>
      <b-row class="mb-2">
        <b-col class="d-flex justify-content-center">
          <b-form inline>
            <b-form-select v-model="idpn" :options="crossingsOptions" class="mr-2" />
            <datetime
              v-model="dateTimeStr"
              type="datetime"
              input-class="form-control mr-2"
            />
            <b-button variant="primary" @click="getEvents">Get events</b-button>
          </b-form>
        </b-col>
      </b-row>
      <p v-if="loading">
        Loading...
      </p>
      <b-card v-else>
        <b-card class="mb-2" v-if="activeVars">
          <h4>Barrières</h4>
          <b-row class="mb-3">
            <b-col class="text-center">
              <LevelCrossingBarrier
                v-if="activeVars
                  && activeVars.cb_xy !== undefined
                  && activeVars.kob_x !== undefined
                  && activeVars.kfb_x !== undefined"
                :cb="activeVars.cb_xy"
                :kob="activeVars.kob_x"
                :kfb="activeVars.kfb_x"
              />
              <b-card class="text-center">
                <b-button variant="light"
                  v-for="v in ['cb_xy', 'kob_x', 'kfb_x']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></b-button>
              </b-card>
            </b-col>
            <b-col class="text-center">
              <LevelCrossingBarrier
                v-if="activeVars
                  && activeVars.cb_xy !== undefined
                  && activeVars.kob_y !== undefined
                  && activeVars.kfb_y !== undefined"
                :cb="activeVars.cb_xy"
                :kob="activeVars.kob_y"
                :kfb="activeVars.kfb_y"
                :reverse="-1"
              />
              <b-card class="text-center">
                <b-button variant="light"
                  v-for="v in ['cb_xy', 'kob_y', 'kfb_y']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></b-button>
              </b-card>
            </b-col>
          </b-row>
          <hr />
          <h4>Feux</h4>
          <b-row>
            <b-col>
              <LevelCrossingSignal
                v-if="activeVars
                  && activeVars.cl !== undefined
                  && activeVars.klr1_xy !== undefined
                  && activeVars.klr2_xy !== undefined"
                :cl="activeVars.cl"
                :klp="activeVars.klp"
                :klr1="activeVars.klr1_xy"
                :klr2="activeVars.klr2_xy"
              />
              <b-card class="text-center">
                <b-button variant="light"
                  v-for="v in ['cl', 'klp', 'klr1_xy', 'klr2_xy']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></b-button>
              </b-card>
            </b-col>
            <b-col>
              <LevelCrossingSignal
                v-if="activeVars
                  && activeVars.cl !== undefined
                  && activeVars.klr1_xy !== undefined
                  && activeVars.klr2_xy !== undefined"
                :cl="activeVars.cl"
                :klp="activeVars.klp"
                :klr1="activeVars.klr1_xy"
                :klr2="activeVars.klr2_xy"
              />
              <b-card class="text-center">
                <b-button variant="light"
                  v-for="v in ['cl', 'klp', 'klr1_xy', 'klr2_xy']"
                  :key="v"
                  class="mr-3" v-b-tooltip.hover :title="names[v]"
                >{{ v }}
                  <b-badge>{{ activeVars[v] }}</b-badge></b-button>
              </b-card>
            </b-col>
          </b-row>
          <hr />
          <h4>Sonnerie</h4>
          <b-row>
            <b-col>
              <LevelCrossingRingingComponent
                v-if="activeVars
                  && activeVars.cl !== undefined
                  && activeVars.kfb_x !== undefined
                  && activeVars.kfb_y !== undefined
                  && activeVars.kga2 !== undefined"
                :cl="activeVars.cl"
                :kfb="activeVars.kfb_x * activeVars.kfb_y"
                :kga2="activeVars.kga2"
              />
              <b-card class="text-center">
                <b-button variant="light"
                  class="mr-3" v-b-tooltip.hover :title="names['cl']">cl
                  <b-badge>{{ activeVars.cl }}</b-badge></b-button>
                <span class="mr-3">
                  <b-button variant="light"
                    v-b-tooltip.hover :title="names['kfb_x']">kfb_x</b-button> *
                  <b-button variant="light"
                    v-b-tooltip.hover :title="names['kfb_y']">kfb_y</b-button>
                   &nbsp;<b-badge>{{ activeVars.kfb_x * activeVars.kfb_y }}</b-badge></span>
                <b-button variant="light" class="mr-3"
                  v-b-tooltip.hover :title="names['kga2']">kga2
                  <b-badge>{{ activeVars.kga2 }}</b-badge></b-button>
              </b-card>
            </b-col>
          </b-row>
          <!--<p>{{ x }}</p>-->
          <hr />
          <h5 class="mt-2">
            <b-badge variant="info" class="mr-1">{{ t.toLocaleString() }}</b-badge>
          </h5>
          <p>
            <b-button variant="success" @click="play" v-if="stopped">Play</b-button>
            <b-button variant="danger" @click="stop" v-if="!stopped">Stop</b-button>
          </p>
        </b-card>
        <b-card header="Variables">
          <table class="center">
            <tbody>
              <tr
                v-for="ch in ev"
                :key="ch.key">
                <td>
                  <b-button variant="light" size="sm"
                    v-b-tooltip.hover :title="names[ch.key]" v-once>{{ ch.key }}</b-button>
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
import 'vue-datetime/dist/vue-datetime.css';

import { DateTime } from 'luxon';
import { Datetime } from 'vue-datetime';

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
      loading: false,
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
      idpn: 'L112_LXEDUC',
      crossings: [],
      dateTime: DateTime.fromISO('2019-02-10T09:00'),
      getName,
    };
  },
  created() {
    this.getEvents();
    this.getCrossings();
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
    dateTimeStr: {
      get() {
        return this.dateTime.toISO();
      },
      set(newVal) {
        this.dateTime = DateTime.fromISO(newVal);
      },
    },
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
    crossingsOptions() {
      return this.crossings.map(d => ({ value: d.idpn, text: d.idpn }));
    },
  },
  methods: {
    getEvents() {
      this.loading = true;
      this.pnService.getEvents(this.idpn, this.dateTime).then((data) => {
        this.events = data;
        this.loading = false;
      });
    },
    getCrossings() {
      this.pnService.getCrossings().then((data) => {
        this.crossings = data;
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
    datetime: Datetime,
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
