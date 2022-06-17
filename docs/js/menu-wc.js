'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-auth documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'data-target="#xs-controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' :
                                            'id="xs-controllers-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' : 'data-target="#xs-injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' :
                                        'id="xs-injectables-links-module-AppModule-a01a4a2a0b3849dc885288a6e477a7907196a7b9c03c729eba40e4f5512a6dc245918e3d7b8aec4b7926154940c2084a7f2950d7017b2dca64edc1b244abd4a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-f1e35140810374653dd4d42bdc74fd81f8182497ef39ff771adfcafd1b2cfa4800a0cb2ca01100448117d7b366ac67df7c7464a5df4f8945214b0754b24f07be"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConstantModule.html" data-type="entity-link" >ConstantModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' : 'data-target="#xs-injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' :
                                        'id="xs-injectables-links-module-ConstantModule-35e231fddea21c2e04fbc397bcc601a8a285f321f1404c4bce41654c3dd42ae15cb6f0a6e2123c4ef34ed37c152f50d83edaf9921f24f2593e84fa6b7643dfa4"' }>
                                        <li class="link">
                                            <a href="injectables/ConstantService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstantService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RefreshTokenModule.html" data-type="entity-link" >RefreshTokenModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' : 'data-target="#xs-injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' :
                                        'id="xs-injectables-links-module-RefreshTokenModule-f17ecd702ff7adca07a133e10372d5be00dd6ed1ebfd452908000986900582e99783be2e8109eacbab79829d9779fa4c796eaa04b399ef773fd6d2ca77628735"' }>
                                        <li class="link">
                                            <a href="injectables/RefreshTokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'data-target="#xs-controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' :
                                            'id="xs-controllers-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' : 'data-target="#xs-injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' :
                                        'id="xs-injectables-links-module-RoleModule-7faf7cc6a991d701d90f08ef744155c1a56222ac939e73d4444346ea1eff8f2414229de8b65cd3e49d613310ee1383193350de416554657982a285632434c799"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'data-target="#xs-controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' :
                                            'id="xs-controllers-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' : 'data-target="#xs-injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' :
                                        'id="xs-injectables-links-module-UserModule-12cc89bebd20e7165cb8a19083ae88a15143ba3bb3aab3aa673ac22c4dc4f4bca5d1773f1f48b70593af58e32cb4ea581f5bd631bb8f8b2b939447110968d9bd"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Constant.html" data-type="entity-link" >Constant</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCredentialsDto.html" data-type="entity-link" >LoginCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshToken.html" data-type="entity-link" >RefreshToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PermissionsGuard.html" data-type="entity-link" >PermissionsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});