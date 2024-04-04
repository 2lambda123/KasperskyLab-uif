"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[3408],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/locale/Locale.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_Locale=__webpack_require__("./src/locale/Locale.tsx"),_context=__webpack_require__("./design-system/context/index.ts"),_typography=__webpack_require__("./src/typography/index.ts"),_badges=__webpack_require__("./.storybook/badges.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/locale/__meta__/meta.json")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const meta={title:"Atoms/Locale",component:_Locale.Locale,parameters:{storySource:{source:"import React from 'react';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { Locale } from './Locale';\nimport { ConfigProvider } from '@design-system/context';\nimport { Text } from '../typography';\nimport { badges } from '@sb/badges';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport MetaData from './__meta__/meta.json';\nimport { LocaleProps } from './types';\nconst meta: Meta<LocaleProps> = {\n  title: 'Atoms/Locale',\n  component: Locale,\n  parameters: {\n    badges: [badges.dev],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\nexport const Basic: StoryObj<LocaleProps> = {\n  render: (args: LocaleProps) => <ConfigProvider>\n      <Text>\n        <Locale {...args} />\n      </Text>\n    </ConfigProvider>,\n  args: {\n    localizationKey: 'severity.high'\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: LocaleProps) => <ConfigProvider>\\n      <Text>\\n        <Locale {...args} />\\n      </Text>\\n    </ConfigProvider>,\\n  args: {\\n    localizationKey: 'severity.high'\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:44,line:21},endLoc:{col:1,line:30},startBody:{col:44,line:21},endBody:{col:1,line:30}}}},badges:[_badges.badges.dev],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const Basic=exports.Basic={render:args=>(0,_jsxRuntime.jsx)(_context.ConfigProvider,{children:(0,_jsxRuntime.jsx)(_typography.Text,{children:(0,_jsxRuntime.jsx)(_Locale.Locale,{...args})})}),args:{localizationKey:"severity.high"}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: (args: LocaleProps) => <ConfigProvider>\n      <Text>\n        <Locale {...args} />\n      </Text>\n    </ConfigProvider>,\n  args: {\n    localizationKey: 'severity.high'\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}};exports.__namedExportsOrder=["Basic"]},"./src/locale/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":false,"useThemedHook":true,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"Locale","description":"","usage":"","designLink":""}')}}]);