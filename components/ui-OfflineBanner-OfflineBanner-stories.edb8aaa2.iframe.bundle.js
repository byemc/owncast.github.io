/*! For license information please see ui-OfflineBanner-OfflineBanner-stories.edb8aaa2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[6165],{"./components/ui/OfflineBanner/OfflineBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleCustomTextWithoutNotifications:()=>ExampleCustomTextWithoutNotifications,ExampleCustomWithDateAndNotifications:()=>ExampleCustomWithDateAndNotifications,ExampleDefaultWithDateAndFediverse:()=>ExampleDefaultWithDateAndFediverse,ExampleDefaultWithNotifications:()=>ExampleDefaultWithNotifications,ExampleDefaultWithNotificationsAndFediverse:()=>ExampleDefaultWithNotificationsAndFediverse,ExampleDefaultWithoutNotifications:()=>ExampleDefaultWithoutNotifications,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_OfflineBanner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/OfflineBanner/OfflineBanner.tsx"),_stories_assets_mocks_offline_state_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/assets/mocks/offline-state.png"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Layout/Offline Banner",component:_OfflineBanner__WEBPACK_IMPORTED_MODULE_2__.s,parameters:{design:{type:"image",url:_stories_assets_mocks_offline_state_png__WEBPACK_IMPORTED_MODULE_3__.A,scale:.5},docs:{description:{component:"When the stream is offline the player should be replaced by this banner that can support custom text and notify actions."}}}};var Template=function Template(args){return __jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.bi,null,__jsx(_OfflineBanner__WEBPACK_IMPORTED_MODULE_2__.s,args))};Template.displayName="Template";var ExampleDefaultWithNotifications={render:Template,args:{streamName:"Cool stream 42",notificationsEnabled:!0,lastLive:new Date}},ExampleDefaultWithDateAndFediverse={render:Template,args:{streamName:"Dull stream 31337",lastLive:new Date,notificationsEnabled:!1,fediverseAccount:"streamer@coolstream.biz"}},ExampleCustomWithDateAndNotifications={render:Template,args:{streamName:"Dull stream 31337",customText:"This is some example offline text that a streamer can leave for a visitor of the page.",lastLive:new Date,notificationsEnabled:!0}},ExampleDefaultWithNotificationsAndFediverse={render:Template,args:{streamName:"Cool stream 42",notificationsEnabled:!0,fediverseAccount:"streamer@coolstream.biz",lastLive:new Date}},ExampleDefaultWithoutNotifications={render:Template,args:{streamName:"Cool stream 42",notificationsEnabled:!1,lastLive:new Date}},ExampleCustomTextWithoutNotifications={render:Template,args:{streamName:"Dull stream 31337",customText:"This is some example offline text that a streamer can leave for a visitor of the page."}};ExampleDefaultWithNotifications.parameters={...ExampleDefaultWithNotifications.parameters,docs:{...ExampleDefaultWithNotifications.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Cool stream 42',\n    notificationsEnabled: true,\n    lastLive: new Date()\n  }\n}",...ExampleDefaultWithNotifications.parameters?.docs?.source}}},ExampleDefaultWithDateAndFediverse.parameters={...ExampleDefaultWithDateAndFediverse.parameters,docs:{...ExampleDefaultWithDateAndFediverse.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Dull stream 31337',\n    lastLive: new Date(),\n    notificationsEnabled: false,\n    fediverseAccount: 'streamer@coolstream.biz'\n  }\n}",...ExampleDefaultWithDateAndFediverse.parameters?.docs?.source}}},ExampleCustomWithDateAndNotifications.parameters={...ExampleCustomWithDateAndNotifications.parameters,docs:{...ExampleCustomWithDateAndNotifications.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Dull stream 31337',\n    customText: 'This is some example offline text that a streamer can leave for a visitor of the page.',\n    lastLive: new Date(),\n    notificationsEnabled: true\n  }\n}",...ExampleCustomWithDateAndNotifications.parameters?.docs?.source}}},ExampleDefaultWithNotificationsAndFediverse.parameters={...ExampleDefaultWithNotificationsAndFediverse.parameters,docs:{...ExampleDefaultWithNotificationsAndFediverse.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Cool stream 42',\n    notificationsEnabled: true,\n    fediverseAccount: 'streamer@coolstream.biz',\n    lastLive: new Date()\n  }\n}",...ExampleDefaultWithNotificationsAndFediverse.parameters?.docs?.source}}},ExampleDefaultWithoutNotifications.parameters={...ExampleDefaultWithoutNotifications.parameters,docs:{...ExampleDefaultWithoutNotifications.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Cool stream 42',\n    notificationsEnabled: false,\n    lastLive: new Date()\n  }\n}",...ExampleDefaultWithoutNotifications.parameters?.docs?.source}}},ExampleCustomTextWithoutNotifications.parameters={...ExampleCustomTextWithoutNotifications.parameters,docs:{...ExampleCustomTextWithoutNotifications.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    streamName: 'Dull stream 31337',\n    customText: 'This is some example offline text that a streamer can leave for a visitor of the page.'\n  }\n}",...ExampleCustomTextWithoutNotifications.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleDefaultWithNotifications","ExampleDefaultWithDateAndFediverse","ExampleCustomWithDateAndNotifications","ExampleDefaultWithNotificationsAndFediverse","ExampleDefaultWithoutNotifications","ExampleCustomTextWithoutNotifications"]},"./stories/assets/mocks/offline-state.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/offline-state.4fc5b2e9.png",height:248,width:987,blurDataURL:"static/media/offline-state.4fc5b2e9.png"}},"./node_modules/antd/es/config-provider/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QO:()=>ConfigContext,TG:()=>ConfigConsumer,by:()=>withConfigConsumer});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ConfigContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({getPrefixCls:function defaultGetPrefixCls(suffixCls,customizePrefixCls){return customizePrefixCls||(suffixCls?"ant-".concat(suffixCls):"ant")}}),ConfigConsumer=ConfigContext.Consumer;function withConfigConsumer(config){return function withConfigConsumerFunc(Component){var cons=Component.constructor;cons&&cons.displayName||Component.name;return function SFC(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfigConsumer,null,(function(configProps){var basicPrefixCls=config.prefixCls,prefixCls=(0,configProps.getPrefixCls)(basicPrefixCls,props.prefixCls);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},configProps,props,{prefixCls}))}))}}}},"./node_modules/antd/es/divider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_config_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__=function Divider(props){var _React$useContext=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.QO),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,customizePrefixCls=props.prefixCls,_props$type=props.type,type=void 0===_props$type?"horizontal":_props$type,_props$orientation=props.orientation,orientation=void 0===_props$orientation?"center":_props$orientation,orientationMargin=props.orientationMargin,className=props.className,children=props.children,dashed=props.dashed,plain=props.plain,restProps=__rest(props,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),prefixCls=getPrefixCls("divider",customizePrefixCls),orientationPrefix=orientation.length>0?"-".concat(orientation):orientation,hasChildren=!!children,hasCustomMarginLeft="left"===orientation&&null!=orientationMargin,hasCustomMarginRight="right"===orientation&&null!=orientationMargin,classString=classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls,"".concat(prefixCls,"-").concat(type),(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.A)({},"".concat(prefixCls,"-with-text"),hasChildren),"".concat(prefixCls,"-with-text").concat(orientationPrefix),hasChildren),"".concat(prefixCls,"-dashed"),!!dashed),"".concat(prefixCls,"-plain"),!!plain),"".concat(prefixCls,"-rtl"),"rtl"===direction),"".concat(prefixCls,"-no-default-orientation-margin-left"),hasCustomMarginLeft),"".concat(prefixCls,"-no-default-orientation-margin-right"),hasCustomMarginRight),className),innerStyle=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.A)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.A)({},hasCustomMarginLeft&&{marginLeft:orientationMargin}),hasCustomMarginRight&&{marginRight:orientationMargin});return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.A)({className:classString},restProps,{role:"separator"}),children&&"vertical"!==type&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"".concat(prefixCls,"-inner-text"),style:innerStyle},children))}},"./components/ui/OfflineBanner/OfflineBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>OfflineBanner});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),divider=__webpack_require__("./node_modules/antd/es/divider/index.js"),formatDistanceToNow=__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNow/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),OfflineBanner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/OfflineBanner/OfflineBanner.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(OfflineBanner_module.A,options);const OfflineBanner_OfflineBanner_module=OfflineBanner_module.A&&OfflineBanner_module.A.locals?OfflineBanner_module.A.locals:void 0;var __jsx=react.createElement,ClockCircleOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(5367),__webpack_require__.e(7652)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ClockCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/ClockCircleOutlined.js"]}}}),OfflineBanner=function OfflineBanner(_ref){var text,streamName=_ref.streamName,customText=_ref.customText,lastLive=_ref.lastLive,notificationsEnabled=_ref.notificationsEnabled,fediverseAccount=_ref.fediverseAccount,_ref$showsHeader=_ref.showsHeader,showsHeader=void 0===_ref$showsHeader||_ref$showsHeader,onNotifyClick=_ref.onNotifyClick,onFollowClick=_ref.onFollowClick,className=_ref.className;return text=customText||(!customText&&notificationsEnabled&&fediverseAccount?__jsx("span",null,"This stream is offline. You can"," ",__jsx("span",{role:"link",tabIndex:0,className:OfflineBanner_OfflineBanner_module.actionLink,onClick:onNotifyClick},"be notified")," ","the next time ",streamName," goes live or"," ",__jsx("span",{role:"link",tabIndex:0,className:OfflineBanner_OfflineBanner_module.actionLink,onClick:onFollowClick},"follow")," ",fediverseAccount," on the Fediverse."):!customText&&notificationsEnabled?__jsx("span",null,"This stream is offline."," ",__jsx("span",{role:"link",tabIndex:0,className:OfflineBanner_OfflineBanner_module.actionLink,onClick:onNotifyClick},"Be notified")," ","the next time ",streamName," goes live."):!customText&&fediverseAccount?__jsx("span",null,"This stream is offline."," ",__jsx("span",{role:"link",tabIndex:0,className:OfflineBanner_OfflineBanner_module.actionLink,onClick:onFollowClick},"Follow")," ",fediverseAccount," on the Fediverse to see the next time ",streamName," goes live."):"This stream is offline. Check back soon!"),__jsx("div",{id:"offline-banner",className:classnames_default()(OfflineBanner_OfflineBanner_module.outerContainer,className)},__jsx("div",{className:OfflineBanner_OfflineBanner_module.innerContainer},showsHeader&&__jsx(react.Fragment,null,__jsx("div",{className:OfflineBanner_OfflineBanner_module.header},streamName),__jsx(divider.A,{className:OfflineBanner_OfflineBanner_module.separator})),customText?__jsx("div",{className:OfflineBanner_OfflineBanner_module.bodyText,dangerouslySetInnerHTML:{__html:text}}):__jsx("div",{className:OfflineBanner_OfflineBanner_module.bodyText},text),lastLive&&__jsx("div",{className:OfflineBanner_OfflineBanner_module.lastLiveDate},__jsx(ClockCircleOutlined,{className:OfflineBanner_OfflineBanner_module.clockIcon}),"Last live ".concat((0,formatDistanceToNow.A)(new Date(lastLive))," ago."))))};OfflineBanner.displayName="OfflineBanner";try{OfflineBanner.displayName="OfflineBanner",OfflineBanner.__docgenInfo={description:"",displayName:"OfflineBanner",props:{streamName:{defaultValue:null,description:"",name:"streamName",required:!0,type:{name:"string"}},customText:{defaultValue:null,description:"",name:"customText",required:!1,type:{name:"string"}},lastLive:{defaultValue:null,description:"",name:"lastLive",required:!1,type:{name:"Date"}},notificationsEnabled:{defaultValue:null,description:"",name:"notificationsEnabled",required:!0,type:{name:"boolean"}},fediverseAccount:{defaultValue:null,description:"",name:"fediverseAccount",required:!1,type:{name:"string"}},showsHeader:{defaultValue:{value:"true"},description:"",name:"showsHeader",required:!1,type:{name:"boolean"}},onNotifyClick:{defaultValue:null,description:"",name:"onNotifyClick",required:!1,type:{name:"() => void"}},onFollowClick:{defaultValue:null,description:"",name:"onFollowClick",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/OfflineBanner/OfflineBanner.tsx#OfflineBanner"]={docgenInfo:OfflineBanner.__docgenInfo,name:"OfflineBanner",path:"components/ui/OfflineBanner/OfflineBanner.tsx#OfflineBanner"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/OfflineBanner/OfflineBanner.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".xJHRfKEAOzDGIUZonnuO{display:flex;justify-content:center;align-items:center}.gP0chvFO7LLedi7UfzSi{width:clamp(0px,100%,600px);display:flex;flex-direction:column;margin:5vh auto;padding:2.4em}@media only screen and (width <= 768px){.gP0chvFO7LLedi7UfzSi{font-size:1.2rem;padding:1em;margin:1rem .2rem}}.Fp1Y5YNMq4iQoEAMVpor{line-height:2rem;font-size:1.2rem}.ciIOBZG1y1hZXL1jkxoc{margin-top:15px;margin-bottom:15px}.NuoYdc6BVFfqG134_IJu{margin-top:2rem;font-size:.8rem;opacity:.7;font-family:var(--theme-text-body-font-family);font-weight:300}.NuoYdc6BVFfqG134_IJu .H0ge5kjEaOZp9tS_DThe{margin-right:6px}.giGNelb9IGP_7djJmSya{font-family:var(--theme-text-display-font-family);font-weight:600;font-size:1.4rem}.CJWUTyg0FGXLfJlPGnrM{margin-top:15px}.eB5lScNdvavfktvDsY_p{color:var(--theme-color-action);text-decoration:underline;cursor:pointer}.eB5lScNdvavfktvDsY_p:hover{color:var(--color-owncast-palette-7)}","",{version:3,sources:["webpack://./components/ui/OfflineBanner/OfflineBanner.module.scss","webpack://./styles/mixins.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,sBAAA,CACA,kBAAA,CAGF,sBACE,2BAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CACA,aAAA,CCEE,wCDPJ,sBAQI,gBAAA,CACA,WAAA,CACA,iBAAA,CAAA,CAIJ,sBACE,gBAAA,CACA,gBAAA,CAGF,sBACE,eAAA,CACA,kBAAA,CAGF,sBACE,eAAA,CACA,eAAA,CACA,UAAA,CACA,8CAAA,CACA,eAAA,CAEA,4CACE,gBAAA,CAIJ,sBACE,iDAAA,CACA,eAAA,CACA,gBAAA,CAGF,sBACE,eAAA,CAGF,sBACE,+BAAA,CACA,yBAAA,CACA,cAAA,CAEA,4BACE,oCAAA",sourcesContent:["@import '../../../styles/mixins';\n\n.outerContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.innerContainer {\n  width: clamp(00px, 100%, 600px);\n  display: flex;\n  flex-direction: column;\n  margin: 5vh auto;\n  padding: 2.4em;\n\n  @include screen(tablet) {\n    font-size: 1.2rem;\n    padding: 1em;\n    margin: 1rem 0.2rem;\n  }\n}\n\n.bodyText {\n  line-height: 2rem;\n  font-size: 1.2rem;\n}\n\n.separator {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.lastLiveDate {\n  margin-top: 2rem;\n  font-size: 0.8rem;\n  opacity: 0.7;\n  font-family: var(--theme-text-body-font-family);\n  font-weight: 300;\n\n  .clockIcon {\n    margin-right: 6px;\n  }\n}\n\n.header {\n  font-family: var(--theme-text-display-font-family);\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n\n.footer {\n  margin-top: 15px;\n}\n\n.actionLink {\n  color: var(--theme-color-action);\n  text-decoration: underline;\n  cursor: pointer;\n\n  &:hover {\n    color: var(--color-owncast-palette-7);\n  }\n}\n","@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin screen($breakpoint) { \n    @if $breakpoint == desktop {    \n    @media only screen and (width >= 768px) {\n      @content;\n    }\n  }\n\n  // tablet will also apply to mobile as there is no cut-off for min-width, however changing this now could break CSS all over the site.\n  @if $breakpoint == tablet {\n    @media only screen and (width <= 768px) {\n      @content;\n    }\n  }\n\n  @if $breakpoint == mobile {\n    @media only screen and (width <= 481px) {\n      @content;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={outerContainer:"xJHRfKEAOzDGIUZonnuO",innerContainer:"gP0chvFO7LLedi7UfzSi",bodyText:"Fp1Y5YNMq4iQoEAMVpor",separator:"ciIOBZG1y1hZXL1jkxoc",lastLiveDate:"NuoYdc6BVFfqG134_IJu",clockIcon:"H0ge5kjEaOZp9tS_DThe",header:"giGNelb9IGP_7djJmSya",footer:"CJWUTyg0FGXLfJlPGnrM",actionLink:"eB5lScNdvavfktvDsY_p"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{noSSR:function(){return noSSR},default:function(){return dynamic}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_loadablesharedruntime=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js"))),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>(0,_jsxruntime.jsx)(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);