import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import dayjs from "dayjs";

module("Integration | Helper | dayjs-add", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    const amount = 7;
    const unit = "day";
    this.set("amount", amount);
    this.set("unit", unit);
    await render(hbs`{{dayjs-add amount=this.amount unit=this.unit}}`);

    assert.equal(this.element.textContent.trim(), dayjs().add(amount, unit));
  });
});
