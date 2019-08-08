<template>
  <b-row>
    <b-col>
      <h1>Test éléments d’animation de passage à niveau</h1>
      <p>Pour une animation en lien avec les données récoltées par le SGM
        <router-link to="chart">cliquez ici</router-link>.</p>
      <b-card>
        <div class="home">
          <div>
            <LevelCrossingBarrier v-bind="valsBarrier" />
            <LevelCrossingBarrier v-bind="valsBarrier" :reverse="-1" />
          </div>
          <!--<div>
            Commande barrière CB:
            <input type="radio" :value="1" v-model="valsBarrier.cb">1
            <input type="radio" :value="0" v-model="valsBarrier.cb">0
          </div>-->
          <div>
            Contrôle ouverture barrière KOB:
            <input type="radio" :value="1" v-model="valsBarrier.kob">1
            <input type="radio" :value="0" v-model="valsBarrier.kob">0
          </div>
          <div>
            Contrôle fermeture barrière KFB:
            <input type="radio" :value="1" v-model="valsBarrier.kfb">1
            <input type="radio" :value="0" v-model="valsBarrier.kfb">0
          </div>
          <hr />
          <div>
            <LevelCrossingSignal v-bind="valsSignal" />
          </div>
          <div>
            Commande lampes CL:
            <input type="radio" :value="1" v-model="valsSignal.cl">1
            <input type="radio" :value="0" v-model="valsSignal.cl">0
          </div>
          <div>
            Contrôle lampe blanche KLP:
            <input type="radio" :value="1" v-model="valsSignal.klp">1
            <input type="radio" :value="0" v-model="valsSignal.klp">0
          </div>
          <div>
            Contrôle lampe rouge 1 KLR1:
            <input type="radio" :value="1" v-model="valsSignal.klr1">1
            <input type="radio" :value="0" v-model="valsSignal.klr1">0
          </div>
          <div>
            Contrôle lampe rouge 2 KLR2:
            <input type="radio" :value="1" v-model="valsSignal.klr2">1
            <input type="radio" :value="0" v-model="valsSignal.klr2">0
          </div>
          <div>
            <h2>{{ countDown.v.toFixed(1) }}</h2>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src
import LevelCrossingBarrier from '@/components/LevelCrossingBarrier.vue';
import LevelCrossingSignal from '@/components/LevelCrossingSignal.vue';
import { setTimeout } from 'timers';
import { Linear, TweenLite } from 'gsap';

export default {
  name: 'home',
  data() {
    return {
      valsSignal: {
        cl: 1,
        klp: 1,
        klr1: 0,
        klr2: 0,
      },
      valsBarrier: {
        cb: 1,
        kob: 1,
        kfb: 0,
      },
      countDown: { v: 0 },
    };
  },
  watch: {
    'valsSignal.cl': function valsSignalCl(newVal) {
      if (newVal === 1) {
        this.valsSignal = {
          cl: 1,
          klp: 1,
          klr1: 0,
          klr2: 0,
        };
      }
      if (newVal === 0) {
        this.valsSignal = {
          cl: 0,
          klp: 0,
          klr1: 1,
          klr2: 1,
        };
        this.countDown = { v: 15 };
        TweenLite.to(this.countDown, 15, { ease: Linear.easeNone, v: 0 });
        setTimeout(() => {
          this.valsBarrier.cb = 0;
        }, 15000);
      }
    },
    'valsBarrier.cb': function valBarrier(newVal) {
      if (newVal === 1) {
        this.valsBarrier = {
          cb: 1,
          kob: 0,
          kfb: 0,
        };
        setTimeout(() => {
          this.valsBarrier = {
            cb: 1,
            kob: 1,
            kfb: 0,
          };
        }, 2000);
        setTimeout(() => {
          this.valsSignal.cl = 1;
        }, 3500);
      }
      if (newVal === 0) {
        this.valsBarrier = {
          cb: 0,
          kob: 0,
          kfb: 0,
        };
        setTimeout(() => {
          this.valsBarrier = {
            cb: 0,
            kob: 0,
            kfb: 1,
          };
        }, 2000);
      }
    },
  },
  components: {
    LevelCrossingBarrier,
    LevelCrossingSignal,
  },
};
</script>
