import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs-diff', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{dayjs-diff from="2019-08-01" to="2019-08-02"}}`);

    assert.equal(this.element.textContent.trim(), '-86400000');
  });
});
