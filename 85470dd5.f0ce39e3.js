(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,f=p["".concat(o,".").concat(g)]||p[g]||d[g]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},236:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-162008-331fc800ef28dcf125d1f0a51608e1b4.png"},237:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-161734-cde69cd28205ffc0230aaac463c4faac.png"},238:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-162056-73fe76d379ab496e08f8f99c1df56da0.png"},239:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-162350-1ecbef5dd813083ddc8909ce1cc8c240.png"},240:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-162707-75cf552bb3f36f1364d03bfc58f6585f.png"},241:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/language-server-162623-801b7c6401581b6518d71cbf70985067.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(125)),o={title:"Auto completion and language features in JupyterLab",sidebar_label:"Auto completion and language features",description:"Onepanel - Auto completion and language features in JupyterLab"},c={unversionedId:"reference/jupyterlab/language-server",id:"reference/jupyterlab/language-server",isDocsHomePage:!1,title:"Auto completion and language features in JupyterLab",description:"Onepanel - Auto completion and language features in JupyterLab",source:"@site/docs/reference/jupyterlab/language-server.md",slug:"/reference/jupyterlab/language-server",permalink:"/docs/reference/jupyterlab/language-server",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/jupyterlab/language-server.md",version:"current",sidebar_label:"Auto completion and language features",sidebar:"reference",previous:{title:"Using the built-in debugger",permalink:"/docs/reference/jupyterlab/debugging"}},u=[{value:"Automatic Completion",id:"automatic-completion",children:[]},{value:"Hover",id:"hover",children:[]},{value:"Diagnostics",id:"diagnostics",children:[]},{value:"Jump to Definition",id:"jump-to-definition",children:[]},{value:"Automatic Signature Suggestions",id:"automatic-signature-suggestions",children:[]},{value:"Diagnostics panel",id:"diagnostics-panel",children:[]}],s={rightToc:u};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"automatic-completion"},"Automatic Completion"),Object(i.b)("p",null,"Certain characters, for example '.' (dot) in Python, will automatically trigger completion."),Object(i.b)("p",null,Object(i.b)("img",{src:n(236).default})),Object(i.b)("h2",{id:"hover"},"Hover"),Object(i.b)("p",null,"Hover over any piece of code; if an underline appears, you can press Ctrl to get a tooltip with function/class signature, module documentation or any other piece of information."),Object(i.b)("p",null,Object(i.b)("img",{src:n(237).default})),Object(i.b)("h2",{id:"diagnostics"},"Diagnostics"),Object(i.b)("p",null,"Critical errors have red underline, warnings are orange, etc. Hover over the underlined code to see a more detailed message."),Object(i.b)("p",null,Object(i.b)("img",{src:n(238).default})),Object(i.b)("h2",{id:"jump-to-definition"},"Jump to Definition"),Object(i.b)("p",null,"Use the context menu entries to jump to definitions."),Object(i.b)("p",null,Object(i.b)("img",{src:n(239).default})),Object(i.b)("h2",{id:"automatic-signature-suggestions"},"Automatic Signature Suggestions"),Object(i.b)("p",null,"Function signatures will automatically be displayed."),Object(i.b)("p",null,Object(i.b)("img",{src:n(240).default})),Object(i.b)("h2",{id:"diagnostics-panel"},"Diagnostics panel"),Object(i.b)("p",null,'Sort and jump between the diagnostics using the diagnostics panel. Open it searching for "Show diagnostics panel" in JupyterLab commands palette or from the context menu. Use context menu on rows in the panel to filter out diagnostics or copy their message.'),Object(i.b)("p",null,Object(i.b)("img",{src:n(241).default})))}l.isMDXComponent=!0}}]);