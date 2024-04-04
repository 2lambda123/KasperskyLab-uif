"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[7160],{"./src/table/stories/CasbTable/CasbTable.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.CasbTable=void 0;(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _CasbTable$parameters,_CasbTable$parameters2,_CasbTable$parameters3,_CasbTable=__webpack_require__("./src/table/stories/CasbTable/CasbTable.tsx"),_model=__webpack_require__("./src/table/stories/CasbTable/model.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={parameters:{storySource:{source:"import React from 'react';\nimport { Story } from '@storybook/react';\nimport { CasbTable as Component } from './CasbTable';\nimport { model } from './model';\nexport default {\n  title: 'Organisms/Table',\n  component: Component,\n  argTypes: {\n    model: {\n      type: 'object'\n    }\n  },\n  args: {\n    model\n  }\n};\nexport const CasbTable: Story<typeof Component> = args => {\n  return <Component {...args} />;\n};\nCasbTable.parameters = {\n  ...CasbTable.parameters,\n  docs: {\n    ...CasbTable.parameters?.docs,\n    source: {\n      originalSource: \"args => {\\n  return <Component {...args} />;\\n}\",\n      ...CasbTable.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"casb-table":{startLoc:{col:50,line:17},endLoc:{col:1,line:19},startBody:{col:50,line:17},endBody:{col:1,line:19}}}}},title:"Organisms/Table",component:_CasbTable.CasbTable,argTypes:{model:{type:"object"}},args:{model:_model.model}};const CasbTable=args=>(0,_jsxRuntime.jsx)(_CasbTable.CasbTable,{...args});exports.CasbTable=CasbTable,CasbTable.displayName="CasbTable",CasbTable.parameters={...CasbTable.parameters,docs:{...null===(_CasbTable$parameters=CasbTable.parameters)||void 0===_CasbTable$parameters?void 0:_CasbTable$parameters.docs,source:{originalSource:"args => {\n  return <Component {...args} />;\n}",...null===(_CasbTable$parameters2=CasbTable.parameters)||void 0===_CasbTable$parameters2||null===(_CasbTable$parameters3=_CasbTable$parameters2.docs)||void 0===_CasbTable$parameters3?void 0:_CasbTable$parameters3.source}}};exports.__namedExportsOrder=["CasbTable"]},"./src/table/stories/CasbTable/CasbTable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CasbTable=void 0;(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _table=__webpack_require__("./src/table/index.ts"),_components=__webpack_require__("./src/table/stories/CasbTable/components/index.ts"),_columns=__webpack_require__("./src/table/stories/CasbTable/columns.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CasbTable=_ref=>{let{model}=_ref;return(0,_jsxRuntime.jsx)(_table.Table,{pagination:!1,expandIcon:_components.ExpandIcon,columns:_columns.columns,dataSource:model})};exports.CasbTable=CasbTable,CasbTable.displayName="CasbTable";try{CasbTable.displayName="CasbTable",CasbTable.__docgenInfo={description:"",displayName:"CasbTable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/CasbTable.tsx#CasbTable"]={docgenInfo:CasbTable.__docgenInfo,name:"CasbTable",path:"src/table/stories/CasbTable/CasbTable.tsx#CasbTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/stories/CasbTable/columns.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.columns=void 0;var _renderCell=__webpack_require__("./src/table/stories/CasbTable/renderCell.tsx");exports.columns=[{title:"Service name and risk level",dataIndex:"leadColumn",colSpan:2,align:"left",width:93,key:"lead",render:_renderCell.renderCell},{colSpan:0,align:"left",dataIndex:"serviceName",key:"name",width:"auto",render:_renderCell.renderCell},{title:"Access",align:"left",dataIndex:"access",key:"access",render:_renderCell.renderCell}]},"./src/table/stories/CasbTable/components/AccessSelect.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccessSelect=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_select=__webpack_require__("./src/select/index.ts"),_icon=__webpack_require__("./src/icon/index.ts"),_constants=__webpack_require__("./src/table/stories/CasbTable/constants.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const IconNameByAccess={[_constants.AccessCode.allow]:"StatusOK",[_constants.AccessCode.block]:"StatusError"},IconColorByAccess={[_constants.AccessCode.allow]:"green",[_constants.AccessCode.block]:"grey"},Wrapper=_styledComponents.default.div.withConfig({displayName:"AccessSelect__Wrapper",componentId:"sc-bzfxdt-0"})(["width:180px;"]),IconWrapper=_styledComponents.default.span.withConfig({displayName:"AccessSelect__IconWrapper",componentId:"sc-bzfxdt-1"})((_ref=>{let{accessCode}=_ref;return`\n  display: inline-flex\n  margin-right: 10px\n  color: ${IconColorByAccess[accessCode]}\n`})),AccessSelect=_ref2=>{let{options,value=_constants.AccessCode.block}=_ref2;return(0,_jsxRuntime.jsx)(Wrapper,{children:(0,_jsxRuntime.jsx)(_select.Select,{value,isItemSelectedIconVisible:!1,children:options.map((option=>(0,_jsxRuntime.jsxs)(_select.Select.Option,{value:option.value,children:[(0,_jsxRuntime.jsx)(IconWrapper,{accessCode:option.value,children:(0,_jsxRuntime.jsx)(_icon.Icon,{size:"small",name:IconNameByAccess[option.value],color:"inherit"})}),(0,_jsxRuntime.jsx)("span",{children:option.label})]},option.value)))})})};exports.AccessSelect=AccessSelect,AccessSelect.displayName="AccessSelect";try{AccessSelect.displayName="AccessSelect",AccessSelect.__docgenInfo={description:"",displayName:"AccessSelect",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption[]"}},value:{defaultValue:{value:"AccessCode.block"},description:"",name:"value",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/components/AccessSelect.tsx#AccessSelect"]={docgenInfo:AccessSelect.__docgenInfo,name:"AccessSelect",path:"src/table/stories/CasbTable/components/AccessSelect.tsx#AccessSelect"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/stories/CasbTable/components/ExpandIcon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExpandIcon=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_icon=__webpack_require__("./src/icon/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const Button=_styledComponents.default.button.withConfig({displayName:"ExpandIcon__Button",componentId:"sc-1xo2tz4-0"})((_ref=>{let{expanded}=_ref;return`\n  outline: 'none';\n  rotate: ${expanded?"0deg":"-90deg"};\n  transition: rotate .2s;\n  border: none;\n  box-shadow: none;\n  background: transparent;\n`}));exports.ExpandIcon=_ref2=>{let{expanded,onExpand,record}=_ref2;return record.children?(0,_jsxRuntime.jsx)(Button,{type:"button",expanded,onClick:e=>onExpand(record,e),children:(0,_jsxRuntime.jsx)(_icon.Icon,{name:"Down",size:"extraSmall"})}):null}},"./src/table/stories/CasbTable/components/GroupAccess.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GroupAccess=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_button=__webpack_require__("./src/button/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const Wrapper=_styledComponents.default.div.withConfig({displayName:"GroupAccess__Wrapper",componentId:"sc-4ve01-0"})(["display:flex;justify-content:space-between;align-items:center;"]),GroupAccess=_ref=>{let{blockedCount,totalCount}=_ref;return(0,_jsxRuntime.jsxs)(Wrapper,{children:[(0,_jsxRuntime.jsxs)("div",{children:["Blocked: ",blockedCount," of ",totalCount]}),(0,_jsxRuntime.jsx)("div",{children:(0,_jsxRuntime.jsx)(_button.Button,{text:"Block entire category",mode:"secondary"})})]})};exports.GroupAccess=GroupAccess,GroupAccess.displayName="GroupAccess";try{GroupAccess.displayName="GroupAccess",GroupAccess.__docgenInfo={description:"",displayName:"GroupAccess",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"ECellType.GROUP_ACCESS"}},blockedCount:{defaultValue:null,description:"",name:"blockedCount",required:!0,type:{name:"number"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/components/GroupAccess.tsx#GroupAccess"]={docgenInfo:GroupAccess.__docgenInfo,name:"GroupAccess",path:"src/table/stories/CasbTable/components/GroupAccess.tsx#GroupAccess"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/stories/CasbTable/components/LoadMore.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadMore=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _button=__webpack_require__("./src/button/index.ts"),_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const Wrapper=_styledComponents.default.div.withConfig({displayName:"LoadMore__Wrapper",componentId:"sc-1u2lol1-0"})(["display:flex;justify-content:center"]),LoadMore=()=>(0,_jsxRuntime.jsx)(Wrapper,{children:(0,_jsxRuntime.jsx)(_button.Button,{text:"Load more"})});exports.LoadMore=LoadMore,LoadMore.displayName="LoadMore";try{LoadMore.displayName="LoadMore",LoadMore.__docgenInfo={description:"",displayName:"LoadMore",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/components/LoadMore.tsx#LoadMore"]={docgenInfo:LoadMore.__docgenInfo,name:"LoadMore",path:"src/table/stories/CasbTable/components/LoadMore.tsx#LoadMore"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/stories/CasbTable/components/RiskLevel.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.RiskLevel=void 0;(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _tag=__webpack_require__("./src/tag/index.ts"),_constants=__webpack_require__("./src/table/stories/CasbTable/constants.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RiskLevelModeByCode={[_constants.ERiskLevelCode.low]:"emerald",[_constants.ERiskLevelCode.medium]:"yellow",[_constants.ERiskLevelCode.high]:"red"},RiskLevelLabelByCode={[_constants.ERiskLevelCode.low]:"Low",[_constants.ERiskLevelCode.medium]:"Medium",[_constants.ERiskLevelCode.high]:"High"},RiskLevel=_ref=>{let{riskLevel}=_ref;const riskLevelLabel=RiskLevelLabelByCode[riskLevel],riskLevelMode=RiskLevelModeByCode[riskLevel];return(0,_jsxRuntime.jsx)(_tag.Tag,{mode:riskLevelMode,outlined:!0,children:riskLevelLabel})};exports.RiskLevel=RiskLevel,RiskLevel.displayName="RiskLevel";try{RiskLevel.displayName="RiskLevel",RiskLevel.__docgenInfo={description:"",displayName:"RiskLevel",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"ECellType.RISK_LEVEL"}},riskLevel:{defaultValue:null,description:"",name:"riskLevel",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/components/RiskLevel.tsx#RiskLevel"]={docgenInfo:RiskLevel.__docgenInfo,name:"RiskLevel",path:"src/table/stories/CasbTable/components/RiskLevel.tsx#RiskLevel"})}catch(__react_docgen_typescript_loader_error){}},"./src/table/stories/CasbTable/components/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"AccessSelect",{enumerable:!0,get:function(){return _AccessSelect.AccessSelect}}),Object.defineProperty(exports,"ExpandIcon",{enumerable:!0,get:function(){return _ExpandIcon.ExpandIcon}}),Object.defineProperty(exports,"GroupAccess",{enumerable:!0,get:function(){return _GroupAccess.GroupAccess}}),Object.defineProperty(exports,"LoadMore",{enumerable:!0,get:function(){return _LoadMore.LoadMore}}),Object.defineProperty(exports,"RiskLevel",{enumerable:!0,get:function(){return _RiskLevel.RiskLevel}});var _GroupAccess=__webpack_require__("./src/table/stories/CasbTable/components/GroupAccess.tsx"),_RiskLevel=__webpack_require__("./src/table/stories/CasbTable/components/RiskLevel.tsx"),_LoadMore=__webpack_require__("./src/table/stories/CasbTable/components/LoadMore.tsx"),_ExpandIcon=__webpack_require__("./src/table/stories/CasbTable/components/ExpandIcon.tsx"),_AccessSelect=__webpack_require__("./src/table/stories/CasbTable/components/AccessSelect.tsx")},"./src/table/stories/CasbTable/constants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectOptions=exports.ERiskLevelCode=exports.ECellType=exports.AccessCode=void 0;let ECellType=exports.ECellType=void 0;!function(ECellType){ECellType.GROUP_NAME="GROUP_NAME",ECellType.GROUP_ACCESS="GROUP_ACCESS",ECellType.RISK_LEVEL="RISK_LEVEL",ECellType.SERVICE_NAME="SERVICE_NAME",ECellType.ACCESS="ACCESS",ECellType.BUTTON="BUTTON"}(ECellType||(exports.ECellType=ECellType={}));let ERiskLevelCode=exports.ERiskLevelCode=void 0;!function(ERiskLevelCode){ERiskLevelCode[ERiskLevelCode.low=0]="low",ERiskLevelCode[ERiskLevelCode.medium=1]="medium",ERiskLevelCode[ERiskLevelCode.high=2]="high"}(ERiskLevelCode||(exports.ERiskLevelCode=ERiskLevelCode={}));let AccessCode=exports.AccessCode=void 0;!function(AccessCode){AccessCode[AccessCode.allow=0]="allow",AccessCode[AccessCode.block=2]="block"}(AccessCode||(exports.AccessCode=AccessCode={}));exports.selectOptions=[{label:"Allowed",value:AccessCode.allow},{label:"Blocked",value:AccessCode.block}]},"./src/table/stories/CasbTable/model.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var _constants=__webpack_require__("./src/table/stories/CasbTable/constants.ts");exports.model=[{leadColumn:{type:_constants.ECellType.GROUP_NAME,name:"Email"},access:{type:_constants.ECellType.GROUP_ACCESS,blockedCount:0,totalCount:384},children:[{leadColumn:{type:_constants.ECellType.RISK_LEVEL,riskLevel:_constants.ERiskLevelCode.medium},serviceName:{type:_constants.ECellType.SERVICE_NAME,serviceName:"1&1 Mail"},access:{type:_constants.ECellType.ACCESS,access:0},type:_constants.ECellType.GROUP_NAME},{leadColumn:{type:_constants.ECellType.RISK_LEVEL,riskLevel:_constants.ERiskLevelCode.low},serviceName:{type:_constants.ECellType.SERVICE_NAME,serviceName:"1&1 Telecom Mail"},access:{type:_constants.ECellType.ACCESS,access:2},type:_constants.ECellType.GROUP_NAME},{leadColumn:{type:_constants.ECellType.RISK_LEVEL,riskLevel:_constants.ERiskLevelCode.low},serviceName:{type:_constants.ECellType.SERVICE_NAME,serviceName:"10 Minute Mail"},access:{type:_constants.ECellType.ACCESS,access:2},type:_constants.ECellType.GROUP_NAME},{leadColumn:{type:_constants.ECellType.BUTTON},type:_constants.ECellType.GROUP_NAME}],key:"email"},{leadColumn:{type:_constants.ECellType.GROUP_NAME,name:"File Sharing"},access:{type:_constants.ECellType.GROUP_ACCESS,blockedCount:0,totalCount:502},children:[{leadColumn:{type:_constants.ECellType.RISK_LEVEL,riskLevel:_constants.ERiskLevelCode.low},serviceName:{type:_constants.ECellType.SERVICE_NAME,serviceName:"File"},access:{type:_constants.ECellType.ACCESS,access:2},type:_constants.ECellType.GROUP_NAME},{leadColumn:{type:_constants.ECellType.BUTTON}}],key:"fileSharing"}]},"./src/table/stories/CasbTable/renderCell.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderCell=void 0;(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _components=__webpack_require__("./src/table/stories/CasbTable/components/index.ts"),_constants=__webpack_require__("./src/table/stories/CasbTable/constants.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");const renderCell=data=>{switch(null==data?void 0:data.type){case _constants.ECellType.GROUP_NAME:return{children:data.name,props:{colSpan:2,align:"left"}};case _constants.ECellType.GROUP_ACCESS:return{children:(0,_jsxRuntime.jsx)(_components.GroupAccess,{...data}),props:{width:"50%"}};case _constants.ECellType.RISK_LEVEL:return{children:(0,_jsxRuntime.jsx)(_components.RiskLevel,{...data}),props:{width:93}};case _constants.ECellType.SERVICE_NAME:return data.serviceName;case _constants.ECellType.ACCESS:return(0,_jsxRuntime.jsx)(_components.AccessSelect,{options:_constants.selectOptions,value:data.access});case _constants.ECellType.BUTTON:return{children:(0,_jsxRuntime.jsx)(_components.LoadMore,{}),props:{colSpan:3}};default:return{props:{colSpan:0}}}};exports.renderCell=renderCell;try{renderCell.displayName="renderCell",renderCell.__docgenInfo={description:"",displayName:"renderCell",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"GROUP_NAME"'},{value:'"GROUP_ACCESS"'},{value:'"RISK_LEVEL"'},{value:'"SERVICE_NAME"'},{value:'"ACCESS"'},{value:'"BUTTON"'}]}},blockedCount:{defaultValue:null,description:"",name:"blockedCount",required:!0,type:{name:"number"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},riskLevel:{defaultValue:null,description:"",name:"riskLevel",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},serviceName:{defaultValue:null,description:"",name:"serviceName",required:!0,type:{name:"string"}},access:{defaultValue:null,description:"",name:"access",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/stories/CasbTable/renderCell.tsx#renderCell"]={docgenInfo:renderCell.__docgenInfo,name:"renderCell",path:"src/table/stories/CasbTable/renderCell.tsx#renderCell"})}catch(__react_docgen_typescript_loader_error){}}}]);