ember-dayjs-helpers
==============================================================================
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Frajasegar%2Fember-dayjs-helpers%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/rajasegar/ember-dayjs-helpers/goto?ref=master)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-dayjs-helpers/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-dayjs-helpers?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-dayjs-helpers.svg?style=flat)](https://npmjs.org/package/ember-dayjs-helpers "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-dayjs-helpers.svg?branch=master)](http://emberobserver.com/addons/ember-dayjs-helpers)


Ember.js template helpers based on [day.js](https://day.js.org/en), a fast 2kB alternative to Moment.js with the same modern API

Installation
------------------------------------------------------------------------------

```
ember install ember-dayjs-helpers
```


Usage
------------------------------------------------------------------------------

```
{{ day-js }} => Display today's date
{{ day-js '2019-01-25' 'DD-MM-YYYY'}} => 25-01-2019
{{ day-js '2019-01-25' 'DD MMMM YYYY'}} => 25 January 2019
```

## Helpers

### Display Helpers
- day-js 
- dayjs-format
- dayjs-from
- dayjs-from-now
- dayjs-to
- dayjs-to-now
- dayjs-calendar
- dayjs-diff

### Manipulate Helpers
- dayjs-add
- dayjs-subtract
- dayjs-start-of
- dayjs-end-of

### Query Helpers
- dayjs-is-before
- dayjs-is-same
- dayjs-is-after
- dayjs-is-same-or-before
- dayjs-is-same-or-after
- dayjs-is-between
- dayjs-is-leap-year


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
