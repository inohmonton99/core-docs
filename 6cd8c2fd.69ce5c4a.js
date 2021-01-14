(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(124)),i={title:"ModelDB",sidebar_label:"ModelDB",description:"Information regarding [ModelDB](https://github.com/VertaAI/modeldb)"},c={unversionedId:"reference/services/modeldb",id:"reference/services/modeldb",isDocsHomePage:!1,title:"ModelDB",description:"Information regarding [ModelDB](https://github.com/VertaAI/modeldb)",source:"@site/docs/reference/services/modeldb.md",slug:"/reference/services/modeldb",permalink:"/docs/reference/services/modeldb",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/services/modeldb.md",version:"current",sidebar_label:"ModelDB"},s=[{value:"Overview",id:"overview",children:[]},{value:"Cloud Storage Setup",id:"cloud-storage-setup",children:[]},{value:"Using the SDK",id:"using-the-sdk",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/VertaAI/modeldb"}),"ModelDB")," is an open-source system to version machine learning models including their ingredients code, data, config, and environment and to track ML metadata across the model lifecycle."),Object(o.b)("h2",{id:"cloud-storage-setup"},"Cloud Storage Setup"),Object(o.b)("p",null,"In order to allow your deployment to access cloud storage such as S3, you need to update the CORS configuration for the bucket."),Object(o.b)("p",null,"The configuration below is sufficient,\nwhere "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"$ORIGIN")," = ",Object(o.b)("inlineCode",{parentName:"p"},"https://modeldb--$application.defaultNamespace.$application.domain")),Object(o.b)("p",null,"These ",Object(o.b)("inlineCode",{parentName:"p"},"$")," values come from your ",Object(o.b)("inlineCode",{parentName:"p"},"params.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n<CORSRule>\n    <AllowedOrigin>$ORIGIN</AllowedOrigin>\n    <AllowedMethod>GET</AllowedMethod>\n    <AllowedMethod>PUT</AllowedMethod>\n    <AllowedMethod>POST</AllowedMethod>\n    <AllowedMethod>DELETE</AllowedMethod>\n    <AllowedHeader>*</AllowedHeader>\n</CORSRule>\n</CORSConfiguration>\n')),Object(o.b)("h2",{id:"using-the-sdk"},"Using the SDK"),Object(o.b)("p",null,"In order to use ModelDB's SDK in a Workspace, run this to set up the connection."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from verta import Client\nimport os\n\nurl = os.getenv("ONEPANEL_SERVICES_MODELDB_API_URL")\n\nclient = Client(url, _connect=False)\nclient._conn.auth[\'onepanel-auth-token\'] = "<your token here>"\n\n# Code below is a sample to create a project and experiment.\n\nproj = client.set_project("My first ModelDB project")\nexpt = client.set_experiment("Default Experiment")\n\n# log the first run\nrun = client.set_experiment_run("Second Run")\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.verta.ai/en/master/examples/examples.html"}),"ModelDB documentation")," for examples using ModelDB's SDK with various frameworks."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"ModelDB needs two parts, a database and cloud storage.\nRight now only Postgres databases are supported."),Object(o.b)("p",null,"You can omit some cloud storage and database configuration, and Onepanel will use the information\nprovided under ",Object(o.b)("inlineCode",{parentName:"p"},"artifactRepository")," and ",Object(o.b)("inlineCode",{parentName:"p"},"database")," instead."),Object(o.b)("p",null,"Here's the minimal configuration required."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"services:\n  modelDb:\n    artifactRepository:\n      s3:\n        # An s3 bucket to store your modeldb artifacts\n        # The key/secret provided under artifactRepository config is used in this case.\n        bucket: example-modeldb-test\n        region: us-west-2\n    database:\n      # The name of the database where modeldb records will be stored.\n      # This will be automatically created if it does not exist\n      # The connection information under the database config is used in this case.\n      databaseName: modeldb\n      # This must be a database that already exists. It is used to establish a connection\n      # so the system can create the databaseName.\n      defaultDatabaseName: postgres\n")),Object(o.b)("p",null,"A complete configuration is below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"services:\n  modelDb:\n    artifactRepository:\n      s3:\n        accessKey: <access_key> \n        secretKey: <secret_key>\n        bucket: <bucket_name>\n        region: us-west-2\n    database:\n      databaseName: modeldb\n      defaultDatabaseName: postgres\n      host: <database_hose>\n      username: <database_username>\n      password: <database_password>\n      port: 5432\n")))}d.isMDXComponent=!0}}]);