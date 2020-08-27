(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(156));const o={title:"Terminating a Workspace",sidebar_label:"Terminating a Workspace",description:"Terminating a Onepanel Workspace"},c={id:"reference/workspaces/delete",title:"Terminating a Workspace",description:"Terminating a Onepanel Workspace",source:"@site/docs/reference/workspaces/delete.md",permalink:"/docs/reference/workspaces/delete",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workspaces/delete.md",sidebar_label:"Terminating a Workspace",sidebar:"reference",previous:{title:"Switching node pools",permalink:"/docs/reference/workspaces/upgrade"},next:{title:"Workflow Templates",permalink:"/docs/reference/workflows/templates"}},i=[{value:"From workspace list",id:"from-workspace-list",children:[]},{value:"From workspace detail",id:"from-workspace-detail",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Deleting a workspace removes the workspace completely from the system.\nThe volumes and machine types are gone after being deleted."),Object(a.b)("h2",{id:"from-workspace-list"},"From workspace list"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the workspace listing page, click on the three dots next to a workspace and click delete."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/workspace_list_delete.png",alt:"Workspace list delete"}))))),Object(a.b)("h2",{id:"from-workspace-detail"},"From workspace detail"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"From the workspace detail page, click the Onepanel icon")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/onepanel_workspace_icon.png",alt:"Onepanel icon"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Then click the delete button")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/workspace_detail_delete.png",alt:"Workspace detail delete"}))))}p.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);