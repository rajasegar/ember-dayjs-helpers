import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

export default helper(function dayjsMonthsShort(params/*, hash*/) {
  dayjs.extend(localeData);
  return dayjs.monthsShort();
});
