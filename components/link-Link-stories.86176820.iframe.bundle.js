"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[2686],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/link/Link.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.WithIcon=exports.InText=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_WithIcon$parameters,_WithIcon$parameters2,_WithIcon$parameters3,_InText$parameters,_InText$parameters2,_InText$parameters2$d,_badges=__webpack_require__("./.storybook/badges.ts"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=_interopRequireDefault(__webpack_require__("./src/link/meta.json")),_Link=__webpack_require__("./src/link/Link.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const meta={title:"Atoms/Link",component:_Link.Link,argTypes:{title:{control:{type:"text"}},...(0,_storybookHelpers.sbHideControls)(["theme","type"])},args:{disabled:!1,iconPosition:"after",size:"medium",text:"Link",visited:!1,testId:"link-test-id",klId:"link-kl-id"},parameters:{storySource:{source:"import React from 'react';\nimport { Meta, StoryObj } from '@storybook/react';\nimport { badges } from '@sb/badges';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport MetaData from './meta.json';\nimport { Link } from './Link';\nimport { LinkProps } from './types';\nconst meta: Meta<LinkProps> = {\n  title: 'Atoms/Link',\n  component: Link,\n  argTypes: {\n    title: {\n      control: {\n        type: 'text'\n      }\n    },\n    ...sbHideControls(['theme', 'type'])\n  },\n  args: {\n    disabled: false,\n    iconPosition: 'after',\n    size: 'medium',\n    text: 'Link',\n    visited: false,\n    testId: 'link-test-id',\n    klId: 'link-kl-id'\n  },\n  parameters: {\n    badges: [badges.stable, badges.reviewedByDesign],\n    docs: {\n      page: withMeta(MetaData)\n    },\n    design: MetaData.figmaView\n  }\n};\nexport default meta;\ntype Story = StoryObj<LinkProps>;\nexport const Basic: Story = {\n  args: {\n    href: '#',\n    target: '_top'\n  }\n};\nexport const WithIcon: Story = {\n  args: {\n    href: 'https://www.kaspersky.com',\n    target: '_blank',\n    decoration: 'icon'\n  }\n};\nexport const InText: Story = {\n  render: (args: LinkProps) => <div>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry&apos;s standard dummy text ever since the 1500s, <Link {...args} /> when\n      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n      survived not only five centuries, but also the leap into electronic typesetting, remaining\n      essentially unchanged.\n    </div>\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    href: '#',\\n    target: '_top'\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWithIcon.parameters = {\n  ...WithIcon.parameters,\n  docs: {\n    ...WithIcon.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    href: 'https://www.kaspersky.com',\\n    target: '_blank',\\n    decoration: 'icon'\\n  }\\n}\",\n      ...WithIcon.parameters?.docs?.source\n    }\n  }\n};\nInText.parameters = {\n  ...InText.parameters,\n  docs: {\n    ...InText.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: (args: LinkProps) => <div>\\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\\n      been the industry&apos;s standard dummy text ever since the 1500s, <Link {...args} /> when\\n      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\\n      survived not only five centuries, but also the leap into electronic typesetting, remaining\\n      essentially unchanged.\\n    </div>\\n}\",\n      ...InText.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:28,line:39},endLoc:{col:1,line:44},startBody:{col:28,line:39},endBody:{col:1,line:44}},"with-icon":{startLoc:{col:31,line:45},endLoc:{col:1,line:51},startBody:{col:31,line:45},endBody:{col:1,line:51}},"in-text":{startLoc:{col:29,line:52},endLoc:{col:1,line:60},startBody:{col:29,line:52},endBody:{col:1,line:60}}}},badges:[_badges.badges.stable,_badges.badges.reviewedByDesign],docs:{page:(0,_withMeta.withMeta)(_meta.default)},design:_meta.default.figmaView}};exports.default=meta;const Basic=exports.Basic={args:{href:"#",target:"_top"}},WithIcon=exports.WithIcon={args:{href:"https://www.kaspersky.com",target:"_blank",decoration:"icon"}},InText=exports.InText={render:args=>(0,_jsxRuntime.jsxs)("div",{children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",(0,_jsxRuntime.jsx)(_Link.Link,{...args})," when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]})};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  args: {\n    href: '#',\n    target: '_top'\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs,source:{originalSource:"{\n  args: {\n    href: 'https://www.kaspersky.com',\n    target: '_blank',\n    decoration: 'icon'\n  }\n}",...null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters3=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters3?void 0:_WithIcon$parameters3.source}}},InText.parameters={...InText.parameters,docs:{...null===(_InText$parameters=InText.parameters)||void 0===_InText$parameters?void 0:_InText$parameters.docs,source:{originalSource:"{\n  render: (args: LinkProps) => <div>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry&apos;s standard dummy text ever since the 1500s, <Link {...args} /> when\n      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n      survived not only five centuries, but also the leap into electronic typesetting, remaining\n      essentially unchanged.\n    </div>\n}",...null===(_InText$parameters2=InText.parameters)||void 0===_InText$parameters2||null===(_InText$parameters2$d=_InText$parameters2.docs)||void 0===_InText$parameters2$d?void 0:_InText$parameters2$d.source}}};exports.__namedExportsOrder=["Basic","WithIcon","InText"]},"./src/link/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":true,"unitTests":true,"screenshotTests":false,"migration":true,"apiTable":true,"storybook":true,"figmaView":true},"component":"Link","description":"Компонент для отрисовки ссылки. В качестве основы используется HTML элемент Anchor.","usage":"Обозначает возможность перехода на другую страницу.","designLink":"https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/B2B-Kit?node-id=1%3A2273","figmaView":"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7TGvGlgGfTltMG1OBgLq8p%2F00-%255BB2B%255D-Hexa-UI-Kit%3Ftype%3Ddesign%26node-id%3D33293%253A116703%26mode%3Ddev"}')}}]);