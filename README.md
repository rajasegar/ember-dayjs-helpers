ember-dayjs-helpers
==============================================================================

Ember.js template helpers based on [day.js](https://day.js.org/en), a fast 2kB alternative to Moment.js with the same modern API

Installation
------------------------------------------------------------------------------

```
ember install ember-dayjs-helpers
```


Usage
------------------------------------------------------------------------------

```
{{ day-js }}
{{ day-js '2019-01-25' 'DD-MM-YYYY'}}
{{ day-js '2019-01-25' 'DD MMMM YYYY'}}
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
