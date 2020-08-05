import { module, test} from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Helper | dayjs-is-leap-year", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    this.set("inputValue", "2011-01-01");

    await render(hbs`{{dayjs-is-leap-year inputValue}}`);

    assert.equal(this.element.textContent.trim(), "false");
  });
});
