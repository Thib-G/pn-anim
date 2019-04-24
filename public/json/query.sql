SELECT
   id,
   idpn,
   nr,
   ts_meas,
   ts_packet,
   varname,
   varval,
   prev_varval
FROM
(
  SELECT
    id,
    idpn,
    nr,
    varname,
    varval,
    LAG(varval) OVER w AS prev_varval,
    ts_meas,
    ts_packet
  FROM
    pn.get_digital_measurements('L112_LXEDUC', '2019-02-10 09:00', '2019-02-10 10:00')
  WINDOW w AS (PARTITION BY idpn, varname ORDER BY ts_meas)
  ORDER BY
    idpn, varname, ts_meas
) a
WHERE
  a.prev_varval IS NULL
  OR a.prev_varval != a.varval
ORDER BY
  a.idpn, a.varname, a.ts_meas