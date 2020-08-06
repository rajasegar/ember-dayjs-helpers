import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import WeekDay from 'dayjs/plugin/weekday';

export default helper(function dayjsWeekday(params/*, hash*/) {
  dayjs.extend(WeekDay);
  return dayjs().weekday(params[0]);
});
