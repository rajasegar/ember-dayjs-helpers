import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

export default helper(function dayjsIsSameOrAfter(params/*, hash*/) {
  dayjs.extend(isSameOrAfter);
  return dayjs().isSameOrAfter();
});
