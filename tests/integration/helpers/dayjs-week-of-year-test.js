import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs-week-of-year', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{dayjs-week-of-year "2019-01-01"}}`);

    assert.equal(this.element.textContent.trim(), '1');
  });
});
