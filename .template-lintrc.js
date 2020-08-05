"use strict";

module.exports = {
  extends: "octane",
  rules: {
    "no-curly-component-invocation": {
      allow: [
        "day-js",
        "dayjs-add",
        "dayjs-calendar",
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
        "dayjs-start-of",
        "dayjs-subtract",
        "dayjs-to-now",
        "dayjs-to",
      ],
    },
    "no-implicit-this": {
      allow: ["day-js", "dayjs-calendar"],
    },
  },
};
