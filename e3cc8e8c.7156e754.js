(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(1),l=t(6),o=(t(0),t(119)),r={title:"macOS installation guide",sidebar_label:"Installing on macOS"},c={id:"deployment/single-node/macos",title:"macOS installation guide",description:"This document outlines the installation steps for macOS.",source:"@site/docs/deployment/single-node/macos.md",permalink:"/core-docs/docs/deployment/single-node/macos",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/single-node/macos.md",sidebar_label:"Installing on macOS",sidebar:"deployment",previous:{title:"Linux installation guide",permalink:"/core-docs/docs/deployment/single-node/linux"},next:{title:"Windows installation guide",permalink:"/core-docs/docs/deployment/single-node/windows"}},i=[{value:"Install MicroK8s with Multipass",id:"install-microk8s-with-multipass",children:[]},{value:"Install Onepanel Core",id:"install-onepanel-core",children:[]}],s={rightToc:i};function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines the installation steps for macOS."),Object(o.b)("h2",{id:"install-microk8s-with-multipass"},"Install MicroK8s with Multipass"),Object(o.b)("p",null,"First install Multipass:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew cask install multipass\n")),Object(o.b)("p",null,"With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended \u2013 you can pass these requirements when you launch the VM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass launch --name microk8s-vm --mem 4G --disk 40G\n")),Object(o.b)("p",null,"You can now find the IP address which has been allocated. Running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass list\n")),Object(o.b)("p",null,"Will return something like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Name                    State             IPv4             Release\nmicrok8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS\n")),Object(o.b)("p",null,"Take a note of this IP as you will need it for your ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file and for accessing the application."),Object(o.b)("p",null,"Run a shell into your VM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass shell microk8s-vm\n")),Object(o.b)("p",null,"Install the MicroK8s snap and configure the network:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install microk8s --classic --channel=1.17/stable\nsudo iptables -P FORWARD ACCEPT\n")),Object(o.b)("p",null,"You will also need to add ",Object(o.b)("inlineCode",{parentName:"p"},"ubuntu")," user to ",Object(o.b)("inlineCode",{parentName:"p"},"microk8s")," group as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo usermod -a -G microk8s ubuntu\n")),Object(o.b)("p",null,"Then, enable the following required add-ons:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable storage dns\n")),Object(o.b)("p",null,"You can optionally enable Kubernetes dashboard:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable dashboard\n")),Object(o.b)("h2",{id:"install-onepanel-core"},"Install Onepanel Core"),Object(o.b)("p",null,"Download the latest ",Object(o.b)("inlineCode",{parentName:"p"},"opctl")," for macOS from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/cli/releases/latest"}),"our release page")),Object(o.b)("p",null,"Run the following command to create ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," file for microk8s:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider microk8s --enable-efk-logging\n")),Object(o.b)("p",null,"Populate ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")," as outlined in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"installation-guides/configuration"}),"configuration documentation")),Object(o.b)("p",null,"Get Kubernetes config from MicroK8S:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass exec <microk8s-vm-name> -- /snap/bin/microk8s.config > kubeconfig\n")),Object(o.b)("p",null,"Finally, run the following command to deploy to your cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl apply\n")),Object(o.b)("p",null,"Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl auth token\n")),Object(o.b)("p",null,"You can then access Onepanel Core by going to ",Object(o.b)("inlineCode",{parentName:"p"},"http://<microk8s-vm-ip>:<uiHTTPort>")))}b.isMDXComponent=!0},119:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),b=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=b(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return t?l.a.createElement(d,c({ref:n},s,{components:t})):l.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);