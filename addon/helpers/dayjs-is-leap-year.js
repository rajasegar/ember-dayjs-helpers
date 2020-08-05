import { helper } from "@ember/component/helper";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

export default helper(function dayjsIsLeapYear(params /*, hash*/) {
  dayjs.extend(isLeapYear);
  return dayjs(params[0]).isLeapYear();
});
