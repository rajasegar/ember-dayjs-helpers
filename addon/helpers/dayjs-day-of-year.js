import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import dayofyear from 'dayjs/plugin/dayOfYear';

export default helper(function dayjsDayOfYear(params/*, hash*/) {
  dayjs.extend(dayofyear);
  return dayjs(params[0]).dayOfYear();
});
