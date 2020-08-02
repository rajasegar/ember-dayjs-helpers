import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsStartOf(params/*, hash*/) {
  return dayjs().startOf(params[0]);
});
