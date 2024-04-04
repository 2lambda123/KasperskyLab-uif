"use strict";(self.webpackChunk_kaspersky_components=self.webpackChunk_kaspersky_components||[]).push([[9826],{"./docs/design/Sizing.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__namedExportsOrder=exports.Spaces=exports.BorderRadius=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Spaces$parameters,_Spaces$parameters2,_Spaces$parameters2$d,_BorderRadius$paramet,_BorderRadius$paramet2,_BorderRadius$paramet3,_styledComponents=_interopRequireDefault(__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_theme=__webpack_require__("./design-system/theme/index.ts"),_typography=__webpack_require__("./src/typography/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const StyledSizeExample=_styledComponents.default.div.withConfig({displayName:"Sizingstories__StyledSizeExample",componentId:"sc-hl0wc6-0"})(["display:flex;.ds-info{font-size:","px;color:",";width:200px;}.ds-example{width:300px;height:",";background:",";margin:10px 0;}"],(_ref=>{let{theme:{spaces}}=_ref;return spaces[4]}),(_ref2=>{let{theme:{colors}}=_ref2;return colors.mainInteractPrimary}),(_ref3=>{let{size,theme:{spaces}}=_ref3;return`${spaces[size]}px`||"4px"}),(_ref4=>{let{theme:{colors}}=_ref4;return colors.defaultPalette.marina500})),StyledSizing=_styledComponents.default.div.withConfig({displayName:"Sizingstories__StyledSizing",componentId:"sc-hl0wc6-1"})(["display:flex;flex-direction:column;.ds-container{display:flex;flex-wrap:wrap;}"]),DesignSizingComponent=_ref5=>{let{obj,name}=_ref5;return(0,_jsxRuntime.jsxs)(StyledSizing,{children:[(0,_jsxRuntime.jsx)(_typography.H4,{color:"marina600",children:name}),(0,_jsxRuntime.jsx)("div",{className:"ds-constainer",children:Object.entries(obj).map((_ref6=>{let[key,value]=_ref6;return(0,_jsxRuntime.jsxs)(StyledSizeExample,{size:key,children:[(0,_jsxRuntime.jsx)("div",{className:"ds-info",children:(0,_jsxRuntime.jsxs)(_typography.Text,{level:"BTR3",color:"marina600",children:[key," Unit - ",value,"px"]})}),(0,_jsxRuntime.jsx)("div",{className:"ds-example"})]},key)}))})]})};DesignSizingComponent.displayName="DesignSizingComponent";const meta={parameters:{storySource:{source:"import React, { FC } from 'react';\nimport styled from 'styled-components';\nimport { StoryObj } from '@storybook/react';\nimport { BORDER_RADIUS, SPACES } from '@design-system/theme';\nimport { H4, Text } from '@src/typography';\nexport type DesignSizingComponentProps = {\n  obj: typeof BORDER_RADIUS | typeof SPACES;\n  name: 'SPACES' | 'BORDER_RADIUS';\n};\ntype StyledProps = keyof typeof SPACES | keyof typeof BORDER_RADIUS;\nconst StyledSizeExample = styled.div<{\n  size: StyledProps;\n}>`\n  display: flex;\n  .ds-info {\n    font-size: ${({\n  theme: {\n    spaces\n  }\n}) => spaces[4]}px;\n    color: ${({\n  theme: {\n    colors\n  }\n}) => colors.mainInteractPrimary};\n    width: 200px;\n  }\n\n  .ds-example {\n    width: 300px;\n    height: ${({\n  size,\n  theme: {\n    spaces\n  }\n}) => `${spaces[size]}px` || '4px'};\n    background: ${({\n  theme: {\n    colors\n  }\n}) => colors.defaultPalette.marina500};\n    margin: 10px 0;\n  }\n`;\nconst StyledSizing = styled.div`\n  display: flex;\n  flex-direction: column;\n  \n  .ds-container {\n    display: flex;\n    flex-wrap: wrap;\n  }\n`;\nconst DesignSizingComponent: FC<DesignSizingComponentProps> = ({\n  obj,\n  name\n}: DesignSizingComponentProps) => {\n  return <StyledSizing>\n      <H4 color={'marina600'}>{name}</H4>\n      <div className='ds-constainer'>\n        {Object.entries(obj).map(([key, value]) => <StyledSizeExample size={((key as unknown) as StyledProps)} key={key}>\n            <div className='ds-info'>\n              <Text level='BTR3' color='marina600'>{key} Unit - {value}px</Text>\n            </div>\n            <div className='ds-example' />\n          </StyledSizeExample>)}\n      </div>\n    </StyledSizing>;\n};\nconst meta = {\n  title: 'Design/Sizing & Spacing',\n  component: DesignSizingComponent\n};\nexport default meta;\ntype Story = StoryObj<DesignSizingComponentProps>;\nexport const Spaces: Story = {\n  args: {\n    obj: SPACES,\n    name: 'SPACES'\n  }\n};\nexport const BorderRadius: Story = {\n  args: {\n    obj: BORDER_RADIUS,\n    name: 'BORDER_RADIUS'\n  }\n};\nSpaces.parameters = {\n  ...Spaces.parameters,\n  docs: {\n    ...Spaces.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    obj: SPACES,\\n    name: 'SPACES'\\n  }\\n}\",\n      ...Spaces.parameters?.docs?.source\n    }\n  }\n};\nBorderRadius.parameters = {\n  ...BorderRadius.parameters,\n  docs: {\n    ...BorderRadius.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    obj: BORDER_RADIUS,\\n    name: 'BORDER_RADIUS'\\n  }\\n}\",\n      ...BorderRadius.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{spaces:{startLoc:{col:29,line:76},endLoc:{col:1,line:81},startBody:{col:29,line:76},endBody:{col:1,line:81}},"border-radius":{startLoc:{col:35,line:82},endLoc:{col:1,line:87},startBody:{col:35,line:82},endBody:{col:1,line:87}}}}},title:"Design/Sizing & Spacing",component:DesignSizingComponent};exports.default=meta;const Spaces=exports.Spaces={args:{obj:_theme.SPACES,name:"SPACES"}},BorderRadius=exports.BorderRadius={args:{obj:_theme.BORDER_RADIUS,name:"BORDER_RADIUS"}};Spaces.parameters={...Spaces.parameters,docs:{...null===(_Spaces$parameters=Spaces.parameters)||void 0===_Spaces$parameters?void 0:_Spaces$parameters.docs,source:{originalSource:"{\n  args: {\n    obj: SPACES,\n    name: 'SPACES'\n  }\n}",...null===(_Spaces$parameters2=Spaces.parameters)||void 0===_Spaces$parameters2||null===(_Spaces$parameters2$d=_Spaces$parameters2.docs)||void 0===_Spaces$parameters2$d?void 0:_Spaces$parameters2$d.source}}},BorderRadius.parameters={...BorderRadius.parameters,docs:{...null===(_BorderRadius$paramet=BorderRadius.parameters)||void 0===_BorderRadius$paramet?void 0:_BorderRadius$paramet.docs,source:{originalSource:"{\n  args: {\n    obj: BORDER_RADIUS,\n    name: 'BORDER_RADIUS'\n  }\n}",...null===(_BorderRadius$paramet2=BorderRadius.parameters)||void 0===_BorderRadius$paramet2||null===(_BorderRadius$paramet3=_BorderRadius$paramet2.docs)||void 0===_BorderRadius$paramet3?void 0:_BorderRadius$paramet3.source}}};exports.__namedExportsOrder=["Spaces","BorderRadius"]}}]);