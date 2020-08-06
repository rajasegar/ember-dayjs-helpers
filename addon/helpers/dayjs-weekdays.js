import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import LocaleData from 'dayjs/plugin/localeData';

export default helper(function dayjsWeekdays() {
  dayjs.extend(LocaleData);
  return dayjs.weekdays();
});
