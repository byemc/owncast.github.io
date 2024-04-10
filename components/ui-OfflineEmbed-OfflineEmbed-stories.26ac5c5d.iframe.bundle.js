"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[3559],{"./components/ui/OfflineEmbed/OfflineEmbed.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleDefaultWithNotifications:()=>ExampleDefaultWithNotifications,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OfflineEmbed_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),typography=__webpack_require__("./node_modules/antd/es/typography/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),es_alert=__webpack_require__("./node_modules/antd/es/alert/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OfflineEmbed_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/OfflineEmbed/OfflineEmbed.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OfflineEmbed_module.Ay,options);const OfflineEmbed_OfflineEmbed_module=OfflineEmbed_module.Ay&&OfflineEmbed_module.Ay.locals?OfflineEmbed_module.Ay.locals:void 0;var validators=__webpack_require__("./utils/validators.ts"),__jsx=react.createElement,Title=typography.A.Title,EmbedMode=function(EmbedMode){return EmbedMode[EmbedMode.CannotFollow=1]="CannotFollow",EmbedMode[EmbedMode.CanFollow=2]="CanFollow",EmbedMode[EmbedMode.FollowPrompt=3]="FollowPrompt",EmbedMode[EmbedMode.InProgress=4]="InProgress",EmbedMode}(EmbedMode||{}),OfflineEmbed=function OfflineEmbed(_ref){var streamName=_ref.streamName,subtitle=_ref.subtitle,image=_ref.image,supportsFollows=_ref.supportsFollows,_useState=(0,react.useState)(EmbedMode.CanFollow),currentMode=_useState[0],setCurrentMode=_useState[1],_useState2=(0,react.useState)(null),remoteAccount=_useState2[0],setRemoteAccount=_useState2[1],_useState3=(0,react.useState)(!1),valid=_useState3[0],setValid=_useState3[1],_useState4=(0,react.useState)(!1),loading=_useState4[0],setLoading=_useState4[1],_useState5=(0,react.useState)(null),errorMessage=_useState5[0],setErrorMessage=_useState5[1];(0,react.useEffect)((function(){supportsFollows||setCurrentMode(EmbedMode.CannotFollow)}),[supportsFollows]);var followButtonPressed=function(){var _ref2=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:setCurrentMode(EmbedMode.FollowPrompt);case 1:case"end":return _context.stop()}}),_callee)})));return function followButtonPressed(){return _ref2.apply(this,arguments)}}(),remoteFollowButtonPressed=function(){var _ref3=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(){var sanitizedAccount,request,rawResponse,result;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return setLoading(!0),setCurrentMode(EmbedMode.CannotFollow),_context2.prev=2,sanitizedAccount=remoteAccount.replace(/^@+/,""),request={account:sanitizedAccount},_context2.next=7,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(request)});case 7:return rawResponse=_context2.sent,_context2.next=10,rawResponse.json();case 10:if((result=_context2.sent).redirectUrl&&window.open(result.redirectUrl,"_blank"),result.success){_context2.next=16;break}return setErrorMessage(result.message),setLoading(!1),_context2.abrupt("return");case 16:if(result.redirectUrl){_context2.next=20;break}return setErrorMessage("Unable to follow."),setLoading(!1),_context2.abrupt("return");case 20:_context2.next=25;break;case 22:_context2.prev=22,_context2.t0=_context2.catch(2),setErrorMessage(_context2.t0.message);case 25:setLoading(!1);case 26:case"end":return _context2.stop()}}),_callee2,null,[[2,22]])})));return function remoteFollowButtonPressed(){return _ref3.apply(this,arguments)}}();return __jsx("div",null,__jsx(head_default(),null,__jsx("title",null,streamName)),__jsx("div",{className:classnames_default()(OfflineEmbed_OfflineEmbed_module.offlineContainer)},__jsx(spin.A,{spinning:loading},__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.content},__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.heading},"This stream is not currently live."),__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.message},subtitle),__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.pageLogo,style:{backgroundImage:"url(".concat(image,")")}}),__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.pageName},streamName),errorMessage&&__jsx(es_alert.A,{message:"Follow Error",description:errorMessage,type:"error",showIcon:!0}),currentMode===EmbedMode.CanFollow&&__jsx(es_button.A,{className:OfflineEmbed_OfflineEmbed_module.submitButton,type:"primary",onClick:followButtonPressed},"Follow Server"),currentMode===EmbedMode.InProgress&&__jsx(Title,{level:4,className:OfflineEmbed_OfflineEmbed_module.heading},"Follow the instructions on your Fediverse server to complete the follow."),currentMode===EmbedMode.FollowPrompt&&__jsx("div",null,__jsx(input.A,{value:remoteAccount,size:"large",onChange:function onChange(e){return function handleAccountChange(a){setRemoteAccount(a),(0,validators.JP)(a)?setValid(!0):setValid(!1)}(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:remoteAccount}),__jsx("div",{className:OfflineEmbed_OfflineEmbed_module.footer},"You'll be redirected to your Fediverse server and asked to confirm the action."),__jsx(space.A,{className:OfflineEmbed_OfflineEmbed_module.buttons},__jsx(es_button.A,{className:OfflineEmbed_OfflineEmbed_module.submitButton,disabled:!valid,type:"primary",onClick:remoteFollowButtonPressed},"Submit and Follow")))))))};OfflineEmbed.displayName="OfflineEmbed";try{OfflineEmbed.displayName="OfflineEmbed",OfflineEmbed.__docgenInfo={description:"",displayName:"OfflineEmbed",props:{streamName:{defaultValue:null,description:"",name:"streamName",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},supportsFollows:{defaultValue:null,description:"",name:"supportsFollows",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/OfflineEmbed/OfflineEmbed.tsx#OfflineEmbed"]={docgenInfo:OfflineEmbed.__docgenInfo,name:"OfflineEmbed",path:"components/ui/OfflineEmbed/OfflineEmbed.tsx#OfflineEmbed"})}catch(__react_docgen_typescript_loader_error){}var offline_state=__webpack_require__("./stories/assets/mocks/offline-state.png"),OfflineEmbed_stories_jsx=react.createElement;const OfflineEmbed_stories={title:"owncast/Layout/Offline Embed",component:OfflineEmbed,parameters:{design:{type:"image",url:offline_state.A,scale:.5},docs:{description:{component:"When the stream is offline the player should be replaced by this banner that can support custom text and notify actions."}}}};var Template=function Template(args){return OfflineEmbed_stories_jsx(es.bi,null,OfflineEmbed_stories_jsx(OfflineEmbed,args))};Template.displayName="Template";var ExampleDefaultWithNotifications={render:Template,args:{streamName:"Cool stream 42",subtitle:"This stream rocks. You should watch it.",image:"https://placehold.co/600x400/orange/white"}};ExampleDefaultWithNotifications.parameters={...ExampleDefaultWithNotifications.parameters,docs:{...ExampleDefaultWithNotifications.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Cool stream 42',\n    subtitle: 'This stream rocks. You should watch it.',\n    image: 'https://placehold.co/600x400/orange/white'\n  }\n}",...ExampleDefaultWithNotifications.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleDefaultWithNotifications"]},"./stories/assets/mocks/offline-state.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/offline-state.4fc5b2e9.png",height:248,width:987,blurDataURL:"static/media/offline-state.4fc5b2e9.png"}},"./utils/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AY:()=>isValidUrl,JP:()=>isValidFediverseAccount,vI:()=>DEFAULT_TEXTFIELD_URL_PATTERN});var DEFAULT_TEXTFIELD_URL_PATTERN="https?://.*";function isValidUrl(url){var validProtocols=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{var validationObject=new URL(url);if(""===validationObject.protocol||""===validationObject.hostname||!validProtocols.includes(validationObject.protocol))return!1}catch(e){return!1}return!0}function isValidFediverseAccount(account){var sanitized=account.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(sanitized).toLowerCase())}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/OfflineEmbed/OfflineEmbed.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".YjJKleLwiIchb5CgOfBx{position:absolute;width:100%;height:100%;background-image:linear-gradient(to bottom, rgba(18, 22, 29, 0) 0%, rgba(18, 22, 29, 0.75) 100%),radial-gradient(circle, rgba(18, 22, 29, 0) 0%, rgba(18, 22, 29, 0.5) 100%),linear-gradient(to bottom, rgb(122, 92, 243) 0%, rgb(35, 134, 226) 100%),linear-gradient(rgb(240, 243, 248), rgb(240, 243, 248));display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;gap:16px;padding:24px}.YjJKleLwiIchb5CgOfBx .Sd0nAc32fyavsbzUiQag{display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;gap:8px;padding:24px;text-align:center}.YjJKleLwiIchb5CgOfBx .Sd0nAc32fyavsbzUiQag .niWaESeg00KAADIvl86A{color:#fff;font-family:var(--theme-text-body-font-family);font-style:normal;font-size:16px;font-weight:400;line-height:1.375;letter-spacing:0;text-decoration:none;text-transform:none}.YjJKleLwiIchb5CgOfBx .Sd0nAc32fyavsbzUiQag .rYeg54dEaoky9sjQH87T{color:#fff;font-family:var(--theme-text-display-font-family);font-style:normal;font-size:24px;font-weight:500;line-height:1.125;letter-spacing:-0.125px;text-decoration:none;text-transform:none}.YjJKleLwiIchb5CgOfBx .Sd0nAc32fyavsbzUiQag .Www9R8EAah0Xmiu38Q8A{position:relative;width:10vw;height:10vw;min-height:64px;min-width:64px;max-height:100px;max-width:100px;border-radius:96px;background-color:#fff;border:5px solid #12161d;display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;gap:0;padding:10px;background-size:cover;background-position:center}.YjJKleLwiIchb5CgOfBx .Sd0nAc32fyavsbzUiQag .lzEAHl3gvtY0PRKvaGNQ{color:#fff;font-family:var(--theme-text-display-font-family);font-style:normal;font-size:20px;font-weight:500;line-height:1.1875;letter-spacing:-0.0625px;text-decoration:none;text-transform:none}.YjJKleLwiIchb5CgOfBx .k_Egf3CG5ieBC73KI3UH{margin-top:10px}.YjJKleLwiIchb5CgOfBx .r8SQnDnrJWKDW6hdpoJZ{color:#fff;padding:5px}","",{version:3,sources:["webpack://./components/ui/OfflineEmbed/OfflineEmbed.module.scss"],names:[],mappings:"AAEA,sBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,6SAAA,CAIA,YAAA,CACA,uBAAA,CACA,kBAAA,CACA,sBAAA,CACA,QAAA,CACA,YAAA,CAGA,4CACE,YAAA,CACA,uBAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CACA,YAAA,CACA,iBAAA,CAGA,kEACE,UAAA,CACA,8CAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,oBAAA,CACA,mBAAA,CAIF,kEACE,UAAA,CACA,iDAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,uBAAA,CACA,oBAAA,CACA,mBAAA,CAIF,kEACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,qBAAA,CACA,wBAAA,CACA,YAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,KAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CAIF,kEACE,UAAA,CACA,iDAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,wBAAA,CACA,oBAAA,CACA,mBAAA,CAIJ,4CACE,eAAA,CAGF,4CACE,UAAA,CACA,WAAA",sourcesContent:["@import '../../../styles/mixins';\n\n.offlineContainer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, rgb(18 22 29 / 0%) 0%, rgb(18 22 29 / 75%) 100%),\n    radial-gradient(circle, rgb(18 22 29 / 0%) 0%, rgb(18 22 29 / 50%) 100%),\n    linear-gradient(to bottom, rgb(122 92 243 / 100%) 0%, rgb(35 134 226 / 100%) 100%),\n    linear-gradient(rgb(240 243 248 / 100%), rgb(240 243 248 / 100%));\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 24px;\n\n  /* Content */\n  .content {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    padding: 24px;\n    text-align: center;\n\n    /* Message */\n    .message {\n      color: rgb(255 255 255 / 100%);\n      font-family: var(--theme-text-body-font-family);\n      font-style: normal;\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.375;\n      letter-spacing: 0;\n      text-decoration: none;\n      text-transform: none;\n    }\n\n    /* Heading */\n    .heading {\n      color: rgb(255 255 255 / 100%);\n      font-family: var(--theme-text-display-font-family);\n      font-style: normal;\n      font-size: 24px;\n      font-weight: 500;\n      line-height: 1.125;\n      letter-spacing: -0.125px;\n      text-decoration: none;\n      text-transform: none;\n    }\n\n    /* Page Logo */\n    .pageLogo {\n      position: relative;\n      width: 10vw;\n      height: 10vw;\n      min-height: 64px;\n      min-width: 64px;\n      max-height: 100px;\n      max-width: 100px;\n      border-radius: 96px;\n      background-color: rgb(255 255 255 / 100%);\n      border: 5px solid rgb(18 22 29 / 100%);\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: flex-start;\n      justify-content: flex-start;\n      gap: 0;\n      padding: 10px;\n      background-size: cover;\n      background-position: center;\n    }\n\n    /* Page Name */\n    .pageName {\n      color: rgb(255 255 255 / 100%);\n      font-family: var(--theme-text-display-font-family);\n      font-style: normal;\n      font-size: 20px;\n      font-weight: 500;\n      line-height: 1.1875;\n      letter-spacing: -0.0625px;\n      text-decoration: none;\n      text-transform: none;\n    }\n  }\n\n  .submitButton {\n    margin-top: 10px;\n  }\n\n  .footer {\n    color: white;\n    padding: 5px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);