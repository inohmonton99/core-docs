(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(1),o=(n(0),n(119));const c={title:"GKE installation guide",sidebar_label:"Installing on GKE"},i={id:"installation-guides/gke",title:"GKE installation guide",description:"This document outlines the installation steps for Google Kubernetes Engine (GKE).",source:"@site/docs/installation-guides/gke.md",permalink:"/core-docs/docs/installation-guides/gke",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/installation-guides/gke.md",sidebar_label:"Installing on GKE",sidebar:"someSidebar",previous:{title:"EKS installation guide",permalink:"/core-docs/docs/installation-guides/eks"},next:{title:"Linux installation guide",permalink:"/core-docs/docs/installation-guides/linux"}},r=[{value:"Launch a GKE cluster",id:"launch-a-gke-cluster",children:[]},{value:"Install Onepanel Core",id:"install-onepanel-core",children:[]}],l={rightToc:r};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines the installation steps for Google Kubernetes Engine (GKE)."),Object(o.b)("h2",{id:"launch-a-gke-cluster"},"Launch a GKE cluster"),Object(o.b)("p",null,"We recommend launching a cluster with 2 ",Object(o.b)("inlineCode",{parentName:"p"},"n1-standard-4")," nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later."),Object(o.b)("p",null,"Here is sample ",Object(o.b)("inlineCode",{parentName:"p"},"gcloud")," command to create a bare minimum cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> \\\n    --num-nodes 2 \\\n    --machine-type n1-standard-4 \\\n    --disk-size 100 \\\n    --min-nodes 0 \\\n    --max-nodes 2 \\\n    --enable-autoscaling \\\n    --enable-network-policy \\\n    --enable-stackdriver-kubernetes \\\n    --addons HorizontalPodAutoscaling,HttpLoadBalancing\n")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-stackdriver-kubernetes")," flag in above command enables Google Stackdriver for log aggregation which can incur additional charges. You can optionally remove this flag and add ",Object(o.b)("inlineCode",{parentName:"p"},"--enable-efk-logging")," to ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," command below."))),Object(o.b)("p",null,"The command above will automatically retrieve your cluster's access credentials but you can also get them by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials <cluster-name> --zone <zone>\n")),Object(o.b)("h2",{id:"install-onepanel-core"},"Install Onepanel Core"),Object(o.b)("p",null,"Download the latest ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/cli/releases"}),"our release page")),Object(o.b)("p",null,"Run the following command to create ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file for GKE:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider gke --dns-provider <dns-provider>\n")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For a list of supported ",Object(o.b)("inlineCode",{parentName:"p"},"--dns-provider")," values see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"opctl documentation")," "))),Object(o.b)("p",null,"Populate ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," as outlined in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"installation-guides/configuration"}),"configuration documentation")),Object(o.b)("p",null,"Finally, run the following command to deploy to your cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(o.b)("p",null,"Once deployment completes, run the following command to get the external IP of Onepanel's gateway:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get service istio-ingressgateway -n istio-system\n")),Object(o.b)("p",null,"This is the IP address you need to point your Wildcard FQDN to in your DNS provider."),Object(o.b)("div",{className:"admonition admonition-tip"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Example Wildcard FQDN would be ",Object(o.b)("inlineCode",{parentName:"p"},"*.example.com")," or ",Object(o.b)("inlineCode",{parentName:"p"},"*.subdomain.example.com")))),Object(o.b)("p",null,"Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl auth token\n")))}s.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||c;return n?o.a.createElement(m,r({ref:t},s,{components:n})):o.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);