(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),d=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||r;return t?o.a.createElement(m,c(c({ref:n},i),{},{components:t})):o.a.createElement(m,c({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<r;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},127:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},130:function(e,n,t){"use strict";var a=t(0);const o=Object(a.createContext)(void 0);n.a=o},131:function(e,n,t){"use strict";var a=t(0),o=t(130);n.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},138:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(131),s=t(127),c=t(48),l=t.n(c);const i=37,d=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:p,groupId:u}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(r.a)(),[g,O]=Object(a.useState)(c),[y,v]=Object(a.useState)(!1);if(null!=u){const e=b[u];null!=e&&e!==g&&p.some(n=>n.value===e)&&O(e)}const j=e=>{O(e),null!=u&&m(u,e)},f=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},N=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",N)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},p.map(({value:e,label:n})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),style:y?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case d:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case i:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(f,e.target,e),h(e)},onFocus:()=>j(e),onClick:()=>{j(e),v(!1)},onPointerDown:()=>v(!1)},n))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===g)[0]))}},139:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){return o.a.createElement("div",null,e.children)}},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return u}));var a=t(2),o=t(6),r=(t(0),t(125)),s=t(138),c=t(139),l={title:"Adding more nodes",sidebar_label:"Adding more nodes",description:"Onepanel - Adding more nodes to AKS, EKS, GKE and Microk8s cluster"},i={unversionedId:"deployment/components/nodes",id:"deployment/components/nodes",isDocsHomePage:!1,title:"Adding more nodes",description:"Onepanel - Adding more nodes to AKS, EKS, GKE and Microk8s cluster",source:"@site/docs/deployment/components/nodes.md",slug:"/deployment/components/nodes",permalink:"/docs/deployment/components/nodes",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/components/nodes.md",version:"current",sidebar_label:"Adding more nodes",sidebar:"deployment",previous:{title:"Upgrading components",permalink:"/docs/deployment/components/upgrade"},next:{title:"Cluster information",permalink:"/docs/deployment/cluster/cluster"}},d=[{value:"Step 1. Add nodes to Kubernetes provider",id:"step-1-add-nodes-to-kubernetes-provider",children:[]},{value:"Step 2. Update <code>params.yaml</code>",id:"step-2-update-paramsyaml",children:[]},{value:"Step 3. Apply updates to Onepanel",id:"step-3-apply-updates-to-onepanel",children:[]}],p={rightToc:d};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can easily add auto-scaling nodes to your Onepanel cluster by:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Adding the node to your Kubernetes cluster"),Object(r.b)("li",{parentName:"ol"},"Adding information about the node to your ",Object(r.b)("inlineCode",{parentName:"li"},"params.yaml")," file"),Object(r.b)("li",{parentName:"ol"},"Applying the updates to Onepanel by running ",Object(r.b)("inlineCode",{parentName:"li"},"opctl apply"))),Object(r.b)("h2",{id:"step-1-add-nodes-to-kubernetes-provider"},"Step 1. Add nodes to Kubernetes provider"),Object(r.b)("p",null,"You can add additional auto-scaling node pools (node groups in EKS) to your Kubernetes cluster by running the following commands for your provider."),Object(r.b)(s.a,{groupId:"cloud-provider",defaultValue:"aks",values:[{label:"Azure AKS",value:"aks"},{label:"Amazon EKS",value:"eks"},{label:"Google Cloud GKE",value:"gke"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"aks",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"az aks nodepool add --resource-group <resource-group> --cluster-name <cluster-name> \\\n  --name <nodepool-name> \\\n  --node-vm-size <node-vm-size> \\\n  --enable-cluster-autoscaler \\\n  --node-count 1 \\\n  --min-count 0 \\\n  --max-count <max-count>\n")),Object(r.b)("p",null,"For example, to add a node pool with 1 Tesla V100 GPU that scales from 0 to 5 nodes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{3,7}","{3,7}":!0}),"az aks nodepool add --resource-group my-resource-group --cluster-name my-cluster-name \\\n  --name mygpunode \\\n  --node-vm-size Standard_NC6s_v3 \\\n  --enable-cluster-autoscaler \\\n  --node-count 1 \\\n  --min-count 0 \\\n  --max-count 5\n"))),Object(r.b)(c.a,{value:"eks",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'eksctl create nodegroup --name <nodegroup-name> --cluster <cluster-name> --region <region> --node-zones <<region>a> \\\n  --nodes 0  \\\n  --node-type <node-type> \\\n  --node-volume-size 100 \\\n  --nodes-min 0 \\\n  --nodes-max <nodes-max> \\\n  --asg-access \\\n  --ssh-access \\\n  --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=<node-type>"\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aws/containers-roadmap/issues/724"}),"support scale to and from zero"),", we need to use EKS unmanaged nodes. These do not show up in EKS console but you can view them by going to ",Object(r.b)("strong",{parentName:"p"},"EC2")," > ",Object(r.b)("strong",{parentName:"p"},"Auto Scaling groups"),"."))),Object(r.b)("p",null,"For example, to add a node group with 1 Tesla V100 GPU that scales from 0 to 5 nodes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{3,6,9}","{3,6,9}":!0}),'eksctl create nodegroup --name mygpunodegroup --cluster my-cluster-name --region us-west-1 --node-zones us-west-1a \\\n  --nodes 0  \\\n  --node-type p3.2xlarge \\\n  --node-volume-size 100 \\\n  --nodes-min 0 \\\n  --nodes-max 5 \\\n  --asg-access \\\n  --ssh-access \\\n  --tags "onepanel.io/enabled=true,k8s.io/cluster-autoscaler/node-template/label/node.kubernetes.io/instance-type=p3.2xlarge"\n'))),Object(r.b)(c.a,{value:"gke",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'gcloud container node-pools create <node-pool-name> --cluster <cluster-name> --zone <zone> \\\n  --machine-type <machine-type> \\\n  --disk-size 100 \\\n  --num-nodes 0 \\\n  --min-nodes 0 \\\n  --max-nodes <max-nodes> \\\n  --enable-autoscaling \\\n  --accelerator "type=<type>,count=<count>"  # optional, example: "type=nvidia-tesla-v100,count=1"\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In GKE you can add GPUs to any machine type, so the ",Object(r.b)("inlineCode",{parentName:"p"},"--accelerator")," flag is optional and only needs to be set if you are adding GPU nodes. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/compute/docs/gpus"}),"GCP GPU documentation")," for a list of GPU types by region."))),Object(r.b)("p",null,"For example, to add a node pool with 1 Tesla V100 GPU that scales from 0 to 5 nodes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{2,6,8}","{2,6,8}":!0}),"gcloud container node-pools create mygpunodepool --cluster my-cluster-name --zone us-west1-a \\\n  --machine-type n1-standard-8 \\\n  --disk-size 100 \\\n  --num-nodes 0 \\\n  --min-nodes 0 \\\n  --max-nodes 5 \\\n  --enable-autoscaling \\\n  --accelerator 'type=nvidia-tesla-v100,count=1'\n")))),Object(r.b)("h2",{id:"step-2-update-paramsyaml"},"Step 2. Update ",Object(r.b)("inlineCode",{parentName:"h2"},"params.yaml")),Object(r.b)("p",null,"Next, you need to add the new nodes in your ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," file. Note that you can set ",Object(r.b)("inlineCode",{parentName:"p"},"name")," to anything, but we recommend using a value that is descriptive since this will show in the web UI."),Object(r.b)("p",null,"Setting ",Object(r.b)("inlineCode",{parentName:"p"},"resources.limits")," is only required if you are adding GPU nodes."),Object(r.b)(s.a,{groupId:"cloud-provider",defaultValue:"aks",values:[{label:"Azure AKS",value:"aks"},{label:"Amazon EKS",value:"eks"},{label:"Google Cloud GKE",value:"gke"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"aks",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{6-10}","{6-10}":!0}),"  nodePool:\n    ...\n    options:\n      - name: 'CPU: 4, RAM: 16GB'\n        value: Standard_D4s_v3\n      - name: 'GPU: 1xV100, CPU: 6, RAM: 112GB'\n        value: Standard_NC6s_v3\n        resources:\n          limits:\n            nvidia.com/gpu: 1\n"))),Object(r.b)(c.a,{value:"eks",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{6-10}","{6-10}":!0}),"  nodePool:\n    ...\n    options:\n      - name: 'CPU: 4, RAM: 16GB'\n        value: m5.xlarge\n      - name: 'GPU: 1xV100, CPU: 8, RAM: 61GB'\n        value: p3.2xlarge\n        resources:\n          limits:\n            nvidia.com/gpu: 1\n"))),Object(r.b)(c.a,{value:"gke",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:"{6-10}","{6-10}":!0}),"  nodePool:\n    ...\n    options:\n      - name: 'CPU: 4, RAM: 15GB'\n        value: n1-standard-4\n      - name: 'GPU: 1xV100, CPU: 8, RAM: 30GB'\n        value: n1-standard-8\n        resources:\n          limits:\n            nvidia.com/gpu: 1\n")))),Object(r.b)("h2",{id:"step-3-apply-updates-to-onepanel"},"Step 3. Apply updates to Onepanel"),Object(r.b)("p",null,"In the final step, you need to apply your changes so that Onepanel can recognize the new node pools:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")))}u.isMDXComponent=!0}}]);