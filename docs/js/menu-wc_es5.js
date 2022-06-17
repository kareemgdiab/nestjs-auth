'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">nest-auth documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'data-target="#xs-controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'id="xs-controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'data-target="#xs-injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'id="xs-injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationModule.html\" data-type=\"entity-link\" >AuthenticationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"' : 'id="xs-controllers-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthenticationController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthenticationController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"' : 'id="xs-injectables-links-module-AuthenticationModule-fb2070a770d5f2c3e2b73b51ca9e075e832323caf0b225539e98e842a25accb89bae4948aa7bb6bfe198ae789d340b4acf68cf27f809a1c8a0cf8b1ec64534f3"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthenticationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthenticationService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConstantModule.html\" data-type=\"entity-link\" >ConstantModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' : 'data-target="#xs-injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' : 'id="xs-injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ConstantService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConstantService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RefreshTokenModule.html\" data-type=\"entity-link\" >RefreshTokenModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' : 'data-target="#xs-injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' : 'id="xs-injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RefreshTokenService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefreshTokenService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RoleModule.html\" data-type=\"entity-link\" >RoleModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'data-target="#xs-controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'id="xs-controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/RoleController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RoleController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'data-target="#xs-injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'id="xs-injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RoleService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RoleService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'data-target="#xs-controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'id="xs-controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UserController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'data-target="#xs-injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'id="xs-injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UserService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Constant.html\" data-type=\"entity-link\" >Constant</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateRoleDto.html\" data-type=\"entity-link\" >CreateRoleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginCredentialsDto.html\" data-type=\"entity-link\" >LoginCredentialsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RefreshToken.html\" data-type=\"entity-link\" >RefreshToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RefreshTokenDto.html\" data-type=\"entity-link\" >RefreshTokenDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Role.html\" data-type=\"entity-link\" >Role</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalAuthGuard.html\" data-type=\"entity-link\" >LocalAuthGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/PermissionsGuard.html\" data-type=\"entity-link\" >PermissionsGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));