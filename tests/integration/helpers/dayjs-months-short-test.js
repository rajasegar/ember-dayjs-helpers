import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

module('Integration | Helper | dayjs-months-short', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    dayjs.extend(localeData);

    await render(hbs`{{dayjs-months-short }}`);

    assert.equal(this.element.textContent.trim(), dayjs.monthsShort());
  });
});
