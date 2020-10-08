(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,p=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return a?o.a.createElement(p,c(c({ref:t},l),{},{components:a})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_open-f720c7c0bf600fa4cefeb1de339d730d.png"},126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tf-object-detection-b6a97ad0987f3362c789cfb36af1ebce.png"},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cvat_select_workflow_execution-ec9d8925cf9110729a481ea6088aa571.png"},129:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/execution_url-d1c171f8a2d8e9af476838254702195d.png"},226:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/auto-annotation-v.2.0-af60b76ffd3ad5b3c15a83fcccf68970.png"},227:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/maskrcnn-training-aa9ea4c5cc2866ddd9135e01a85c3f80.png"},228:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/inference_output-d218275b94a62da9ee11a2a1675840ba.PNG"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),o=(a(0),a(113));const r={title:"Creating annotation models on CVAT",sidebar_label:"Creating annotation model",description:"Onepanel - vision AI automatic annotation"},i={unversionedId:"getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model",id:"getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model",isDocsHomePage:!1,title:"Creating annotation models on CVAT",description:"Onepanel - vision AI automatic annotation",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model.md",slug:"/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model.md",version:"current",sidebar_label:"Creating annotation model",sidebar:"reference",previous:{title:"Getting started",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_quick_guide"},next:{title:"Semi-automatic annotation with CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation"}},c=[{value:"Why pre-annotate?",id:"why-pre-annotate",children:[]},{value:"Training deep learning model through CVAT",id:"training-deep-learning-model-through-cvat",children:[]},{value:"TensorFlow Object Detection API",id:"tensorflow-object-detection-api",children:[{value:"Hyperparameters",id:"hyperparameters",children:[]},{value:"Choosing the right model",id:"choosing-the-right-model",children:[]}]},{value:"Training MaskRCNN model through CVAT",id:"training-maskrcnn-model-through-cvat",children:[]},{value:"How to run inference on test data using trained model",id:"how-to-run-inference-on-test-data-using-trained-model",children:[]},{value:"Notes",id:"notes",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-pre-annotate"},"Why pre-annotate?"),Object(o.b)("p",null,"Pre-annotation will cut the time to annotate large amounts of data by orders of magnitude. The idea is simple, annotate once then QC each successive dataset after."),Object(o.b)("p",null,"Once you have annotated enough data, you can train a model to pre-annotate the rest of your images with a few mouse clicks. This page provides information on the default models that we support. You can always add your custom models for pre-annotation. See our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model"}),"documentation")," for information on adding custom models."),Object(o.b)("h2",{id:"training-deep-learning-model-through-cvat"},"Training deep learning model through CVAT"),Object(o.b)("p",null,Object(o.b)("img",{alt:"CVAT flowchart",src:a(226).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Open")," for a task you want to train a model on."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Open task",src:a(122).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Job #X"),", where X could be any job number. Annotate few frames. For testing you can just annotate one frame. But ideally you want to have thousands of objects to train a deep learning model on. Alternatively, you can just run pre-annotation if your labels are common ones.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Actions")," for a task you want to train a model on. Then, click on ",Object(o.b)("strong",{parentName:"p"},"Execute training Workflow"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Select training workflow",src:a(128).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select Workflow template (i.e model to train). By default, you can use TensorFlow Object Detection for object detection or MaskRCNN for semantic segmentation. Below image shows a case for Tensorflow Object Detection."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Train a model from CVAT",src:a(126).default})),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note you can easily add your own models as well. See our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model"}),"documentation")," for more information on adding custom models. ")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update hyper-parameters and settings as per your requirements. Most of the parameters visible above are related to the model (MaskRCNN) and system (i.e machine). For this guide, you can change ",Object(o.b)("inlineCode",{parentName:"p"},"num-steps")," from default 10000 to 1000. You can also select the checkpoint path from previously trained model. You can leave it empty if you don't have an appropriate, previously trained model.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Submit"),". This will execute the Onepanel Workflow for selected model. You can see Workflow logs by going to Workflow execution page. You can find the URL for the same in the notification card."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Workflow URL",src:a(129).default})),Object(o.b)("p",{parentName:"li"},"Trained model and other outputs will be stored on cloud storage and will be synced with CVAT locally so that you can use this to pre-annotate other frames. "),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can also use this trained model to run pre-annotation in CVAT. See our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation"}),"documentation")," for more information on pre-annotation."))))),Object(o.b)("h2",{id:"tensorflow-object-detection-api"},"TensorFlow Object Detection API"),Object(o.b)("p",null,"You can use any of the models that we support for TensorFlow Object Detection API to train your custom pre-annotation models. Here, we provide a brief explanation on how to choose one model over another based on your needs. Some models are faster than others, whereas some are more accurate than others.  We hope this information will help you choose the right model for your task. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"TensorFlow Object Detection Workflow",src:a(126).default})),Object(o.b)("h3",{id:"hyperparameters"},"Hyperparameters"),Object(o.b)("p",null,"You can specify some arguments in the ",Object(o.b)("inlineCode",{parentName:"p"},"Hyperparameters")," field seperated by new line. "),Object(o.b)("p",null,"Here is a sample for Tensorflow Object Detection API: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"num-steps=100\n")),Object(o.b)("p",null,"Details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"num-steps : number of steps to train your model for. By default, we will train for an appropriate number of epochs depending upon the model."),Object(o.b)("li",{parentName:"ul"},"batch_size : batch size for the training"),Object(o.b)("li",{parentName:"ul"},"initial_learning_rate : initial learning rate for the model. We recommend you do not change this."),Object(o.b)("li",{parentName:"ul"},"num-clones (default=1): number of GPUs to train the model\xa0"),Object(o.b)("li",{parentName:"ul"},"schedule-step-1: step 1 for linear learning rate decay"),Object(o.b)("li",{parentName:"ul"},"schedule-step-2: step 2 for linear learning rate decay")),Object(o.b)("p",null,"Note that number of classes will be automatically populated if you have ",Object(o.b)("inlineCode",{parentName:"p"},"sys-num-classes")," parameter defined in a workflow. Also, if you select a Machine type with 4 GPUs (Tesla V100), the following command can be used:\n",Object(o.b)("inlineCode",{parentName:"p"},"num_clones=4")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Note that num_clones is 4 because there are 4 GPUs available.")),Object(o.b)("h3",{id:"choosing-the-right-model"},"Choosing the right model"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We currently support several faster-rcnn models. All of these models are similar except that of the backbone used for the feature extraction. The backbones used are, in increasing order of complexity (i.e more layers), ResNet50, ResNet101, InceptionResNetV2. As the model complexity increases the computation requirement will also increase. If you have very complicated data (i.e hundreds of annotations in one image), then it is recommended that you choose complex model (i.e InceptionResNetV2).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Faster-rcnn models are generally more accurate than ssd models. However, sometimes you are better off using ssd models if your data is easy to learn (i.e 1 or 2 bounding box per image)."))),Object(o.b)("h4",{id:"frcnn-nas-coco"},"frcnn-nas-coco:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are using ",Object(o.b)("inlineCode",{parentName:"li"},"frcnn-nas-coco"),", then choose a machine with at least 2 GPUs as this model requires more memory. A machine with 1 GPU will throw an error.")),Object(o.b)("p",null,"This is a type of faster-rcnn model with NAS backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2)."),Object(o.b)("p",null,"For how to set epochs, you can take a look at first model since both models are faster-rcnn based."),Object(o.b)("p",null,"Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(o.b)("h4",{id:"frcnn-res101-coco"},"frcnn-res101-coco:"),Object(o.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). "),Object(o.b)("p",null,"For how to set epochs, you can take a look at first model since both models are faster-rcnn based."),Object(o.b)("p",null,"Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(o.b)("h4",{id:"frcnn-res101-lowp"},"frcnn-res101-lowp"),Object(o.b)("p",null,"This is a type of faster-rcnn model with ResNet101 backbone with low number of proposals. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(o.b)("p",null,"For how to set epochs, you can take a look at first model since both models are faster-rcnn based."),Object(o.b)("p",null,"Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shonum_clones=4lts***: batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(o.b)("h4",{id:"frcnn-res50-coco"},"frcnn-res50-coco"),Object(o.b)("p",null," This is a type of faster-rcnn model with ResNet50 backbone. If you are not sure about which model to use then we recommend you use SSD based model (i.e ssd-mobilenet-v2). If you are looking for more complex and accurate model then check out frcnn-res101-coco or frcnn-inc-resv2-atr-coco."),Object(o.b)("p",null,"For how to set epochs, you can take a look at first model since both models are faster-rcnn based."),Object(o.b)("p",null,"Note that current implementation of faster-rcnn in TensorFlow Object Detection API does not support batch training. That is, you shouldn't change batch_size."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 1, learning_rate: 0.0003, epochs=10000"),Object(o.b)("h4",{id:"ssd-mobilenet-v2-coco"},"ssd-mobilenet-v2-coco"),Object(o.b)("p",null,"SSD-based networks such as ",Object(o.b)("inlineCode",{parentName:"p"},"ssd-mobilenet-v2")," are faster than faster-rcnn based models. However, they are not as accurate as faster-rcnn based models. This model is generally recommended since its accurate and fast enough. If you don't know much about your data or the complexity of your data, then we recommend you go with this model."),Object(o.b)("p",null,"You will find the pre-trained model and config file for ssd-mobilenetv2 model trained on COCO dataset."),Object(o.b)("p",null,"This model is a good place to start if you don't have any specific model in mind. If you are data is very complicated (i.e many annotations per image) then you should prefer faster-rcnn models over ssd."),Object(o.b)("p",null,"Depending upon your data, you can set epochs to train your model. There is no standard value which can work for all datasets. You generally have to try different number of epochs to get the best model. Ideally, you do so by monitoring loss of your model while training. But if you are looking for a recommendation. Then, we recommend you set epochs as follows: (number of images / batch_size (default: 24)) * 1000. For instance, if you have 100 images, then your epochs will be 4000 (rounded). Note that the model will be trained using a pre-trained model, so you don't need to train as long as you would have to when not using the pre-trained model."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Defaults")),": batch_size: 24, learning_rate: 0.004, epochs=10000"),Object(o.b)("p",null,"Note that same instructions apply for ",Object(o.b)("strong",{parentName:"p"},"ssd-mobilenet-v1")," and ",Object(o.b)("strong",{parentName:"p"},"ssd-mobilenet-lite"),". The only difference is the backbone model (i.e mobilenet v1) that they use."),Object(o.b)("h2",{id:"training-maskrcnn-model-through-cvat"},"Training MaskRCNN model through CVAT"),Object(o.b)("p",null,"MaskRCNN is a popular model for segmentation tasks. We use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/matterport/Mask_RCNN"}),"this")," implementation of MaskRCNN for training and inference."),Object(o.b)("p",null,"The process to train a Mask-RCNN model on CVAT is similar to the above process except that you need to select Mask-RCNN after clicking on Create Annotation Model."),Object(o.b)("p",null,Object(o.b)("img",{alt:"MaskRCNN Workflow",src:a(227).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Parameters")),": Even though you don't need to enter any other parameters to start the training of Mask-RCNN, it is recommended that you pass correct epochs according your data. Mask-RCNN is a very deep model which takes too much time to train and also to get enough accuracy.\nWe allow you to set epochs for three different parts of the model. These parts are called ",Object(o.b)("inlineCode",{parentName:"p"},"stage1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"stage2")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stage3"),". You can set corresponding epochs as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"stage-1-epochs=1\nstage-2-epochs=2\nstage-3-epochs=3\n")),Object(o.b)("p",null,"If you have few images (few hundreds), then we recommend you set total epochs (stage1+stage2+stage3) less than 10. We advise you set more epochs for stage1 than others. As your data size increases or the complexity of your data increases you might want to increase epochs. "),Object(o.b)("p",null,"If you have ~1000 images then you don't have to set any parameters, CVAT will take care of it."),Object(o.b)("h2",{id:"how-to-run-inference-on-test-data-using-trained-model"},"How to run inference on test data using trained model"),Object(o.b)("p",null,"Often you are required to make prediction on test data. Using CVAT on Onepanel, you can easily train/test your model and visualize output. Once you have the trained model, upload it to the CVAT by clicking on ",Object(o.b)("inlineCode",{parentName:"p"},"Create new model")," on ",Object(o.b)("inlineCode",{parentName:"p"},"models")," tab."),Object(o.b)("p",null,"Now, create a task with your test data."),Object(o.b)("p",null,"Click on Actions for that task and select Automatic annotation. Select the model you just uploaded and hit submit. It will run the inference using the model you selected. Below is a sample frame whose output was generated using the trained model. For more information on automatic annotation, See our guide on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./cvat_automatic_annotation"}),"automatic annotation"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Inference Output",src:a(228).default})),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There are certain parameters that are prefixed with ",Object(o.b)("inlineCode",{parentName:"li"},"cvat")," in TF Object Detection Training and MaskRCNN Training workflows. Those are special parameters and will be populated in whole or partly by the CVAT. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"cvat-output-path")," is generated by the CVAT and it won't be shown to users. Another example is ",Object(o.b)("inlineCode",{parentName:"li"},"cvat-finetune-checkpoint"),". CVAT will automatically find all available checkpoints for a given workflow/model since they are available locally because of file syncer. "),Object(o.b)("li",{parentName:"ul"},"Note that these instructions are for default models that we provide. You can always edit these workflows or even add your own workflows/models and train them."),Object(o.b)("li",{parentName:"ul"},"You  can find the code that connects  ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/onepanelio/cvat-training"}),"here"),".")))}l.isMDXComponent=!0}}]);