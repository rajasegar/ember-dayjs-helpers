"use strict";

module.exports = {
  extends: "octane",
  rules: {
    "no-curly-component-invocation": {
      allow: [
        "day-js",
        "dayjs-add",
        "dayjs-calendar",
        "dayjs-date",
        "dayjs-day-of-week",
        "dayjs-day-of-year",
        "dayjs-diff",
        "dayjs-end-of",
        "dayjs-format",
        "dayjs-from-now",
        "dayjs-from",
        "dayjs-is-after",
        "dayjs-is-before",
        "dayjs-is-between",
        "dayjs-is-leap-year",
        "dayjs-is-same-or-after",
        "dayjs-is-same-or-before",
        "dayjs-is-same",
        "dayjs-months-short",
        "dayjs-months",
        "dayjs-start-of",
        "dayjs-subtract",
        "dayjs-to-now",
        "dayjs-to",
        "dayjs-weekday",
        "dayjs-weekday-min",
        "dayjs-weekdays-short",
        "dayjs-weekdays",
        "dayjs-week-of-year",
        "days-in-month",

      ],
    },
    "no-implicit-this": {
      allow: ["day-js", "dayjs-calendar","dayjs-date", "dayjs-day-of-week","dayjs-weekday"],
    },
  },
};
