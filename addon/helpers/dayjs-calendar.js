import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar.js';

export default helper(function dayjsCalendar(params/*, hash*/) {
  dayjs.extend(calendar);
  return dayjs(params[0]).calendar();
});
