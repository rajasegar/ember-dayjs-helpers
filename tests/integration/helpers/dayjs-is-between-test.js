import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs-is-between', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{dayjs-is-between date="2010-10-20" from="2010-10-19" to="2010-10-25" unit="day"}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
