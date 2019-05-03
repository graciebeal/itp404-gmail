'use strict';



;define("itp404-gmail/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    namespace: 'api'
  });

  _exports.default = _default;
});
;define("itp404-gmail/app", ["exports", "itp404-gmail/resolver", "ember-load-initializers", "itp404-gmail/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("itp404-gmail/components/one-email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    // starred: false,
    actions: {
      star(newValue) {
        // this.toggleProperty('starred');
        // this.onClick(!this.starred);
        this.set('starred', !this.starred); // console.log(!this.starred);
      }

    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/components/star-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    starred: false,
    actions: {
      star(newValue) {
        // this.toggleProperty('starred');
        // this.onClick(!this.starred);
        this.set('starred', !this.starred); // console.log(!this.starred);
      }

    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("itp404-gmail/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("itp404-gmail/controllers/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      createEmail(event) {
        event.preventDefault();
        let email = this.store.createRecord('email', {
          from: this.from,
          to: this.to,
          subject: this.subject,
          message: this.message
        });
        email.save().then(() => {
          // this.transitionToRoute('index');
          this.transitionToRoute('email', email.id);
        });
      }

    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/controllers/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      deleteEmail(email) {
        let confirmed = window.confirm('Are you sure you want to delete this email?');

        if (confirmed) {
          email.destroyRecord();
        }
      }

    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // notStarred: false,
    actions: {
      star() {}

    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/helpers/app-version", ["exports", "itp404-gmail/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("itp404-gmail/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("itp404-gmail/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("itp404-gmail/helpers/truncate-text", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.truncateText = truncateText;
  _exports.default = void 0;

  function truncateText(params, length) {
    if (!params[0]) {
      return params[0];
    } else {
      console.log(params);
      return params[0].substring(0, 10, params[1] + '...');
    }
  }

  var _default = Ember.Helper.helper(truncateText);

  _exports.default = _default;
});
;define("itp404-gmail/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "itp404-gmail/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("itp404-gmail/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("itp404-gmail/initializers/ember-cli-mirage", ["exports", "itp404-gmail/config/environment", "itp404-gmail/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("itp404-gmail/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("itp404-gmail/initializers/export-application-global", ["exports", "itp404-gmail/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("itp404-gmail/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("itp404-gmail/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("itp404-gmail/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = '/api'; // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    this.get('/emails');
    this.post('/emails');
    this.get('/emails/:id'); // this.put('/emails/:id'); // or this.patch

    this.del('/emails/:id');
  }
});
;define("itp404-gmail/mirage/factories/email", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    id(i) {
      return i + 1;
    },

    from() {
      return _emberCliMirage.faker.internet.email();
    },

    to() {
      return _emberCliMirage.faker.internet.email();
    },

    subject() {
      return _emberCliMirage.faker.lorem.words();
    },

    message() {
      return _emberCliMirage.faker.lorem.paragraph();
    }

  });

  _exports.default = _default;
});
;define("itp404-gmail/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    server.createList('email', 20);
  }
});
;define("itp404-gmail/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("itp404-gmail/models/email", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    // id: DS.attr('number'),
    from: _emberData.default.attr('string'),
    to: _emberData.default.attr('string'),
    subject: _emberData.default.attr('string'),
    message: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("itp404-gmail/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("itp404-gmail/router", ["exports", "itp404-gmail/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('email', {
      path: '/emails/:id'
    });
    this.route('sent');
    this.route('trash');
    this.route('create', {
      path: '/emails/new'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("itp404-gmail/routes/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    setupController(controller, model) {
      this._super(controller, model);

      controller.set('from', '');
      controller.set('to', '');
      controller.set('subject', '');
      controller.set('message', '');
    }

  });

  _exports.default = _default;
});
;define("itp404-gmail/routes/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findRecord('email', params.id);
    }

  });

  _exports.default = _default;
});
;define("itp404-gmail/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll('email');
    }

  });

  _exports.default = _default;
});
;define("itp404-gmail/routes/sent", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("itp404-gmail/routes/trash", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("itp404-gmail/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("itp404-gmail/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oz5J8Gt/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"id\",\"sidebar\"],[9],[0,\"\\n\\n\"],[4,\"link-to\",[\"create\"],null,{\"statements\":[[0,\"\\t\"],[7,\"button\"],[11,\"id\",\"compose\"],[9],[0,\"Compose\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[7,\"div\"],[11,\"id\",\"nav\"],[9],[0,\"\\n\\t\"],[7,\"nav\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"\\t    Inbox\\n\"]],\"parameters\":[]},null],[0,\"\\t  \"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"link-to\",[\"sent\"],null,{\"statements\":[[0,\"\\t    Sent\\n\"]],\"parameters\":[]},null],[0,\"\\t  \"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"link-to\",[\"trash\"],null,{\"statements\":[[0,\"\\t    Trash\\n\"]],\"parameters\":[]},null],[0,\"\\n\\t\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"body\"],[9],[0,\"\\n\\n\\n\\t\"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/components/one-email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bN5ds88O",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n  \\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"email\"],[9],[0,\"\\n  \"],[7,\"strong\"],[9],[1,[23,[\"email\",\"from\"]],false],[10],[0,\"\\n   \\n\"],[4,\"link-to\",[\"email\",[23,[\"email\",\"id\"]]],null,{\"statements\":[[0,\"     \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[1,[27,\"truncate-text\",[[23,[\"email\",\"message\"]]],null],false],[0,\"...\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[1,[21,\"notStarred\"],false],[0,\"\\n\\n\"],[5,\"star-button\",[],[[\"@starred\",\"@onClick\"],[[23,[\"email\",\"starred\"]],[27,\"action\",[[22,0,[]],\"star\",[23,[\"email\"]]],null]]]],[0,\"\\n\\n\\n   \"],[10],[0,\"\\n\\n\\n\\n\\n\\n\"],[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/components/one-email.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/components/star-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KXwUg8wb",
    "block": "{\"symbols\":[\"@starred\"],\"statements\":[[7,\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"star\"],null]],[11,\"id\",\"starbtn\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,1,[]]],null,{\"statements\":[[0,\"\\n\\n\"],[7,\"span\"],[11,\"class\",\"starred\"],[9],[0,\"★\"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\\n\\n\\n\"],[7,\"span\"],[11,\"class\",\"starrednt\"],[9],[0,\"★\"],[10],[0,\"\\n\\n\\n\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/components/star-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "F6mcJ26T",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\"],[12,\"onsubmit\",[27,\"action\",[[22,0,[]],\"createEmail\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"from\"],[9],[0,\"from\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"from\",[23,[\"from\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"to\"],[9],[0,\"to\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"to\",[23,[\"to\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"subject\"],[9],[0,\"subject\"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"subject\",[23,[\"subject\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"message\"],[9],[0,\"Post\"],[10],[0,\"\\n    \"],[1,[27,\"textarea\",null,[[\"id\",\"rows\",\"cols\",\"value\"],[\"message\",\"8\",\"80\",[23,[\"message\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"button\"],[11,\"data-test\",\"publish\"],[11,\"type\",\"submit\"],[9],[0,\"Publish\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/create.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/email", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Fub8UFQ/",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[7,\"button\"],[11,\"class\",\"back\"],[11,\"type\",\"button\"],[9],[0,\"← Back\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"https://static.thenounproject.com/png/3058-200.png\"],[11,\"class\",\"delete\"],[11,\"data-test\",\"delete-email\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"deleteEmail\",[23,[\"model\"]]],null]],[9],[10],[0,\"\\n\\n\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"emailbody\"],[9],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"emailheader\"],[9],[0,\"\\n\\nFrom: \"],[1,[23,[\"model\",\"from\"]],false],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\nTo: \"],[1,[23,[\"model\",\"to\"]],false],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"h3\"],[11,\"data-test\",\"email-subject\"],[9],[1,[23,[\"model\",\"subject\"]],false],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"data-test\",\"email-message\"],[9],[1,[23,[\"model\",\"message\"]],false],[10],[0,\"\\n\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/email.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aE0TJfj0",
    "block": "{\"symbols\":[\"email\",\"email\"],\"statements\":[[7,\"div\"],[11,\"id\",\"starreddiv\"],[9],[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"Starred Emails\"],[10],[0,\"\\n  \\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,2,[\"starred\"]]],null,{\"statements\":[[0,\"\\n          \"],[5,\"one-email\",[[11,\"data-test\",\"email\"],[11,\"data-test-starred\",\"starred\"]],[[\"@email\"],[[22,2,[]]]]],[0,\"\\n          \"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n       \\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n   \\n\"],[10],[0,\"\\n  \\n\\n\"],[7,\"h1\"],[9],[0,\"All Emails\"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"email\"],[9],[0,\"\\n  \"],[7,\"strong\"],[9],[1,[22,1,[\"from\"]],false],[10],[0,\"\\n   \\n\"],[4,\"link-to\",[\"email\",[22,1,[\"id\"]]],null,{\"statements\":[[0,\"     \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[1,[27,\"truncate-text\",[[22,1,[\"message\"]]],null],false],[0,\"...\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[1,[21,\"notStarred\"],false],[0,\"\\n\\n\"],[5,\"star-button\",[],[[\"@starred\",\"@onClick\"],[[22,1,[\"starred\"]],[27,\"action\",[[22,0,[]],\"star\",[22,1,[]]],null]]]],[0,\"\\n\\n\\n   \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/sent", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6vG/KXBV",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/sent.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/templates/trash", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WYIcvSJj",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "itp404-gmail/templates/trash.hbs"
    }
  });

  _exports.default = _default;
});
;define("itp404-gmail/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/factories/email.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/factories/email.js should pass ESLint\n\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('itp404-gmail/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("itp404-gmail/app")["default"].create({"name":"itp404-gmail","version":"0.0.0+5fc5f82e"});
          }
        
//# sourceMappingURL=itp404-gmail.map
