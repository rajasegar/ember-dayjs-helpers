import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

export default helper(function dayjsMonthsShort() {
  dayjs.extend(localeData);
  return dayjs.monthsShort();
});
