<template>
  <div>
    <div class="home">
      <div>
        <LevelCrossingBarrier v-bind="valsBarrier" />
      </div>
      <div>
      Commande barrière CB:
      <input type="radio" :value="1" v-model="valsBarrier.cb">1
      <input type="radio" :value="0" v-model="valsBarrier.cb">0
    </div>
    <div>
      Contrôle ouvertude barrière KOB:
      <input type="radio" :value="1" v-model="valsBarrier.kob">1
      <input type="radio" :value="0" v-model="valsBarrier.kob">0
    </div>
    <div>
      Contrôle fermeture barrière KFB:
      <input type="radio" :value="1" v-model="valsBarrier.kfb">1
      <input type="radio" :value="0" v-model="valsBarrier.kfb">0
    </div>
      <div>
        <LevelCrossingSignal v-bind="valsSignal" />
      </div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import LevelCrossingBarrier from '@/components/LevelCrossingBarrier.vue';
import LevelCrossingSignal from '@/components/LevelCrossingSignal.vue';
import { setTimeout } from 'timers';

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
