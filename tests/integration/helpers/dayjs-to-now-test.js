import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import dayjs from "dayjs";

module("Integration | Helper | dayjs-to-now", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.set("inputValue", dayjs().subtract(2, "year").format("YYYY-MM-DD"));
    await render(hbs`{{dayjs-to-now inputValue}}`);

    assert.equal(this.element.textContent.trim(), "in 2 years");
  });
});
