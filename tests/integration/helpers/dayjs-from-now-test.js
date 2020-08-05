import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs-from-now', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', '2019-07-11');

    await render(hbs`{{dayjs-from-now inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'a year ago');
  });
});
