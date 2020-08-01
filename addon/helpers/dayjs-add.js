import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsAdd(params,{ amount, unit}) {
  return dayjs().add(amount, unit);
});
