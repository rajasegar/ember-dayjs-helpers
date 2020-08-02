import { helper } from "@ember/component/helper";
import dayjs from "dayjs";

export default helper(function dayjsIsSame(params, { date, unit }) {
  return dayjs().isSame(date, unit);
});
