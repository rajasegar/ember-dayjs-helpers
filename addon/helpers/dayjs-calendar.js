import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

export default helper(function dayjsCalendar(params/*, hash*/) {
  dayjs.extend(calendar);
  return dayjs().calendar(dayjs(params[0]));
});
