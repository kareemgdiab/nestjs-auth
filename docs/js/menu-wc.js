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
                                            'data-target="#controllers-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' : 'data-target="#xs-controllers-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' :
                                            'id="xs-controllers-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' : 'data-target="#xs-injectables-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' :
                                        'id="xs-injectables-links-module-AppModule-1e98a0648ad4768c65ecb8f589aabceba05830f6dfa838f7ed8a8a50971ed8abb411833dc0af56a1774c8b8919653aab36f4ab56213f05479dcba1757706c600"' }>
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
                                            'data-target="#controllers-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-519abe4251006288edf9149becc0e4150c44c95e48bd65fcf459f77e21eefa58943f8f929b988852e88d7a6f175c215e483f43c69912b9d4bd3a6afdf9866ea4"' }>
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
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-52a0d0811f205fd33b1f5e778f8cfd2baa4471e03c61d98815171f876a55eeb2828bb86528b83f22156b4a6736fd5080117b8ac99ab8a0d940627e962e3fbbe7"' : 'data-target="#xs-injectables-links-module-UserModule-52a0d0811f205fd33b1f5e778f8cfd2baa4471e03c61d98815171f876a55eeb2828bb86528b83f22156b4a6736fd5080117b8ac99ab8a0d940627e962e3fbbe7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-52a0d0811f205fd33b1f5e778f8cfd2baa4471e03c61d98815171f876a55eeb2828bb86528b83f22156b4a6736fd5080117b8ac99ab8a0d940627e962e3fbbe7"' :
                                        'id="xs-injectables-links-module-UserModule-52a0d0811f205fd33b1f5e778f8cfd2baa4471e03c61d98815171f876a55eeb2828bb86528b83f22156b4a6736fd5080117b8ac99ab8a0d940627e962e3fbbe7"' }>
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