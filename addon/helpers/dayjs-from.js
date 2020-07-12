import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsFrom(params/*, hash*/) {
  return dayjs().from(params[0]);
});
