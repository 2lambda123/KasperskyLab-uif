"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[7461],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/space/Space.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_badges=__webpack_require__("./.storybook/badges.ts"),_Space=__webpack_require__("./src/space/Space.tsx"),_typography=__webpack_require__("./src/typography/index.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/space/meta.json")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const meta={title:"Atoms/Space",component:_Space.Space,argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"]},size:{controls:{type:"number"}},align:{control:{type:"select"},options:["center","start","end","self-start","self-end","flex-start","flex-end"]},wrap:{control:{type:"select"},options:["nowrap","wrap","wrap-reverse"]}},args:{direction:"horizontal",size:8,align:"center",width:"300px"},parameters:{storySource:{source:"import React from 'react';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport { Space, SpaceProps } from './Space';\nimport { Text } from '@src/typography';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport MetaData from './meta.json';\nconst meta: Meta<SpaceProps> = {\n  title: 'Atoms/Space',\n  component: Space,\n  argTypes: {\n    direction: {\n      control: {\n        type: 'select'\n      },\n      options: ['horizontal', 'vertical']\n    },\n    size: {\n      controls: {\n        type: 'number'\n      }\n    },\n    align: {\n      control: {\n        type: 'select'\n      },\n      options: ['center', 'start', 'end', 'self-start', 'self-end', 'flex-start', 'flex-end']\n    },\n    wrap: {\n      control: {\n        type: 'select'\n      },\n      options: ['nowrap', 'wrap', 'wrap-reverse']\n    }\n  },\n  args: {\n    direction: 'horizontal',\n    size: 8,\n    align: 'center',\n    width: '300px'\n  },\n  parameters: {\n    badges: [badges.beta, badges.dev],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\nexport const Basic: StoryObj<SpaceProps> = {\n  render: (args: SpaceProps) => <Space {...args}>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n      </Space>\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: SpaceProps) => <Space {...args}>\\n        <Text>kek</Text>\\n        <Text>foo</Text>\\n        <Text>bar</Text>\\n        <Text>kek</Text>\\n        <Text>foo</Text>\\n        <Text>bar</Text>\\n        <Text>kek</Text>\\n        <Text>foo</Text>\\n        <Text>bar</Text>\\n        <Text>kek</Text>\\n        <Text>foo</Text>\\n        <Text>bar</Text>\\n      </Space>\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:43,line:50},endLoc:{col:1,line:65},startBody:{col:43,line:50},endBody:{col:1,line:65}}}},badges:[_badges.badges.beta,_badges.badges.dev],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const Basic=exports.Basic={render:args=>(0,_jsxRuntime.jsxs)(_Space.Space,{...args,children:[(0,_jsxRuntime.jsx)(_typography.Text,{children:"kek"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"foo"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"bar"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"kek"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"foo"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"bar"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"kek"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"foo"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"bar"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"kek"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"foo"}),(0,_jsxRuntime.jsx)(_typography.Text,{children:"bar"})]})};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  render: (args: SpaceProps) => <Space {...args}>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n        <Text>kek</Text>\n        <Text>foo</Text>\n        <Text>bar</Text>\n      </Space>\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}};exports.__namedExportsOrder=["Basic"]},"./src/space/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":false,"useThemedHook":false,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"Space","description":"Компонент для отображения массива элементов с определенным отступом в определенном направлении.","usage":"Базовый пример использования компонента. Пропы передаются в виде React.Children и пропов direction и size, определяющих направление и размер отсутпа между элементами соответственно."}')}}]);