"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[1673],{"./helpers/hocs/MetaComponent/MetaDod.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MetaDod=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_types=__webpack_require__("./helpers/hocs/MetaComponent/types.ts"),_tag=__webpack_require__("./src/tag/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const StyledTableContainer=_styledComponents.default.div.withConfig({displayName:"MetaDod__StyledTableContainer",componentId:"sc-1gxe50k-0"})(["&&&&&{width:300px;td,th,tr{background:transparent;border:none;}}"]),MetaDod=_ref=>{let{list}=_ref;const metaDodKeys=(0,_react.useMemo)((()=>Object.keys(_types.metaDod)),[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:`Definition of done ${(new Date).getDate()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`}),(0,_jsxRuntime.jsx)(StyledTableContainer,{children:(0,_jsxRuntime.jsxs)("table",{children:[(0,_jsxRuntime.jsx)("thead",{children:(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Point"})}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)("b",{children:"Status"})})]})}),(0,_jsxRuntime.jsx)("tbody",{children:metaDodKeys.map((key=>(0,_jsxRuntime.jsxs)("tr",{children:[(0,_jsxRuntime.jsx)("td",{children:_types.metaDod[key]}),(0,_jsxRuntime.jsx)("td",{children:(0,_jsxRuntime.jsx)(_tag.Tag,{mode:list[key]?"grass":"red",children:list[key]?"ready":"need"})})]},key)))})]})})]})};exports.MetaDod=MetaDod;try{MetaDod.displayName="MetaDod",MetaDod.__docgenInfo={description:"",displayName:"MetaDod",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Partial<Record<"storybook" | "designTokens" | "useThemedHook" | "unitTests" | "screenshotTests" | "migration" | "apiTable" | "figmaView", boolean>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"]={docgenInfo:MetaDod.__docgenInfo,name:"MetaDod",path:"helpers/hocs/MetaComponent/MetaDod.tsx#MetaDod"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/hocs/MetaComponent/types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.metaDod=void 0;exports.metaDod={designTokens:"Дизайн токены",useThemedHook:"Использование theme hook",unitTests:"Unit tests",screenshotTests:"Screenshot tests",migration:"Описание миграции",apiTable:"api table",storybook:"storybook",figmaView:"Отображение в Фигме"}},"./helpers/hocs/MetaComponent/withMeta.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.withMeta=function withMeta(list,Component){return props=>(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)(_blocks.Title,{children:list.component}),(0,_jsxRuntime.jsx)(_MetaDod.MetaDod,{list:list.dod}),(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Описание"}),list.description?(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.description}):"-",(0,_jsxRuntime.jsx)(_blocks.Subtitle,{children:"Использование"}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:list.usage}),(0,_jsxRuntime.jsx)(_blocks.Markdown,{children:`[Дизайн](${list.designLink})`}),Component&&(0,_jsxRuntime.jsx)(Component,{...props}),(0,_jsxRuntime.jsx)(_blocks.Primary,{}),(0,_jsxRuntime.jsx)(_blocks.ArgsTable,{story:_blocks.PRIMARY_STORY}),(0,_jsxRuntime.jsx)(_blocks.Stories,{title:"Variants of View"})]})};(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__("./node_modules/react/index.js"));var _MetaDod=__webpack_require__("./helpers/hocs/MetaComponent/MetaDod.tsx"),_blocks=__webpack_require__("./node_modules/@storybook/blocks/dist/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js")},"./src/markdown/stories/Markdown.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.MDTable=exports.MDQuote=exports.MDList=exports.Basic=void 0;var _Basic$parameters,_Basic$parameters2,_Basic$parameters2$do,_MDTable$parameters,_MDTable$parameters2,_MDTable$parameters2$,_MDList$parameters,_MDList$parameters2,_MDList$parameters2$d,_MDQuote$parameters,_MDQuote$parameters2,_MDQuote$parameters2$,_Markdown=__webpack_require__("./src/markdown/Markdown.tsx"),_badges=__webpack_require__("./.storybook/badges.ts"),_storybookHelpers=__webpack_require__("./helpers/storybookHelpers.ts"),_withMeta=__webpack_require__("./helpers/hocs/MetaComponent/withMeta.tsx"),_meta=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./src/markdown/__meta__/meta.json"));const mdVariants={common:'# Заголовок первого уровня\n\n## Заголовок второго уровня\n\n### Заголовок третьего уровня\n\n#### Заголовок четвертого уровня\n\n##### Заголовок пятого уровня\n\n###### Заголовок шестого уровня\n\nАбзацы создаются с помощью пустой строки.\n\n*Курсив* или _Курсив_\n\n**Жирный** или __Жирный__\n\n***Жирный курсив*** или ___Жирный курсив___\n\n- Неупорядоченный список\n  - Подпункт\n    - Подподпункт\n\n1. Упорядоченный список\n   1. Подпункт\n      1. Подподпункт\n\n`Код в строке`\n\n```javascript\n// Код в блоке\nfunction helloWorld() {\n    console.log("Hello, world!");\n}\n```\n\n~~Strikethrough~~\n\n[Internal link](#/internal-hash-tag)\n\n[External link](http://www.kaspersky.com)\n',table:"\n| id | Vale | Description                                                                                                                                               | Site                                                  |\n|----|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|\n| 1  | Cat  | GFM Markdown table syntax is quite simple. It does not allow row or cell spanning as well as putting multi-line text in a cell.                           | [Lorem ipsum Cat](http://www.kaspersky.com) |\n| 2  | Dog  | Adjust text alignment and table borders using the options from the menu and using the toolbar buttons -- formatting is applied to all the selected cells. | [Lorem ipsum Dog](http://www.kaspersky.com) |\n",list:"\n- George Washington\n* John Adams\n+ Thomas Jefferson\n",quote:"> Text that is a quote"},meta={title:"Atoms/Markdown",component:_Markdown.Markdown,argTypes:{...(0,_storybookHelpers.sbHideControls)(["theme","as","forwardedAs"])},args:{testId:"markdown-test-id",klId:"markdown-kl-id"},parameters:{storySource:{source:"import { Markdown } from '../Markdown';\nimport { MarkdownProps } from '../types';\nimport { badges } from '@sb/badges';\nimport { sbHideControls } from '@helpers/storybookHelpers';\nimport { withMeta } from '@helpers/hocs/MetaComponent/withMeta';\nimport MetaData from '../__meta__/meta.json';\nimport { Meta } from '@storybook/react';\nconst mdVariants = {\n  common: `# Заголовок первого уровня\n\n## Заголовок второго уровня\n\n### Заголовок третьего уровня\n\n#### Заголовок четвертого уровня\n\n##### Заголовок пятого уровня\n\n###### Заголовок шестого уровня\n\nАбзацы создаются с помощью пустой строки.\n\n*Курсив* или _Курсив_\n\n**Жирный** или __Жирный__\n\n***Жирный курсив*** или ___Жирный курсив___\n\n- Неупорядоченный список\n  - Подпункт\n    - Подподпункт\n\n1. Упорядоченный список\n   1. Подпункт\n      1. Подподпункт\n\n\\`Код в строке\\`\n\n\\`\\`\\`javascript\n// Код в блоке\nfunction helloWorld() {\n    console.log(\"Hello, world!\");\n}\n\\`\\`\\`\n\n~~Strikethrough~~\n\n[Internal link](#/internal-hash-tag)\n\n[External link](http://www.kaspersky.com)\n`,\n  table: `\n| id | Vale | Description                                                                                                                                               | Site                                                  |\n|----|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|\n| 1  | Cat  | GFM Markdown table syntax is quite simple. It does not allow row or cell spanning as well as putting multi-line text in a cell.                           | [Lorem ipsum Cat](http://www.kaspersky.com) |\n| 2  | Dog  | Adjust text alignment and table borders using the options from the menu and using the toolbar buttons -- formatting is applied to all the selected cells. | [Lorem ipsum Dog](http://www.kaspersky.com) |\n`,\n  list: `\n- George Washington\n* John Adams\n+ Thomas Jefferson\n`,\n  quote: '> Text that is a quote'\n};\nconst meta: Meta<MarkdownProps> = {\n  title: 'Atoms/Markdown',\n  component: Markdown,\n  argTypes: {\n    ...sbHideControls(['theme', 'as', 'forwardedAs'])\n  },\n  args: {\n    testId: 'markdown-test-id',\n    klId: 'markdown-kl-id'\n  },\n  parameters: {\n    badges: [badges.stable, badges.needsDesignReview],\n    docs: {\n      page: withMeta(MetaData)\n    }\n  }\n};\nexport default meta;\nexport const Basic = {\n  args: {\n    value: mdVariants.common\n  }\n};\nexport const MDTable = {\n  args: {\n    value: mdVariants.table\n  }\n};\nexport const MDList = {\n  args: {\n    value: mdVariants.list\n  }\n};\nexport const MDQuote = {\n  args: {\n    value: mdVariants.quote\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    value: mdVariants.common\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nMDTable.parameters = {\n  ...MDTable.parameters,\n  docs: {\n    ...MDTable.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    value: mdVariants.table\\n  }\\n}\",\n      ...MDTable.parameters?.docs?.source\n    }\n  }\n};\nMDList.parameters = {\n  ...MDList.parameters,\n  docs: {\n    ...MDList.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    value: mdVariants.list\\n  }\\n}\",\n      ...MDList.parameters?.docs?.source\n    }\n  }\n};\nMDQuote.parameters = {\n  ...MDQuote.parameters,\n  docs: {\n    ...MDQuote.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    value: mdVariants.quote\\n  }\\n}\",\n      ...MDQuote.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{basic:{startLoc:{col:21,line:83},endLoc:{col:1,line:87},startBody:{col:21,line:83},endBody:{col:1,line:87}},"md-table":{startLoc:{col:23,line:88},endLoc:{col:1,line:92},startBody:{col:23,line:88},endBody:{col:1,line:92}},"md-list":{startLoc:{col:22,line:93},endLoc:{col:1,line:97},startBody:{col:22,line:93},endBody:{col:1,line:97}},"md-quote":{startLoc:{col:23,line:98},endLoc:{col:1,line:102},startBody:{col:23,line:98},endBody:{col:1,line:102}}}},badges:[_badges.badges.stable,_badges.badges.needsDesignReview],docs:{page:(0,_withMeta.withMeta)(_meta.default)}}};exports.default=meta;const Basic=exports.Basic={args:{value:mdVariants.common}},MDTable=exports.MDTable={args:{value:mdVariants.table}},MDList=exports.MDList={args:{value:mdVariants.list}},MDQuote=exports.MDQuote={args:{value:mdVariants.quote}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs,source:{originalSource:"{\n  args: {\n    value: mdVariants.common\n  }\n}",...null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2$do=_Basic$parameters2.docs)||void 0===_Basic$parameters2$do?void 0:_Basic$parameters2$do.source}}},MDTable.parameters={...MDTable.parameters,docs:{...null===(_MDTable$parameters=MDTable.parameters)||void 0===_MDTable$parameters?void 0:_MDTable$parameters.docs,source:{originalSource:"{\n  args: {\n    value: mdVariants.table\n  }\n}",...null===(_MDTable$parameters2=MDTable.parameters)||void 0===_MDTable$parameters2||null===(_MDTable$parameters2$=_MDTable$parameters2.docs)||void 0===_MDTable$parameters2$?void 0:_MDTable$parameters2$.source}}},MDList.parameters={...MDList.parameters,docs:{...null===(_MDList$parameters=MDList.parameters)||void 0===_MDList$parameters?void 0:_MDList$parameters.docs,source:{originalSource:"{\n  args: {\n    value: mdVariants.list\n  }\n}",...null===(_MDList$parameters2=MDList.parameters)||void 0===_MDList$parameters2||null===(_MDList$parameters2$d=_MDList$parameters2.docs)||void 0===_MDList$parameters2$d?void 0:_MDList$parameters2$d.source}}},MDQuote.parameters={...MDQuote.parameters,docs:{...null===(_MDQuote$parameters=MDQuote.parameters)||void 0===_MDQuote$parameters?void 0:_MDQuote$parameters.docs,source:{originalSource:"{\n  args: {\n    value: mdVariants.quote\n  }\n}",...null===(_MDQuote$parameters2=MDQuote.parameters)||void 0===_MDQuote$parameters2||null===(_MDQuote$parameters2$=_MDQuote$parameters2.docs)||void 0===_MDQuote$parameters2$?void 0:_MDQuote$parameters2$.source}}};exports.__namedExportsOrder=["Basic","MDTable","MDList","MDQuote"]},"./src/markdown/__meta__/meta.json":module=>{module.exports=JSON.parse('{"dod":{"designTokens":true,"useThemedHook":false,"unitTests":false,"screenshotTests":false,"migration":false,"apiTable":false,"storybook":true},"component":"Markdown","description":"Компонент для отображения маркдаун-разметки","usage":"","designLink":""}')}}]);