import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import dayjs from "dayjs";

module("Integration | Helper | dayjs-subtract", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    const amount = 7;
    const unit = "day";
    this.set("amount", 7);
    this.set("unit", "day");

    await render(hbs`{{dayjs-subtract amount=this.amount unit=this.unit format="DD/MM/YYYY"}}`);

    assert.equal(
      this.element.textContent.trim(),
      dayjs().subtract(amount, unit).format('DD/MM/YYYY')
    );
  });
});
