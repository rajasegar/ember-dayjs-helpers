import { helper } from "@ember/component/helper";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

export default helper(function dayjsIsSameOrAfter(params, { date, unit }) {
  dayjs.extend(isSameOrAfter);
  return dayjs().isSameOrAfter(date, unit);
});
