(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),o=(t(0),t(151));const r={title:"Quick start",sidebar_label:"Quick start",description:"Onepanel use case - computer vision automatic annotation"},i={id:"getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide",title:"Quick start",description:"Onepanel use case - computer vision automatic annotation",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide.md",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide.md",sidebar_label:"Quick start",sidebar:"gettingStarted",previous:{title:"Environment variables",permalink:"/docs/getting-started/concepts/environment-variables"},next:{title:"Semi-automatic annotation with CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation"}},s=[{value:"Setup",id:"setup",children:[]},{value:"Creating super user",id:"creating-super-user",children:[]},{value:"Setting up environment variables",id:"setting-up-environment-variables",children:[]},{value:"Creating new tasks",id:"creating-new-tasks",children:[]},{value:"Manual annotation",id:"manual-annotation",children:[{value:"Points",id:"points",children:[]},{value:"Bounding box",id:"bounding-box",children:[]},{value:"Polygons",id:"polygons",children:[]}]},{value:"Using pre-annotation model",id:"using-pre-annotation-model",children:[]},{value:"Training new annotation model",id:"training-new-annotation-model",children:[{value:"How to choose the model:",id:"how-to-choose-the-model",children:[]}]}],c={rightToc:s};function l({components:e,...n}){return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For this quick start, we'll be using OpenCV's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/opencv/cvat"}),"Computer Vision Annotation Tool (CVAT)"),". You will be able to use an existing model to pre-annotate your images or videos and then continuously train and improve your model on new data."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"In order to use CVAT on Onepanel, we need to create a new Workspace for CVAT. More information on Workspaces can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/concepts/workspaces"}),"here"),"."),Object(o.b)("p",null,"We will be using following Workspace Template to create the Workspace:"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'A copy of this template is readily available in "Template Builder"'))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'#specify all the required containers for cvat\n#this is very similar to the original docker-compose.yml file\n#specify containers, env vars, ports, volumes for each container\ncontainers:\n- name: cvat-db\n  image: postgres:10-alpine\n  env:\n  - name: POSTGRES_USER\n    value: root\n  - name: POSTGRES_DB\n    value: cvat\n  - name: POSTGRES_HOST_AUTH_METHOD\n    value: trust\n  - name: PGDATA\n    value: /var/lib/postgresql/data\n  ports:\n  - containerPort: 5432\n    name: tcp\n  volumeMounts:\n  - name: db\n    mountPath: /var/lib/postgresql\n- name: cvat-redis\n  image: redis:4.0-alpine\n  ports:\n  - containerPort: 6379\n    name: tcp\n- name: cvat\n  #use docker image from docker hum\n  image: onepanel/cvat:v0.6.23\n  env:\n  - name: DJANGO_MODWSGI_EXTRA_ARGS\n    value: ""\n  - name: ALLOWED_HOSTS\n    value: \'*\'\n  - name: CVAT_REDIS_HOST\n    value: localhost\n  - name: CVAT_POSTGRES_HOST\n    value: localhost\n  - name: CVAT_SHARE_URL\n    value: /home/django/data\n  ports:\n  - containerPort: 8080\n    name: http\n  volumeMounts:\n  - name: data\n    mountPath: /home/django/data\n  - name: keys\n    mountPath: /home/django/keys\n  - name: logs\n    mountPath: /home/django/logs\n  - name: models\n    mountPath: /home/django/models\n- name: cvat-ui\n  image: onepanel/cvat-ui:v0.6.23\n  ports:\n  - containerPort: 80\n    name: http\nports:\n- name: cvat-ui\n  port: 80\n  protocol: TCP\n  targetPort: 80\n- name: cvat\n  port: 8080\n  protocol: TCP\n  targetPort: 8080\nroutes:\n- match:\n  - uri:\n      regex: /api/.*|/git/.*|/tensorflow/.*|/auto_annotation/.*|/analytics/.*|/.*|/admin/.*|/documentation/.*|/dextr/.*|/reid/.*\n  - queryParams:\n      id:\n        regex: \\d+.*\n  route:\n  - destination:\n      port:\n        number: 8080\n- match:\n  - uri:\n      prefix: /\n  route:\n  - destination:\n      port:\n        number: 80\n#notify on slack once it got finished\npostExecutionWorkflow:\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify\n       command:\n       - sh\n       - -c\n')),Object(o.b)("p",null,"Here, we used Docker images for CVAT to create the Workspaces and exposed few ports for CVAT's use. "),Object(o.b)("h2",{id:"creating-super-user"},"Creating super user"),Object(o.b)("p",null,"CVAT requires super user permission to perform certain tasks. Onepanel automatically creates a superuser when you execute CVAT workflow. You can set ",Object(o.b)("inlineCode",{parentName:"p"},"username")," and ",Object(o.b)("inlineCode",{parentName:"p"},"password")," via environment variables shown below. If you don't specify those variables, the default ",Object(o.b)("inlineCode",{parentName:"p"},"username")," and ",Object(o.b)("inlineCode",{parentName:"p"},"password")," will be ",Object(o.b)("inlineCode",{parentName:"p"},"onepaneladmin")),Object(o.b)("h2",{id:"setting-up-environment-variables"},"Setting up environment variables"),Object(o.b)("p",null,"In order to use several features of CVAT such as training an annotaiton model we need to set some environment variables. You can easily set environment variables by clicking Settings button on top nav bar. This will open up a settings page, where you can set environment variables. Following is an example of setting an environment variable.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/env_set.PNG",alt:"Set Enviornment Variable"}))),Object(o.b)("p",null,"You need to set following environment variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AWS_BUCKET_NAME"),": Bucket you want to store your data into."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AWS_ACCESS_KEY_ID"),": AWS access key for training new annotation models."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),": AWS secret access key for training new annotation models."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AWS_S3_PREFIX"),": Directory in ",Object(o.b)("inlineCode",{parentName:"li"},"AWS_BUCKET_NAME")," where all the data will be stored."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ONEPANEL_OD_TEMPLATE_ID"),": Template ID for Tensorflow Object Detection. Required only if you are training a new annotation model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ONEPANEL_MASKRCNN_TEMPLATE_ID"),": Template ID for MaskRCNN Segmentation. Required only if you are training a new annotation model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ONEPANEL_AUTHORIZATION"),": Token/password for Onepanel login."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DJANGO_SUPERUSER_USERNAME"),": Username for the superuser."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DJANGO_SUPERUSER_PASSWORD"),": Password for the superuser.")),Object(o.b)("h2",{id:"creating-new-tasks"},"Creating new tasks"),Object(o.b)("p",null,"Once you're inside CVAT dashboard, you can create new tasks to start annotating. You will find a Create New Task button on top, clicking on it will open up a new pop up window as follows:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/create_new_task.PNG",alt:"Create New Task"}))),Object(o.b)("p",null,"Now, you give this task a name you like. Then, labels that you are interested in annotating (i.e car, bicycle). You also need to select the source of your data (images). You can upload from your local machine or use data uploaded to S3 (coming soon). ."),Object(o.b)("h2",{id:"manual-annotation"},"Manual annotation"),Object(o.b)("p",null,"Once you have created a new task, you can start annotating your data. CVAT supports points, box, polylines, polygons for annotation. So, the first thing you should do is go to left sidebar and select the type of annotation you want as shown below.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/rectange_new_cvat.PNG",alt:"Select Annotation"}))),Object(o.b)("h3",{id:"points"},"Points"),Object(o.b)("p",null,"If you want to annotate points, then select Points instead of Box which is a default choice. Once you select points, you can start annotating by clicking on Create Shape, clicking on image where you want to put the point and then click on stop shape. Or alternatively you can use keyboard shortcut N instead of Create Shape/Stop Shape. Make sure you periodically save your annotation by pressing ctrl + s."),Object(o.b)("h3",{id:"bounding-box"},"Bounding box"),Object(o.b)("p",null,"The same process follows for bounding boxes. Select Box and press N to start annotating once done, press N to finish annotation.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/draw_shape.PNG",alt:"Annotation"}))),Object(o.b)("p",null,"If you want to change the class of an object. Finish drawing bounding box around an object, then go to right sidebar and change the class from a dropdown menu. The same has been heighted in blue color in above picture."),Object(o.b)("h3",{id:"polygons"},"Polygons"),Object(o.b)("p",null,"Similarly, select polygons or polylines and follow same procedure for annotation."),Object(o.b)("h2",{id:"using-pre-annotation-model"},"Using pre-annotation model"),Object(o.b)("p",null,"Onepanel\u2019s CVAT supports a feature to pre-annotate images for common objects. In order to use any pre-annotation feature, you first need to upload the model. By default, we provide a default model for bounding box annotation. Click on Models, and give a name to it. Click on select files and upload your model (.pb and .csv file). Hit submit to upload the model.\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/upload_model.PNG",alt:"Model Manager"}))),Object(o.b)("p",null,"Once you submit your model, click on Models again and you will find your model in the list."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/upload_model_after.PNG",alt:"Uploaded Models"}))),Object(o.b)("p",null,"Once you have the models in Model Manager. Click on Automatic Annotation under Actions menu. Then, you will be asked to select the model you want to use for pre-annotation. You can also control the class mapping from your task\u2019s classes to model\u2019s classes. Once done, click on Submit to start pre-annotation. Once it's done, you can click on the task link to access the annotation."),Object(o.b)("h2",{id:"training-new-annotation-model"},"Training new annotation model"),Object(o.b)("p",null,"Onepanel also allows you to further finetune your model for annotation. Once you are done with your annotation or adjustment to pre-annotation, you can train a new model on it. To do so, go to dashboard and click on Actions under the task for which you want to train a model."),Object(o.b)("p",null,"There, you can select the Tensorflow OD API for bounding boxes or Mask RCNN for segmentation."),Object(o.b)("p",null,"For TensorFlow OD API, we support multiple models. In fact, its dynamic. You can also train the model you like as long as it is supported by Tensorflow Object Detection API. "),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/create_new_annotation_model.PNG",alt:"Create Annotation Model"}))),Object(o.b)("h3",{id:"how-to-choose-the-model"},"How to choose the model:"),Object(o.b)("p",null,"If you are unsure about which model to use, we usually suggest ssd-mobilenet-v2 since ssd-based models are faster and accurate enough for most of the work. Faster-rcnn (frcnn) models are more accurate in general but they will be relatively slow during training as well inference. If accuracy is more important to you, we suggest you go with frcnn-res50-coco model."))}l.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?o.a.createElement(b,s(s({ref:n},l),{},{components:t})):o.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);