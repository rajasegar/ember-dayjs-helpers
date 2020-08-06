import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsDayOfWeek(params/*, hash*/) {
  return dayjs(params[0]).day();
});
