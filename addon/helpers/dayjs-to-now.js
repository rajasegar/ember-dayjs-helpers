import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default helper(function dayjsToNow(params/*, hash*/) {
  dayjs.extend(relativeTime);
  return dayjs(params[0]).toNow();
});
