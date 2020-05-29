(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(149)),i={title:"Workspace Templates",sidebar_label:"Workspace Templates"},s={id:"reference/workspaces/templates",title:"Workspace Templates",description:"See our Templates repository for a list of ready to use Workspace Template.",source:"@site/docs/reference/workspaces/templates.md",permalink:"/docs/reference/workspaces/templates",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workspaces/templates.md",sidebar_label:"Workspace Templates",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/reference/overview"},next:{title:"Launching a Workspace",permalink:"/docs/reference/workspaces/launching"}},c=[{value:"Getting started with Workspace Templates",id:"getting-started-with-workspace-templates",children:[]},{value:"Sections",id:"sections",children:[{value:"containers",id:"containers",children:[]},{value:"ports",id:"ports",children:[]},{value:"routes",id:"routes",children:[]},{value:"postExecutionWorkflow",id:"postexecutionworkflow",children:[]}]},{value:"More involved example",id:"more-involved-example",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/tree/master/workspaces"}),"Templates repository")," for a list of ready to use Workspace Template."))),Object(r.b)("h2",{id:"getting-started-with-workspace-templates"},"Getting started with Workspace Templates"),Object(r.b)("p",null,"You can define reusable templates for Workspaces. Workspace Templates are a combination of Docker images and a YAML definition. Here's a simple NGINX Workspace Template definition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Docker containers that are part of the Workspace\ncontainers:\n- name: http # A name for this container. Used to identify the container from any others you have.\n  image: nginxdemos/hello\n  ports:\n  - containerPort: 80  \n    name: http # a friendly name for the port.\n  # Volumes to be mounted in this container\n  # Onepanel will automatically create these volumes and mount them to the container.\n  # You choose the size when you start the workspace.\n  volumeMounts:\n  - name: data\n    mountPath: /data\n# Ports that need to be exposed\nports:\n- name: http # a friendly name. Does NOT have to match the container port.\n  port: 80 # A unique port number. If you have many ports, these must all be different. \n  protocol: TCP\n  targetPort: 80 # port on the container we want to target. This MUST match a container port above.\n# Routes that will map to ports.\nroutes:\n- match:\n  - uri:\n      prefix: / # our application sits at root, all traffic will go to it.\n  route:\n  - destination:\n      port:\n        number: 80 # This MUST match a port from ports above. Here, it matches the http port above.\n# DAG Workflow to be executed once a Workspace action completes\npostExecutionWorkflow:\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify\n       command:\n       - sh\n       - -c\n')),Object(r.b)("h2",{id:"sections"},"Sections"),Object(r.b)("h3",{id:"containers"},"containers"),Object(r.b)("p",null,"Here you define all information related to what application(s) you want to run.\nYou can customize the image used, configure any ports that are used by the image, and attach volume(s) for storing your data."),Object(r.b)("h4",{id:"image"},"image"),Object(r.b)("p",null,"The image you want to use for your application. "),Object(r.b)("p",null,"Some examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"nodered/node-red"),Object(r.b)("li",{parentName:"ul"},"codercom/code-server:3.3.1 "),Object(r.b)("li",{parentName:"ul"},"jupyter/tensorflow-notebook")),Object(r.b)("h4",{id:"container-ports"},"container ports"),Object(r.b)("p",null,"These are the ports needed by the image you use. Make sure to add all of the ones you want to have access to."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the ",Object(r.b)("inlineCode",{parentName:"li"},"nginxdemos/hello")," we need port ",Object(r.b)("em",{parentName:"li"},"80"),". "),Object(r.b)("li",{parentName:"ul"},"For ",Object(r.b)("inlineCode",{parentName:"li"},"jupyter/tensorflow-notebook")," we need port ",Object(r.b)("em",{parentName:"li"},"8888"),".")),Object(r.b)("h3",{id:"ports"},"ports"),Object(r.b)("p",null,"These identify what ports your workspace exposes and the protocol used. These are ",Object(r.b)("em",{parentName:"p"},"NOT")," the same as container ports.\nYour workspace will have a url you can visit in your browser, and it is the ports defined under this section that are visible.\nEach port maps to a container port. So if you have port ",Object(r.b)("em",{parentName:"p"},"8888")," on your container, but you want to reach it via http (port ",Object(r.b)("em",{parentName:"p"},"80"),"), use"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"ports:\n- name: http-to-custom\n  port: 80 \n  protocol: TCP\n  targetPort: 8888 # container port\n")),Object(r.b)("h3",{id:"routes"},"routes"),Object(r.b)("p",null,"These are the urls that you can reach on your workspace. Each one must map to a port defined under ",Object(r.b)("inlineCode",{parentName:"p"},"ports"),".\nIf you want the root of your workspace to take you to your only image, use this"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"routes:\n- match:\n  - uri:\n      prefix: /\n  route:\n  - destination:\n      port:\n        number: 80 # this is the port key under ports.\n")),Object(r.b)("h3",{id:"postexecutionworkflow"},"postExecutionWorkflow"),Object(r.b)("p",null,"This is a DAG workflow that runs after your workspace is ready. Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/workflows/templates"}),"Workflow templates")," for more information."),Object(r.b)("h2",{id:"more-involved-example"},"More involved example"),Object(r.b)("p",null,"Let's look at a more complicated example to cement some of these ideas."),Object(r.b)("p",null,"For this example, we're going to have both JupyterLab and Visual Studio Code in the same workspace.\nJupyterLab will be accessible at ",Object(r.b)("inlineCode",{parentName:"p"},"<url>/jupyterlab")," and Visual Studio Code will be at the root ",Object(r.b)("inlineCode",{parentName:"p"},"<url>/")," "),Object(r.b)("p",null,"Here's the final YAML, we've added comments to explain different parts."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"containers:\n- name: jupyterlab-tensorflow \n  image: jupyter/tensorflow-notebook # use jupyterlab\n  command: [start.sh, jupyter] # use the start.sh script with jupyter\n  env: # we define an environment variable because the parser doesn't like JSON in the arguments\n    - name: tornado # These are the tornado settings\n      # This allows us to embed jupyter in an iframe\n      value: \"{ 'headers': { 'Content-Security-Policy': \\\"frame-ancestors * 'self'\\\" }  }\"\n  args: \n    - lab\n    - --LabApp.token='' \n    - --LabApp.allow_remote_access=True\n    - --LabApp.allow_origin=\"*\"\n    - --LabApp.disable_check_xsrf=True\n    - --LabApp.trust_xheaders=True\n    - --LabApp.tornado_settings=$(tornado) \n    - --LabApp.base_url=/jupyter # this makes jupyter be okay with serving at /jupyter\n    - --notebook-dir='/data' # use the mounted volume for storing data\n  ports:\n  - containerPort: 8888 # jupyter, by default, wants port 8888\n    name: jupyterlab\n  volumeMounts:\n  - name: data\n    mountPath: /data\n- name: vs-code # here's our second container.\n  image: codercom/code-server \n  args: [\"--auth\", \"none\"] \n  ports:\n  - containerPort: 8080 # code-server wants port 8080\n    name: vscode\n  volumeMounts:\n  - name: data\n    mountPath: /home/coder # path that code-server uses\nports:\n- name: jupyterlab\n  port: 80 # we want jupyterlab at port 80\n  protocol: TCP\n  targetPort: 8888 # but it has to point to container port 8888\n- name: vscode\n  port: 8080 # we need another port for vscode, we can't use 80 since jupyterlab uses it. \n  protocol: TCP\n  targetPort: 8080 # container port is 8080 for code-server\nroutes:\n- match:\n  - uri:\n      prefix: /jupyter # put jupyter at /jupyter path\n  route:\n  - destination:\n      port:\n        number: 80 # and route it to port 80, which is where we put jupyter above\n- match:\n  - uri:\n      prefix: / #vscode runs at the default route\n  route:\n  - destination:\n      port:\n        number: 8080 # route it to 8080, which is what we set it to above\npostExecutionWorkflow: # let me know in slack when it's ready\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE=\"Your workspace is ready\" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE=\"Your workspace is now running\" ./slack-notify\n       command:\n       - sh\n       - -c\n")),Object(r.b)("p",null,"The comments in the YAML above should provide most of the information about the setup."),Object(r.b)("p",null,"The key points here are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We can have multiple containers running on the same workspace"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"ports")," section can be thought of as a mapping for ",Object(r.b)("inlineCode",{parentName:"li"},"routes")," to use"),Object(r.b)("li",{parentName:"ul"},"jupyter allows you to run at ",Object(r.b)("inlineCode",{parentName:"li"},"/jupyter")," as a setting. Not all software supports something like this. ")))}l.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||r;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);