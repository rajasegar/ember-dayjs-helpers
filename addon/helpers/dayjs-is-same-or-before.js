import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

export default helper(function dayjsIsSameOrBefore(params, { date, unit}) {
  dayjs.extend(isSameOrBefore);
  return dayjs().isSameOrBefore(date, unit);
});
