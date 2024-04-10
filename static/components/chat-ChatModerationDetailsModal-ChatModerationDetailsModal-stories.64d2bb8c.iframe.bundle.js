"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[5581],{"./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Chat/Moderation modal",component:_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_2__.q,parameters:{fetchMock:{mocks:[{matcher:{name:"response",url:"glob:/api/moderation/chat/user/*"},response:{status:200,body:{user:{id:"hjFPU967R",displayName:"focused-snyder",displayColor:2,createdAt:"2022-07-12T13:08:31.406505322-07:00",previousNames:["focused-snyder"],scopes:["MODERATOR"],isBot:!1,authenticated:!1},connectedClients:[{messageCount:3,userAgent:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",connectedAt:"2022-07-20T16:45:07.796685618-07:00",geo:"N/A"}],messages:[{id:"bQp8UJR4R",timestamp:"2022-07-20T16:53:41.938083228-07:00",user:null,body:"test message 3"},{id:"ubK88Jg4R",timestamp:"2022-07-20T16:53:39.675531279-07:00",user:null,body:"test message 2"},{id:"20v8UJRVR",timestamp:"2022-07-20T16:53:37.551084121-07:00",user:null,body:"test message 1"}]}}}]},docs:{description:{component:"This should be a modal that gives the moderator more details about the user such as:\n- When the user was created\n- Other names they've used\n- If they're authenticated, and using what method (IndieAuth, FediAuth)\n"}}}};var Template=function Template(){return __jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.bi,null,__jsx(_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_2__.q,{userId:"testuser123",accessToken:"fakeaccesstoken4839"}))};Template.displayName="Template";var Example={render:Template};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ChatModerationDetailsModal});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),tag=__webpack_require__("./node_modules/antd/es/tag/index.js"),table=__webpack_require__("./node_modules/antd/es/table/index.js"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),moderation_service=__webpack_require__("./services/moderation-service.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ChatModerationDetailsModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ChatModerationDetailsModal_module.Ay,options);const ChatModerationDetailsModal_ChatModerationDetailsModal_module=ChatModerationDetailsModal_module.Ay&&ChatModerationDetailsModal_module.Ay.locals?ChatModerationDetailsModal_module.Ay.locals:void 0;var utils_format=__webpack_require__("./utils/format.ts"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Panel=collapse.A.Panel,DeleteOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(8863)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/DeleteOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/DeleteOutlined.js"]}}}),removeMessage=function(){var _ref=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(messageId,accessToken){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:try{moderation_service.A.removeMessage(messageId,accessToken)}catch(e){console.error(e)}case 1:case"end":return _context.stop()}}),_callee)})));return function removeMessage(_x,_x2){return _ref.apply(this,arguments)}}(),ValueRow=function ValueRow(_ref2){var label=_ref2.label,value=_ref2.value;return __jsx(row.A,{justify:"space-around",align:"middle"},__jsx(col.A,{span:12},label),__jsx(col.A,{span:12},value))};ValueRow.displayName="ValueRow";var ConnectedClient=function ConnectedClient(_ref3){var client=_ref3.client,messageCount=client.messageCount,connectedAt=client.connectedAt,geo=client.geo,connectedAtDate=(0,format.GP)(new Date(connectedAt),"PP pp");return __jsx("div",null,__jsx(ValueRow,{label:"Messages Sent",value:messageCount.toString()}),"N/A"!==geo&&__jsx(ValueRow,{label:"Geo",value:geo}),__jsx(ValueRow,{label:"Connected At",value:connectedAtDate}))};ConnectedClient.displayName="ConnectedClient";var UserColorBlock=function UserColorBlock(_ref4){var color=_ref4.color,bg="var(--theme-color-users-".concat(color,")");return __jsx("div",{className:ChatModerationDetailsModal_ChatModerationDetailsModal_module.colorBlock,style:{backgroundColor:bg}},"Color ",color)};UserColorBlock.displayName="UserColorBlock";var ChatModerationDetailsModal=function ChatModerationDetailsModal(_ref5){var userId=_ref5.userId,accessToken=_ref5.accessToken,_useState=(0,react.useState)(null),userDetails=_useState[0],setUserDetails=_useState[1],_useState2=(0,react.useState)(!0),loading=_useState2[0],setLoading=_useState2[1],getDetails=function(){var _ref6=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(){var response;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,fetch("/api/moderation/chat/user/".concat(userId,"?accessToken=").concat(accessToken));case 3:return _context2.next=5,_context2.sent.json();case 5:response=_context2.sent,setUserDetails(response),setLoading(!1),_context2.next=13;break;case 10:_context2.prev=10,_context2.t0=_context2.catch(0),console.error(_context2.t0);case 13:case"end":return _context2.stop()}}),_callee2,null,[[0,10]])})));return function getDetails(){return _ref6.apply(this,arguments)}}();if((0,react.useEffect)((function(){getDetails()}),[]),!userDetails)return null;var user=userDetails.user,connectedClients=userDetails.connectedClients,messages=userDetails.messages,displayColor=user.displayColor,createdAt=user.createdAt,previousNames=user.previousNames,scopes=user.scopes,isBot=user.isBot,authenticated=user.authenticated,totalMessagesSent=connectedClients.reduce((function(acc,client){return acc+client.messageCount}),0),createdAtDate=(0,format.GP)(new Date(createdAt),"PP pp"),chatMessageColumns=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:function render(timestamp){return(0,format.GP)(new Date(timestamp),"PP pp")}},{title:"Delete",key:"delete",render:function render(_text,record){return __jsx(es_button.A,{type:"primary",ghost:!0,icon:__jsx(DeleteOutlined,null),onClick:function onClick(){return removeMessage(record.id,accessToken)}})}}];return __jsx(react_error_boundary_esm.tH,{fallbackRender:function fallbackRender(_ref7){var error=_ref7.error,resetErrorBoundary=_ref7.resetErrorBoundary;return __jsx(ComponentError.O,{componentName:"ChatModerationDetailsModal",message:error.message,retryFunction:resetErrorBoundary})}},__jsx(spin.A,{spinning:loading},__jsx(UserColorBlock,{color:displayColor}),null==scopes?void 0:scopes.map((function(scope){return __jsx(tag.A,{key:scope},scope)})),authenticated&&__jsx(tag.A,null,"Authenticated"),isBot&&__jsx(tag.A,null,"Bot"),__jsx(ValueRow,{label:"Messages Sent Across Clients",value:totalMessagesSent.toString()}),__jsx(ValueRow,{label:"User Created",value:createdAtDate}),__jsx(ValueRow,{label:"Known As",value:previousNames.join(",")}),__jsx(collapse.A,{accordion:!0},__jsx(Panel,{header:"Currently Connected Clients",key:"connected-clients"},__jsx(collapse.A,{accordion:!0},connectedClients.map((function(client){return __jsx(Panel,{header:(0,utils_format.Ld)(client.userAgent),key:client.id},__jsx(ConnectedClient,{client}))})))),__jsx(collapse.A,{accordion:!0},__jsx(Panel,{header:"Recent Chat Messages",key:"chat-messages"},__jsx(table.A,{size:"small",pagination:null,columns:chatMessageColumns,dataSource:messages,rowKey:"id"}))))))};ChatModerationDetailsModal.displayName="ChatModerationDetailsModal";try{ChatModerationDetailsModal.displayName="ChatModerationDetailsModal",ChatModerationDetailsModal.__docgenInfo={description:"",displayName:"ChatModerationDetailsModal",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"]={docgenInfo:ChatModerationDetailsModal.__docgenInfo,name:"ChatModerationDetailsModal",path:"components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./services/moderation-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)((function ChatModerationService(){(0,_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,ChatModerationService)}),null,[{key:"removeMessage",value:(_removeMessage=(0,_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.A)(_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(id,accessToken){var url,hideMessageUrl,options;return _tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return(url=new URL("/api/chat/messagevisibility",window.location.toString())).searchParams.append("accessToken",accessToken),hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[id]})},_context.next=6,fetch(hideMessageUrl,options);case 6:case"end":return _context.stop()}}),_callee)}))),function removeMessage(_x,_x2){return _removeMessage.apply(this,arguments)})},{key:"banUser",value:(_banUser=(0,_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.A)(_tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(id,accessToken){var url,hideMessageUrl,options;return _tmp_tmp_aYppKjLq9m_owncast_web_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return(url=new URL("/api/chat/users/setenabled",window.location.toString())).searchParams.append("accessToken",accessToken),hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:id})},_context2.next=6,fetch(hideMessageUrl,options);case 6:case"end":return _context2.stop()}}),_callee2)}))),function banUser(_x3,_x4){return _banUser.apply(this,arguments)})}]);var _banUser,_removeMessage}()},"./utils/format.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ld:()=>formatUAstring,RW:()=>parseSecondsToDurationString});var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js"),ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);function padLeft(text,pad,size){return String(pad.repeat(size)+text).slice(-size)}function parseSecondsToDurationString(){var seconds=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,finiteSeconds=Number.isFinite(+seconds)?Math.abs(seconds):0,days=Math.floor(finiteSeconds/86400),daysString=days>0?"".concat(days," day").concat(days>1?"s":""," "):"",hours=Math.floor(finiteSeconds/3600%24),hoursString=hours||days?padLeft("".concat(hours,":"),"0",3):"",mins=Math.floor(finiteSeconds/60%60),minString=padLeft("".concat(mins,":"),"0",3),secs=Math.floor(finiteSeconds%60);return daysString+hoursString+minString+padLeft("".concat(secs),"0",2)}function formatUAstring(uaString){var parser=ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default()(uaString),device=parser.device,os=parser.os,browser=parser.browser,browserVersion=browser.major,name=browser.name,osVersion=os.version,osName=os.name,model=device.model,type=device.type;if("libmpv"===uaString)return"mpv media player";if(!name||!browserVersion||!osName)return uaString;var deviceString=model||type?" (".concat(model||type,")"):"";return"".concat(name," ").concat(browserVersion," on ").concat(osName," ").concat(osVersion,"\n  ").concat(deviceString)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LLkMqCQ151QLthz6Jrm9{padding:10px}.tLPeuqwkaXHP5VCqtGlt{margin:10px;padding:15px;border:1px solid #ccc;border-radius:5px}.Ptcgm8bVQJo5oZiQCGGK{display:inline-block;width:60px;height:20px;border:1px solid #000;text-align:center;font-size:.8rem}.wwiXkMXh0rQl0JFi8jFw{font-weight:bold;padding-right:10px;font-size:1.2rem}","",{version:3,sources:["webpack://./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAGF,sBACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAGF,sBACE,oBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CAGF,sBACE,gBAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".modalContainer {\n  padding: 10px;\n}\n\n.chatHistory {\n  margin: 10px;\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.colorBlock {\n  display: inline-block;\n  width: 60px;\n  height: 20px;\n  border: 1px solid #000;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.displayName {\n  font-weight: bold;\n  padding-right: 10px;\n  font-size: 1.2rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);