import axios from 'axios';
import { DateTime } from 'luxon';

export default {
  getEvents() {
    return axios.get('json/l112_lxeduc.json').then(
      (response) => response.data.map((x) => ({

        ...x,
        ts_meas: DateTime.fromMillis(x.ts_meas * 1000).toJSDate(),
        ts_packet: DateTime.fromMillis(x.ts_packet * 1000).toJSDate(),
      })),
    );
  },
};
