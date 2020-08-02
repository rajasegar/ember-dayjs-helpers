import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function dayjsFormat(params,{ date, format } ) {
  return dayjs(date).format(format);
});
