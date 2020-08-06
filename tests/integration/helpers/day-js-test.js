import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Helper | day-js", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {

    await render(hbs`{{day-js }}`);

    assert.equal(this.element.textContent.trim(), new Date().toGMTString());
  });
});
