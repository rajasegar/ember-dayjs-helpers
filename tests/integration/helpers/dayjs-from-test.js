import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import dayjs from "dayjs";

module("Integration | Helper | dayjs-from", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.set("inputValue", dayjs().subtract(100, "year").format("YYYY-MM-DDD"));

    await render(hbs`{{dayjs-from inputValue}}`);

    assert.equal(this.element.textContent.trim(), "in 100 years");
  });
});
