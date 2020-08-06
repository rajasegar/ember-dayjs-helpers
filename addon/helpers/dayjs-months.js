import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

export default helper(function dayjsMonths(params/*, hash*/) {
  dayjs.extend(localeData);
  return dayjs.months();
});
