(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},125:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},126:function(e,t,n){"use strict";var a=n(0),o=n(125);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(126),r=n(123),l=n(48),c=n.n(l);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(i.a)(),[O,f]=Object(a.useState)(l),[j,h]=Object(a.useState)(!1);if(null!=u){const e=m[u];null!=e&&e!==O&&p.some(t=>t.value===e)&&f(e)}const v=e=>{f(e),null!=u&&d(u,e)},g=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=()=>{h(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",N)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),style:j?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),y(e)},onFocus:()=>v(e),onClick:()=>{v(e),h(!1)},onPointerDown:()=>h(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},129:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=(n(0),n(122)),i=n(128),r=n(129);const l={title:"Minikube deployment guide",sidebar_label:"Minikube deployment"},c={unversionedId:"deployment/single-node/minikube",id:"deployment/single-node/minikube",isDocsHomePage:!1,title:"Minikube deployment guide",description:"This document outlines the installation steps for single node installation using Minikube.",source:"@site/docs/deployment/single-node/minikube.md",slug:"/deployment/single-node/minikube",permalink:"/docs/deployment/single-node/minikube",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/single-node/minikube.md",version:"current",sidebar_label:"Minikube deployment"},s=[{value:"Install Minikube",id:"install-minikube",children:[]},{value:"Install Onepanel",id:"install-onepanel",children:[]}],b={rightToc:s};function p({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines the installation steps for single node installation using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/setup/learning-environment/minikube/"}),"Minikube"),"."),Object(o.b)("h2",{id:"install-minikube"},"Install Minikube"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Install Minikube")," and follow the instructions for your operating system."),Object(o.b)("p",null,"Once Minikube is installed, start it with at least 8 Gigabytes of RAM, 4 CPUs, and 40G of storage (for Istio) \u2013 you can pass these requirements as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"minikube start --driver=virtualbox --memory '8gb' --cpus=4 --disk-size '40g' \\\n    --extra-config=apiserver.service-account-signing-key-file=/var/lib/minikube/certs/sa.key \\\n    --extra-config=apiserver.service-account-key-file=/var/lib/minikube/certs/sa.pub \\\n    --extra-config=apiserver.service-account-issuer=api \\\n    --extra-config=apiserver.service-account-api-audiences=api,nats \\\n    --extra-config=apiserver.authorization-mode=Node,RBAC\n")),Object(o.b)("p",null,"You can now find the IP address which has been allocated by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"minikube ip\n")),Object(o.b)("p",null,"Take a note of this IP as you will need to add it to your ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml"),"."),Object(o.b)("h2",{id:"install-onepanel"},"Install Onepanel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the latest ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),"."),Object(o.b)(i.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-linux-amd64\n\n# Make binary executable\nchmod +x opctl-linux-amd64\n\n# Move binary to path\nmv ./opctl-linux-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n"))),Object(o.b)(r.a,{value:"macos",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/latest/opctl-macos-amd64\n\n# Make binary executable\nchmod +x opctl-macos-amd64\n\n# Move binary to path\nmv ./opctl-macos-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n"))),Object(o.b)(r.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Download the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest/download/opctl-windows-amd64.exe"}),"attached executable"),", rename it to ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," and move it to a folder that is in your PATH environment variable.")))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to initialize a ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," template for minikube:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider minikube \\\n    --enable-metallb \\\n    --artifact-repository-provider s3\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Populate ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, and referring to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deployment/configuration/files#sections"}),"configuration file sections")," for more detailed information.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Finally, run the following command to deploy to your cluster:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The CLI will display the URL for accessing Onepanel once the deployment completes.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the following command to get your auth token to log into Onepanel:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl auth token\n")))))}p.isMDXComponent=!0}}]);