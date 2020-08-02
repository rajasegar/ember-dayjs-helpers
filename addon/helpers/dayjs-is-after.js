import { helper } from "@ember/component/helper";
import dayjs from "dayjs";

export default helper(function dayjsIsAfter(params, { date, unit }) {
  return dayjs().isAfter(date, unit);
});
