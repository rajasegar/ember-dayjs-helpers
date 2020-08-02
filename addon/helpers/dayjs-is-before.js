import { helper } from "@ember/component/helper";
import dayjs from "dayjs";

export default helper(function dayjsIsBefore(params, { date, unit }) {
  return dayjs().isBefore(date, unit);
});
