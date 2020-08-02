import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DayjsStartOfController extends Controller {
  @tracked unit='year';

  units = [
    'year',
    'quarter',
    'month',
    'week',
    'isoWeek',
    'date',
    'day',
    'hour',
    'minute',
    'second']

  @action updateUnit(event) {
    this.unit = event.target.value;
  }
}
