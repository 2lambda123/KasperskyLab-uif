import{g as c}from"./_commonjsHelpers-de833af9.js";function k(r,l){for(var a=0;a<l.length;a++){const e=l[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var p,u;function b(){if(u)return p;u=1,p=r,r.displayName="textile",r.aliases=[];function r(l){(function(a){var e=/(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source,t={css:{pattern:/\{[^}]+\}/,inside:{rest:a.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},o=a.languages.textile=a.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:RegExp("^[a-z]\\w*(?:"+e+"|[<>=()])*\\."),inside:{modifier:{pattern:RegExp("(^[a-z]\\w*)(?:"+e+"|[<>=()])+(?=\\.)"),lookbehind:!0,inside:t},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:RegExp("^[*#]+(?:"+e+")?\\s+.+","m"),inside:{modifier:{pattern:RegExp("(^[*#]+)"+e),lookbehind:!0,inside:t},punctuation:/^[*#]+/}},table:{pattern:RegExp("^(?:(?:"+e+"|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:"+e+"|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:"+e+"|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:t},punctuation:/\||^\./}},inline:{pattern:RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:"+e+")?.+?\\1"),inside:{bold:{pattern:RegExp("(^(\\*\\*?)(?:"+e+")?).+?(?=\\2)"),lookbehind:!0},italic:{pattern:RegExp("(^(__?)(?:"+e+")?).+?(?=\\2)"),lookbehind:!0},cite:{pattern:RegExp("(^\\?\\?(?:"+e+")?).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:RegExp("(^@(?:"+e+")?).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:RegExp("(^\\+(?:"+e+")?).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:RegExp("(^-(?:"+e+")?).+?(?=-)"),lookbehind:!0},span:{pattern:RegExp("(^%(?:"+e+")?).+?(?=%)"),lookbehind:!0},modifier:{pattern:RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])"+e),lookbehind:!0,inside:t},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:RegExp('"(?:'+e+')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:RegExp('(^"(?:'+e+')?)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:RegExp('(^")'+e),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:RegExp("!(?:"+e+"|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:RegExp("(^!(?:"+e+"|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:RegExp("(^!)(?:"+e+"|[<>=()])+"),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),i=o.phrase.inside,n={inline:i.inline,link:i.link,image:i.image,footnote:i.footnote,acronym:i.acronym,mark:i.mark};o.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=i.inline.inside;d.bold.inside=n,d.italic.inside=n,d.inserted.inside=n,d.deleted.inside=n,d.span.inside=n;var s=i.table.inside;s.inline=n.inline,s.link=n.link,s.image=n.image,s.footnote=n.footnote,s.acronym=n.acronym,s.mark=n.mark})(l)}return p}var g=b();const m=c(g),f=k({__proto__:null,default:m},[g]);export{f as t};
//# sourceMappingURL=textile-67e5d74a.js.map
