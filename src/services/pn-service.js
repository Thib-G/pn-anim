import axios from 'axios';
import { DateTime } from 'luxon';

export default {
  getCrossings() {
    return axios.get('/api/crossings').then(response => response.data);
  },
  getEvents(idpn, dt) {
    const dateFrom = dt.toISO();
    return axios.get(`/api/digital/${idpn}/${dateFrom}`).then(
      response => response.data.map(x => Object.assign(
        {},
        x,
        {
          ts_meas: DateTime.fromMillis(x.ts_meas * 1000).toJSDate(),
          ts_packet: DateTime.fromMillis(x.ts_packet * 1000).toJSDate(),
        },
      )),
    );
  },
};
