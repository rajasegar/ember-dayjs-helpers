import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DayjsAddController extends Controller {
  amount = 7;
  @tracked unit = 'day';
  units = ['day',
           'week',
           'month',
           'quarter',
           'year',
           'hour',
           'minute',
           'second',
           'millisecond'];

  @action updateUnit(event) {
    this.unit = event.target.value;
  }
}
