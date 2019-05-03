'use strict';

define("itp404-gmail/tests/integration/components/one-email-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | one-email', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "BNkIyte1",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"one-email\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sIr7RbcD",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"one-email\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("itp404-gmail/tests/integration/components/star-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | star-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0h4wNaUs",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"star-button\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IT4ZSoMz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"star-button\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("itp404-gmail/tests/integration/helpers/truncate-text-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | truncate-text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4uOhzRjZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"truncate-text\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("itp404-gmail/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/one-email.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/one-email.js should pass ESLint\n\n8:8 - \'newValue\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('components/star-button.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/star-button.js should pass ESLint\n\n8:8 - \'newValue\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/email.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/email.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/truncate-text.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/truncate-text.js should pass ESLint\n\n3:38 - \'length\' is defined but never used. (no-unused-vars)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:4 - Unexpected console statement. (no-console)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('models/email.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/email.js should pass ESLint\n\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create.js should pass ESLint\n\n');
  });
  QUnit.test('routes/email.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/email.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/sent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sent.js should pass ESLint\n\n');
  });
  QUnit.test('routes/trash.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trash.js should pass ESLint\n\n');
  });
});
define("itp404-gmail/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('itp404-gmail/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-gmail/templates/application.hbs should pass TemplateLint.\n\nitp404-gmail/templates/application.hbs\n  3:1  error  Incorrect indentation for `{{#link-to}}` beginning at L3:C1. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 1.  block-indentation\n  9:0  error  Incorrect indentation for `<div>` beginning at L9:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  4:1  error  Incorrect indentation for `<button>` beginning at L4:C1. Expected `<button>` to be at an indentation of 3 but was found at 1.  block-indentation\n  10:1  error  Incorrect indentation for `<nav>` beginning at L10:C1. Expected `<nav>` to be at an indentation of 2 but was found at 1.  block-indentation\n  32:1  error  Incorrect indentation for `{{outlet}}` beginning at L32:C1. Expected `{{outlet}}` to be at an indentation of 2 but was found at 1.  block-indentation\n');
  });
  QUnit.test('itp404-gmail/templates/components/one-email.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-gmail/templates/components/one-email.hbs should pass TemplateLint.\n\nitp404-gmail/templates/components/one-email.hbs\n  20:9  error  Incorrect indentation for `div` beginning at L4:C2. Expected `</div>` ending at L20:C9 to be at an indentation of 2 but was found at 3.  block-indentation\n  5:2  error  Incorrect indentation for `<strong>` beginning at L5:C2. Expected `<strong>` to be at an indentation of 4 but was found at 2.  block-indentation\n  7:6  error  Incorrect indentation for `{{#link-to}}` beginning at L7:C6. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  13:0  error  Incorrect indentation for `{{notStarred}}` beginning at L13:C0. Expected `{{notStarred}}` to be at an indentation of 4 but was found at 0.  block-indentation\n  15:0  error  Incorrect indentation for `<StarButton>` beginning at L15:C0. Expected `<StarButton>` to be at an indentation of 4 but was found at 0.  block-indentation\n  8:5  error  Incorrect indentation for `<br>` beginning at L8:C5. Expected `<br>` to be at an indentation of 8 but was found at 5.  block-indentation\n');
  });
  QUnit.test('itp404-gmail/templates/components/star-button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-gmail/templates/components/star-button.hbs should pass TemplateLint.\n\nitp404-gmail/templates/components/star-button.hbs\n  3:0  error  Incorrect indentation for `{{#if}}` beginning at L3:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `<span>` beginning at L6:C0. Expected `<span>` to be at an indentation of 2 but was found at 0.  block-indentation\n  13:0  error  Incorrect indentation for `<span>` beginning at L13:C0. Expected `<span>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('itp404-gmail/templates/create.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itp404-gmail/templates/create.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('itp404-gmail/templates/email.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-gmail/templates/email.hbs should pass TemplateLint.\n\nitp404-gmail/templates/email.hbs\n  3:0  error  Incorrect indentation for `<button>` beginning at L3:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  20:0  error  Incorrect indentation for `<div>` beginning at L20:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  27:0  error  Incorrect indentation for `<h3>` beginning at L27:C0. Expected `<h3>` to be at an indentation of 2 but was found at 0.  block-indentation\n  29:0  error  Incorrect indentation for `<p>` beginning at L29:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  20:22  error  Incorrect indentation for `\n\nFrom: ` beginning at L20:C22. Expected `\n\nFrom: ` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:0  error  img tags must have an alt attribute  img-alt-attributes\n  11:1  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });
  QUnit.test('itp404-gmail/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-gmail/templates/index.hbs should pass TemplateLint.\n\nitp404-gmail/templates/index.hbs\n  3:0  error  Incorrect indentation for `<h1>` beginning at L3:C0. Expected `<h1>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:6  error  Incorrect indentation for `{{#each}}` beginning at L5:C6. Expected `{{#each}}` to be at an indentation of 2 but was found at 6.  block-indentation\n  26:2  error  Incorrect indentation for `<br>` beginning at L26:C2. Expected `<br>` to be at an indentation of 4 but was found at 2.  block-indentation\n  27:2  error  Incorrect indentation for `<div>` beginning at L27:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  43:9  error  Incorrect indentation for `div` beginning at L27:C2. Expected `</div>` ending at L43:C9 to be at an indentation of 2 but was found at 3.  block-indentation\n  28:2  error  Incorrect indentation for `<strong>` beginning at L28:C2. Expected `<strong>` to be at an indentation of 4 but was found at 2.  block-indentation\n  30:6  error  Incorrect indentation for `{{#link-to}}` beginning at L30:C6. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  36:0  error  Incorrect indentation for `{{notStarred}}` beginning at L36:C0. Expected `{{notStarred}}` to be at an indentation of 4 but was found at 0.  block-indentation\n  38:0  error  Incorrect indentation for `<StarButton>` beginning at L38:C0. Expected `<StarButton>` to be at an indentation of 4 but was found at 0.  block-indentation\n  31:5  error  Incorrect indentation for `<br>` beginning at L31:C5. Expected `<br>` to be at an indentation of 8 but was found at 5.  block-indentation\n');
  });
  QUnit.test('itp404-gmail/templates/sent.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itp404-gmail/templates/sent.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('itp404-gmail/templates/trash.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itp404-gmail/templates/trash.hbs should pass TemplateLint.\n\n');
  });
});
define("itp404-gmail/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/one-email-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/one-email-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/star-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/star-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/truncate-text-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/truncate-text-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/email-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/email-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/email-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/email-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/email-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/email-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/sent-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sent-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/trash-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trash-test.js should pass ESLint\n\n');
  });
});
define("itp404-gmail/tests/test-helper", ["itp404-gmail/app", "itp404-gmail/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("itp404-gmail/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("itp404-gmail/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("itp404-gmail/tests/unit/controllers/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:create');
      assert.ok(controller);
    });
  });
});
define("itp404-gmail/tests/unit/controllers/email-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | email', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:email');
      assert.ok(controller);
    });
  });
});
define("itp404-gmail/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("itp404-gmail/tests/unit/models/email-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | email', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('email', {});
      assert.ok(model);
    });
  });
});
define("itp404-gmail/tests/unit/routes/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:create');
      assert.ok(route);
    });
  });
});
define("itp404-gmail/tests/unit/routes/email-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | email', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:email');
      assert.ok(route);
    });
  });
});
define("itp404-gmail/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("itp404-gmail/tests/unit/routes/sent-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | sent', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:sent');
      assert.ok(route);
    });
  });
});
define("itp404-gmail/tests/unit/routes/trash-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | trash', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:trash');
      assert.ok(route);
    });
  });
});
define('itp404-gmail/config/environment', [], function() {
  var prefix = 'itp404-gmail';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('itp404-gmail/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
