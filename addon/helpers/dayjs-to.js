import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default helper(function dayjsTo(params/*, hash*/) {
  dayjs.extend(relativeTime);
  return dayjs().to(params[0]);
});
