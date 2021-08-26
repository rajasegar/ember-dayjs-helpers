import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import dayjs from "dayjs";

module("Integration | Helper | dayjs-is-same", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    this.set("inputValue", dayjs().subtract(1, "month").format("YYYY-MM-DD"));
    await render(hbs`{{dayjs-is-same date=inputValue unit="year"}}`);

    assert.equal(this.element.textContent.trim(), "true");
  });
});
