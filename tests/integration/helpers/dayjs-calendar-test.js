import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import dayjs from 'dayjs';

module('Integration | Helper | dayjs-calendar', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {

    await render(hbs`{{dayjs-calendar '1234' }}`);

    assert.equal(this.element.textContent.trim(), dayjs().format('MM/DD/YYYY'));
  });
});
