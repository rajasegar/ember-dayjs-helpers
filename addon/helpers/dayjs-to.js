import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsTo(params/*, hash*/) {
  return dayjs().to(params[0]);
});
