import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default helper(function dayjsFrom(params/*, hash*/) {
  dayjs.extend(relativeTime);
  return dayjs().from(params[0]);
});
