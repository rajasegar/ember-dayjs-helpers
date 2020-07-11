import { helper } from '@ember/component/helper';

import dayjs from 'dayjs';

export default helper(function dayJs(params/*, hash*/) {
  return dayjs(params[0]).format(params[1]);
});
