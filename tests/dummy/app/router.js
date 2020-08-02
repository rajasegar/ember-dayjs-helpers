import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path:'/'});
  this.route('day-js');
  this.route('dayjs-from-now');
  this.route('dayjs-from');
  this.route('dayjs-to');
  this.route('dayjs-to-now');
  this.route('dayjs-calendar');
  this.route('dayjs-diff');
  this.route('dayjs-add');
  this.route('dayjs-subtract');
  this.route('dayjs-start-of');
  this.route('dayjs-end-of');
  this.route('dayjs-format');
  this.route('dayjs-is-before');
  this.route('dayjs-is-same');
  this.route('dayjs-is-after');
  this.route('dayjs-is-same-or-before');
  this.route('dayjs-is-same-or-after');
  this.route('dayjs-is-between');
  this.route('dayjs-is-dayjs');
  this.route('dayjs-is-leap-year');
});
