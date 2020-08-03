import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

export default helper(function dayjsIsBetween(params,{ date, from, to, unit}) {
  dayjs.extend(isBetween);
  return dayjs(date).isBetween(from,to,unit);

});
