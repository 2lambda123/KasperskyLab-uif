"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[9212],{"./.storybook/StoryComponents.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StoryColumn:()=>StoryColumn,StoryLayout:()=>StoryLayout,StoryWrapper:()=>StoryWrapper,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_design_system_global_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./design-system/global-style/index.ts"),_design_system_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./design-system/theme/index.ts"),_sb_decorators_withThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/decorators/withThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var StoryLayout=function StoryLayout(props){var theme=(0,_design_system_theme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_design_system_global_style__WEBPACK_IMPORTED_MODULE_1__.ZL,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sb_decorators_withThemeProvider__WEBPACK_IMPORTED_MODULE_4__.qp,_objectSpread({theme:props.theme||theme.key},props))]})},StoryWrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({displayName:"StoryComponents__StoryWrapper",componentId:"sc-14o95y5-0"})(["display:flex;gap:10px;flex-wrap:wrap;"]),StoryColumn=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({displayName:"StoryComponents__StoryColumn",componentId:"sc-14o95y5-1"})(["display:flex;flex-direction:column;gap:10px;align-items:flex-start;"]),__namedExportsOrder=["StoryLayout","StoryWrapper","StoryColumn"];try{StoryLayout.displayName="StoryLayout",StoryLayout.__docgenInfo={description:"",displayName:"StoryLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"light"'},{value:'"dark"'}]}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryLayout"]={docgenInfo:StoryLayout.__docgenInfo,name:"StoryLayout",path:".storybook/StoryComponents.tsx#StoryLayout"})}catch(__react_docgen_typescript_loader_error){}try{StoryWrapper.displayName="StoryWrapper",StoryWrapper.__docgenInfo={description:"",displayName:"StoryWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryWrapper"]={docgenInfo:StoryWrapper.__docgenInfo,name:"StoryWrapper",path:".storybook/StoryComponents.tsx#StoryWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StoryColumn.displayName="StoryColumn",StoryColumn.__docgenInfo={description:"",displayName:"StoryColumn",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/StoryComponents.tsx#StoryColumn"]={docgenInfo:StoryColumn.__docgenInfo,name:"StoryColumn",path:".storybook/StoryComponents.tsx#StoryColumn"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/expandable-text/ExpandableText.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WithLink=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WithLink$parameters,_WithLink$parameters2,_WithLink$parameters3,_StoryComponents=__webpack_require__("./.storybook/StoryComponents.tsx"),_badges=__webpack_require__("./.storybook/badges.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_ExpandableText=__webpack_require__("./src/expandable-text/ExpandableText.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/expandable-text/__meta__/meta.json")),_link=__webpack_require__("./src/link/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const defaultText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.",meta={title:"Atoms/ExpandableText",component:_ExpandableText.ExpandableText,argTypes:{...(0,_storybookHelpers.sbHideControls)(["theme"])},args:{children:defaultText,"data-testid":"expandable-text-kl-id",className:"expandable-text"},decorators:[(Story,context)=>(0,_jsxRuntime.jsx)(_StoryComponents.StoryColumn,{style:{minWidth:"100px",maxWidth:"400px"},children:(0,_jsxRuntime.jsx)(Story,{...context})})],parameters:{storySource:{source:"import React from 'react';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { StoryColumn } from '@sb/StoryComponents';\nimport { badges } from '@sb/badges';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { ExpandableText } from './ExpandableText';\nimport { ExpandableTextProps } from '@src/expandable-text/types';\nimport MetaData from './__meta__/meta.json';\nimport { Link } from '@src/link';\nconst defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.';\nconst meta: Meta<ExpandableTextProps> = {\n  title: 'Atoms/ExpandableText',\n  component: ExpandableText,\n  argTypes: {\n    ...sbHideControls(['theme'])\n  },\n  args: {\n    children: defaultText,\n    'data-testid': 'expandable-text-kl-id',\n    className: 'expandable-text'\n  },\n  decorators: [(Story, context) => <StoryColumn style={{\n    minWidth: '100px',\n    maxWidth: '400px'\n  }}>\n        <Story {...context} />\n      </StoryColumn>],\n  parameters: {\n    badges: [badges.dev],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\ntype Story = StoryObj<ExpandableTextProps>;\nexport const Basic: Story = {};\nexport const WithLink: Story = {\n  args: {\n    children: <Link decoration=\"icon\" href=\"https://www.kaspersky.com\" target=\"_blank\">{defaultText}</Link>\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWithLink.parameters = {\n  ...WithLink.parameters,\n  docs: {\n    ...WithLink.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    children: <Link decoration=\\\"icon\\\" href=\\\"https://www.kaspersky.com\\\" target=\\\"_blank\\\">{defaultText}</Link>\\n  }\\n}\",\n      ...WithLink.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:38},endLoc:{col:30,line:38},startBody:{col:28,line:38},endBody:{col:30,line:38}},"with-link":{startLoc:{col:31,line:39},endLoc:{col:1,line:43},startBody:{col:31,line:39},endBody:{col:1,line:43}}}},badges:[_badges.badges.dev],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const Basic=exports.Basic={},WithLink=exports.WithLink={args:{children:(0,_jsxRuntime.jsx)(_link.Link,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank",children:defaultText})}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},WithLink.parameters={...WithLink.parameters,docs:{...null===(_WithLink$parameters=WithLink.parameters)||void 0===_WithLink$parameters?void 0:_WithLink$parameters.docs,source:{originalSource:'{\n  args: {\n    children: <Link decoration="icon" href="https://www.kaspersky.com" target="_blank">{defaultText}</Link>\n  }\n}',...null===(_WithLink$parameters2=WithLink.parameters)||void 0===_WithLink$parameters2||null===(_WithLink$parameters3=_WithLink$parameters2.docs)||void 0===_WithLink$parameters3?void 0:_WithLink$parameters3.source}}};exports.__namedExportsOrder=["Basic","WithLink"]},"./src/expandable-text/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":false,"useThemedHook":true,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"ExpandableText","description":"","usage":"","designLink":""}')}}]);