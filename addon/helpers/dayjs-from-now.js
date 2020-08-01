import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default helper(function dayjsFromNow(params/*, hash*/) {
  //return params;
  dayjs.extend(relativeTime);
  return dayjs(params[0]).fromNow();
});
