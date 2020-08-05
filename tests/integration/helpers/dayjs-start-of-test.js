import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import dayjs from 'dayjs';

module('Integration | Helper | dayjs-start-of', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{dayjs-start-of "year"}}`);

    assert.equal(this.element.textContent.trim(), dayjs().startOf('year').toString());
  });
});
