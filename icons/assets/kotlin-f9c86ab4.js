import{g as u}from"./_commonjsHelpers-de833af9.js";function c(t,r){for(var e=0;e<r.length;e++){const n=r[e];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,l;function g(){if(l)return o;l=1,o=t,t.displayName="kotlin",t.aliases=[];function t(r){(function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"],e.languages.insertBefore("kotlin","string",{"raw-string":{pattern:/("""|''')[\s\S]*?\1/,alias:"string"}}),e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\w+@|@\w+/,alias:"symbol"}});var n=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:"variable"},rest:e.languages.kotlin}},{pattern:/\$\w+/,alias:"variable"}];e.languages.kotlin.string.inside=e.languages.kotlin["raw-string"].inside={interpolation:n}})(r)}return o}var s=g();const d=u(s),f=c({__proto__:null,default:d},[s]);export{f as k};
//# sourceMappingURL=kotlin-f9c86ab4.js.map
