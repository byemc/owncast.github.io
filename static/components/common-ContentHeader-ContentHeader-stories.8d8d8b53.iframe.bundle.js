"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[3860],{"./components/common/ContentHeader/ContentHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,LongContent:()=>LongContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Components/Content Header",component:__webpack_require__("./components/common/ContentHeader/ContentHeader.tsx").d,parameters:{}};var Example={args:{name:"My Awesome Owncast Stream",summary:"A calvacade of glorious sights and sounds",tags:["word","tag with spaces","music"],logo:"https://watch.owncast.online/logo",links:[{platform:"github",url:"https://github.com/owncast/owncast",icon:"https://watch.owncast.online/img/platformlogos/github.svg"},{platform:"Documentation",url:"https://owncast.online",icon:"https://watch.owncast.online/img/platformlogos/link.svg"},{platform:"mastodon",url:"https://fosstodon.org/users/owncast",icon:"https://watch.owncast.online/img/platformlogos/mastodon.svg"}]}},LongContent={args:{name:"My Awesome Owncast Stream, streaming the best of streams and some lorem ipsum too",summary:"A calvacade of glorious sights and sounds. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",tags:["word","tag with spaces","music","more tags","a bunch","keep going","and more","just a few more","video games","things","stuff","ok some more","this should do it"],logo:"https://watch.owncast.online/logo",links:[{platform:"github",url:"https://github.com/owncast/owncast",icon:"https://watch.owncast.online/img/platformlogos/github.svg"},{platform:"Documentation",url:"https://owncast.online",icon:"https://watch.owncast.online/img/platformlogos/link.svg"},{platform:"mastodon",url:"https://fosstodon.org/users/owncast",icon:"https://watch.owncast.online/img/platformlogos/mastodon.svg"}]}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'My Awesome Owncast Stream',\n    summary: 'A calvacade of glorious sights and sounds',\n    tags: ['word', 'tag with spaces', 'music'],\n    logo: 'https://watch.owncast.online/logo',\n    links: [{\n      platform: 'github',\n      url: 'https://github.com/owncast/owncast',\n      icon: 'https://watch.owncast.online/img/platformlogos/github.svg'\n    }, {\n      platform: 'Documentation',\n      url: 'https://owncast.online',\n      icon: 'https://watch.owncast.online/img/platformlogos/link.svg'\n    }, {\n      platform: 'mastodon',\n      url: 'https://fosstodon.org/users/owncast',\n      icon: 'https://watch.owncast.online/img/platformlogos/mastodon.svg'\n    }]\n  }\n}",...Example.parameters?.docs?.source}}},LongContent.parameters={...LongContent.parameters,docs:{...LongContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'My Awesome Owncast Stream, streaming the best of streams and some lorem ipsum too',\n    summary: 'A calvacade of glorious sights and sounds. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',\n    tags: ['word', 'tag with spaces', 'music', 'more tags', 'a bunch', 'keep going', 'and more', 'just a few more', 'video games', 'things', 'stuff', 'ok some more', 'this should do it'],\n    logo: 'https://watch.owncast.online/logo',\n    links: [{\n      platform: 'github',\n      url: 'https://github.com/owncast/owncast',\n      icon: 'https://watch.owncast.online/img/platformlogos/github.svg'\n    }, {\n      platform: 'Documentation',\n      url: 'https://owncast.online',\n      icon: 'https://watch.owncast.online/img/platformlogos/link.svg'\n    }, {\n      platform: 'mastodon',\n      url: 'https://fosstodon.org/users/owncast',\n      icon: 'https://watch.owncast.online/img/platformlogos/mastodon.svg'\n    }]\n  }\n}",...LongContent.parameters?.docs?.source}}};const __namedExportsOrder=["Example","LongContent"]},"./components/common/ContentHeader/ContentHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>ContentHeader});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dist=__webpack_require__("./node_modules/react-linkify/dist/index.js"),Logo=__webpack_require__("./components/ui/Logo/Logo.tsx"),SocialLinks=__webpack_require__("./components/ui/SocialLinks/SocialLinks.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ContentHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/ContentHeader/ContentHeader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ContentHeader_module.Ay,options);const ContentHeader_ContentHeader_module=ContentHeader_module.Ay&&ContentHeader_module.Ay.locals?ContentHeader_module.Ay.locals:void 0;var __jsx=react.createElement,ContentHeader=function ContentHeader(_ref){var name=_ref.name,summary=_ref.summary,logo=_ref.logo,tags=_ref.tags,links=_ref.links;return __jsx("div",{className:ContentHeader_ContentHeader_module.root},__jsx("div",{className:ContentHeader_ContentHeader_module.logoTitleSection},__jsx("div",{className:ContentHeader_ContentHeader_module.logo},__jsx(Logo.g,{src:logo})),__jsx("div",{className:ContentHeader_ContentHeader_module.titleSection},__jsx("h2",{className:classnames_default()(ContentHeader_ContentHeader_module.title,ContentHeader_ContentHeader_module.row,"header-title")},name),__jsx("h3",{className:classnames_default()(ContentHeader_ContentHeader_module.subtitle,ContentHeader_ContentHeader_module.row,"header-subtitle")},__jsx(dist.A,null,summary)),__jsx("div",{className:classnames_default()(ContentHeader_ContentHeader_module.tagList,ContentHeader_ContentHeader_module.row)},tags.length>0&&tags.map((function(tag){return __jsx("span",{key:tag},"#",tag," ")}))),__jsx("div",{className:classnames_default()(ContentHeader_ContentHeader_module.socialLinks,ContentHeader_ContentHeader_module.row)},__jsx(SocialLinks.R,{links})))))};ContentHeader.displayName="ContentHeader";try{ContentHeader.displayName="ContentHeader",ContentHeader.__docgenInfo={description:"",displayName:"ContentHeader",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"string[]"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"SocialLink[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/common/ContentHeader/ContentHeader.tsx#ContentHeader"]={docgenInfo:ContentHeader.__docgenInfo,name:"ContentHeader",path:"components/common/ContentHeader/ContentHeader.tsx#ContentHeader"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Logo});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Logo/Logo.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Logo_module.Ay,options);const Logo_Logo_module=Logo_module.Ay&&Logo_module.Ay.locals?Logo_module.Ay.locals:void 0;var __jsx=react.createElement,Logo=function Logo(_ref){var src=_ref.src;return __jsx("div",{className:Logo_Logo_module.root},__jsx("div",{className:Logo_Logo_module.container},__jsx("img",{src,alt:"Logo",className:Logo_Logo_module.image,loading:"lazy"})))};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"components/ui/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/SocialLinks/SocialLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SocialLinks});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SocialLinks_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/SocialLinks/SocialLinks.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SocialLinks_module.Ay,options);const SocialLinks_SocialLinks_module=SocialLinks_module.Ay&&SocialLinks_module.Ay.locals?SocialLinks_module.Ay.locals:void 0;var __jsx=react.createElement,SocialLinks=function SocialLinks(_ref){var links=_ref.links;return null!=links&&links.length?__jsx(react_error_boundary_esm.tH,{fallbackRender:function fallbackRender(_ref2){var error=_ref2.error,resetErrorBoundary=_ref2.resetErrorBoundary;return __jsx(ComponentError.O,{componentName:"SocialLinks",message:error.message,retryFunction:resetErrorBoundary})}},__jsx("div",{className:SocialLinks_SocialLinks_module.links,id:"social-links"},null==links?void 0:links.map((function(link){return __jsx("a",{key:link.platform,href:link.url,className:SocialLinks_SocialLinks_module.link,target:"_blank",rel:"noreferrer me"},__jsx(next_image.A,{src:link.icon||"/img/platformlogos/default.svg",alt:link.platform,className:SocialLinks_SocialLinks_module.link,width:"30",height:"30"}))})))):null};SocialLinks.displayName="SocialLinks";try{SocialLinks.displayName="SocialLinks",SocialLinks.__docgenInfo={description:"",displayName:"SocialLinks",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"SocialLink[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/SocialLinks/SocialLinks.tsx#SocialLinks"]={docgenInfo:SocialLinks.__docgenInfo,name:"SocialLinks",path:"components/ui/SocialLinks/SocialLinks.tsx#SocialLinks"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/common/ContentHeader/ContentHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".b239jbUj99EJEkcziuyJ{position:relative;display:grid;padding:var(--content-padding);padding-left:var(--content-padding);padding-right:var(--content-padding);padding-top:calc(var(--content-padding)*.5);color:var(--theme-color-components-text-on-light)}.eLmQx5gF6COQpy_hno2r{margin-bottom:.75rem}.ofP_5CYvAUEJJ07BvbEc{display:flex;flex-direction:column}.ofP_5CYvAUEJJ07BvbEc .CXWecuolAT7ZIrbQgZZ9{margin:auto .6rem}@media only screen and (width >= 768px){.ofP_5CYvAUEJJ07BvbEc{flex-direction:row}.ofP_5CYvAUEJJ07BvbEc .CXWecuolAT7ZIrbQgZZ9{margin:.6rem}}@media only screen and (width <= 768px){.ofP_5CYvAUEJJ07BvbEc{align-items:center}.ofP_5CYvAUEJJ07BvbEc .CXWecuolAT7ZIrbQgZZ9{margin:1.2rem auto}}.Bo6xO4PiJxJzVtsmvzNP{display:flex;flex-direction:column;margin-left:.6rem}@media only screen and (width <= 768px){.Bo6xO4PiJxJzVtsmvzNP{margin-left:0}}.Bo6xO4PiJxJzVtsmvzNP .hOrXQ2KzX3xD3rEI9znw{font-family:var(--theme-text-display-font-family);font-size:1.8rem;font-weight:600;line-height:30px;margin:unset}.Bo6xO4PiJxJzVtsmvzNP .qOQp9PklDK4YkZkUNTRb{font-size:1.15rem;font-weight:300;max-width:900px;margin:.75rem 0}.vB6KMUh2wQNWt2Bu1dhi{color:var(--theme-color-palette-10)}.vB6KMUh2wQNWt2Bu1dhi span{display:inline-block;margin-right:.5rem;font-weight:400}","",{version:3,sources:["webpack://./components/common/ContentHeader/ContentHeader.module.scss","webpack://./styles/mixins.scss"],names:[],mappings:"AAIA,sBACE,iBAAA,CACA,YAAA,CACA,8BAAA,CACA,mCAAA,CACA,oCAAA,CACA,2CAAA,CACA,iDAAA,CAGF,sBACE,oBAba,CAgBf,sBACE,YAAA,CACA,qBAAA,CAEA,4CACE,iBAAA,CCfA,wCDUJ,sBASI,kBAAA,CAEA,4CACE,YAAA,CAAA,CCfF,wCDGJ,sBAiBI,kBAAA,CAEA,4CACE,kBAAA,CAAA,CAKN,sBACE,YAAA,CACA,qBAAA,CACA,iBAAA,CC/BE,wCD4BJ,sBAMI,aAAA,CAAA,CAGF,4CACE,iDAAA,CACA,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,YAAA,CAGF,4CACE,iBAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CAIJ,sBACE,mCAAA,CAEA,2BACE,oBAAA,CACA,kBAAA,CACA,eAAA",sourcesContent:["@import '../../../styles/mixins';\n\n$vert-spacing: 0.75rem;\n\n.root {\n  position: relative;\n  display: grid;\n  padding: var(--content-padding);\n  padding-left: var(--content-padding);\n  padding-right: var(--content-padding);\n  padding-top: calc(var(--content-padding) * 0.5);\n  color: var(--theme-color-components-text-on-light);\n}\n\n.row {\n  margin-bottom: $vert-spacing;\n}\n\n.logoTitleSection {\n  display: flex;\n  flex-direction: column;\n\n  .logo {\n    margin: auto 0.6rem;\n  }\n\n  @include screen(desktop) {\n    flex-direction: row;\n\n    .logo {\n      margin: 0.6rem;\n    }\n  }\n\n  @include screen(tablet) {\n    align-items: center;\n\n    .logo {\n      margin: 1.2rem auto;\n    }\n  }\n}\n\n.titleSection {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0.6rem;\n\n  @include screen(tablet) {\n    margin-left: 0;\n  }\n\n  .title {\n    font-family: var(--theme-text-display-font-family);\n    font-size: 1.8rem;\n    font-weight: 600;\n    line-height: 30px;\n    margin: unset;\n  }\n\n  .subtitle {\n    font-size: 1.15rem;\n    font-weight: 300;\n    max-width: 900px;\n    margin: $vert-spacing 0;\n  }\n}\n\n.tagList {\n  color: var(--theme-color-palette-10);\n\n  span {\n    display: inline-block;\n    margin-right: 0.5rem;\n    font-weight: 400;\n  }\n}\n","@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin screen($breakpoint) { \n    @if $breakpoint == desktop {    \n    @media only screen and (width >= 768px) {\n      @content;\n    }\n  }\n\n  // tablet will also apply to mobile as there is no cut-off for min-width, however changing this now could break CSS all over the site.\n  @if $breakpoint == tablet {\n    @media only screen and (width <= 768px) {\n      @content;\n    }\n  }\n\n  @if $breakpoint == mobile {\n    @media only screen and (width <= 481px) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Logo/Logo.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FTjAHUoiZ9Nxe3OX7NSF{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;margin-right:.5rem;width:96px;height:96px;border-radius:50%;border-width:5px;border-style:solid;border-color:var(--theme-color-palette-0);background-color:var(--theme-color-palette-4)}.imeI_H_fMk90SW3hTpJ0{width:90%;height:90%;border-radius:50%;overflow:hidden}.e76MdtubbucqX5_rXYbe{width:100%;height:100%;object-fit:cover;object-position:center;overflow:hidden}","",{version:3,sources:["webpack://./components/ui/Logo/Logo.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,kBAAA,CACA,yCAAA,CACA,6CAAA,CAGF,sBACE,SAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAGF,sBACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,sBAAA,CACA,eAAA",sourcesContent:[".root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin-right: 0.5rem;\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  border-width: 5px;\n  border-style: solid;\n  border-color: var(--theme-color-palette-0);\n  background-color: var(--theme-color-palette-4);\n}\n\n.container {\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  overflow: hidden;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/SocialLinks/SocialLinks.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".NhzKbDZEHAwoL58j8C0F{width:30px;margin-right:16px}.UDJdrsYujhSjpEGf0aGY{display:flex;align-items:center;justify-content:flex-start;margin-top:5px}","",{version:3,sources:["webpack://./components/ui/SocialLinks/SocialLinks.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,iBAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,cAAA",sourcesContent:[".link {\n  width: 30px;\n  margin-right: 16px;\n}\n\n.links {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 5px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/rc-util/es/Children/toArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toArray});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/node_modules/react-is/index.js");function toArray(children){var option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},ret=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,(function(child){(null!=child||option.keepEmpty)&&(Array.isArray(child)?ret=ret.concat(toArray(child)):(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child)&&child.props?ret=ret.concat(toArray(child.props.children,option)):ret.push(child))})),ret}},"./node_modules/react-error-boundary/dist/react-error-boundary.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tH:()=>ErrorBoundary});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ErrorBoundaryContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),initialState={didCatch:!1,error:null};class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState}static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary(){const{error}=this.state;if(null!==error){for(var _this$props$onReset,_this$props,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null===(_this$props$onReset=(_this$props=this.props).onReset)||void 0===_this$props$onReset||_this$props$onReset.call(_this$props,{args,reason:"imperative-api"}),this.setState(initialState)}}componentDidCatch(error,info){var _this$props$onError,_this$props2;null===(_this$props$onError=(_this$props2=this.props).onError)||void 0===_this$props$onError||_this$props$onError.call(_this$props2,error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;var _this$props$onReset2,_this$props3;didCatch&&null!==prevState.error&&function hasArrayChanged(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(null===(_this$props$onReset2=(_this$props3=this.props).onReset)||void 0===_this$props$onReset2||_this$props$onReset2.call(_this$props3,{next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState(initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else if(FallbackComponent)childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props);else{if(null!==fallback&&!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))throw error;childToRender=fallback}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);