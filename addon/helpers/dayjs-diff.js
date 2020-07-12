import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsDiff(params, { from , to , unit }) {
  return dayjs(from).diff(to, unit);
});
