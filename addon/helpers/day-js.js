import { helper } from '@ember/component/helper';

import dayjs from 'dayjs';

export default helper(function dayJs(params, { date, format }) {
  if(format) {
  return dayjs(date).format(format);
  }
  return dayjs(date).toString();
});
