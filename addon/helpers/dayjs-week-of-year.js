import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import weekofyear from 'dayjs/plugin/weekOfYear';

export default helper(function dayjsWeekOfYear(params/*, hash*/) {
  dayjs.extend(weekofyear);

  return dayjs(params[0]).week();
});
