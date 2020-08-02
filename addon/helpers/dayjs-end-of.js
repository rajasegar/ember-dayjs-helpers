import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsEndOf(params/*, hash*/) {
  return dayjs().endOf(params[0]);
});
