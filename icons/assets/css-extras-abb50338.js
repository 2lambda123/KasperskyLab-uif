import{g as c}from"./_commonjsHelpers-de833af9.js";function d(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,i;function l(){if(i)return o;i=1,o=e,e.displayName="cssExtras",e.aliases=[];function e(t){t.languages.css.selector={pattern:t.languages.css.selector,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-:.\w]+/,id:/#[-:.\w]+/,attribute:{pattern:/\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},attribute:{pattern:/^(\s*)[-\w\xA0-\uFFFF]+/,lookbehind:!0},value:[/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,{pattern:/(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],punctuation:/[()]/}},t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,lookbehind:!0}}),t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,unit:{pattern:/(\d)(?:%|[a-z]+)/,lookbehind:!0},number:/-?[\d.]+/})}return o}var u=l();const p=c(u),F=d({__proto__:null,default:p},[u]);export{F as c};
//# sourceMappingURL=css-extras-abb50338.js.map
