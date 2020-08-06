import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

export default helper(function dayjsWeekdaysShort() {
  dayjs.extend(localeData);
  return dayjs.weekdaysShort();
});
