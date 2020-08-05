import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs-format', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{dayjs-format date='2020-08-05' format="DD/MM/YYYY" }}`);

    assert.equal(this.element.textContent.trim(), '05/08/2020');
  });
});
