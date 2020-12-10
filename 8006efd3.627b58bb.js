(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?a.a.createElement(d,o(o({ref:n},p),{},{components:t})):a.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},237:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/metrics-230759-a20681c8f267210e43423be97e890665.png"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),i=(t(0),t(125)),s={title:"Persisting training metrics",sidebar_label:"Persisting training metrics",description:"Onepanel - Persisting training metrics"},o={unversionedId:"reference/workflows/metrics",id:"reference/workflows/metrics",isDocsHomePage:!1,title:"Persisting training metrics",description:"Onepanel - Persisting training metrics",source:"@site/docs/reference/workflows/metrics.md",slug:"/reference/workflows/metrics",permalink:"/docs/reference/workflows/metrics",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/metrics.md",version:"current",sidebar_label:"Persisting training metrics",sidebar:"reference",previous:{title:"Creating a Workflow Template",permalink:"/docs/reference/workflows/create"},next:{title:"Accessing TensorBoard",permalink:"/docs/reference/workflows/tensorboard"}},c=[{value:"Persisting metrics metrics in tasks",id:"persisting-metrics-metrics-in-tasks",children:[]},{value:"Passing metrics between tasks",id:"passing-metrics-between-tasks",children:[]},{value:"Persisting metrics in Workflows",id:"persisting-metrics-in-workflows",children:[]}],p={rightToc:c};function l(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,s,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"persisting-metrics-metrics-in-tasks"},"Persisting metrics metrics in tasks"),Object(i.b)("p",null,"You can persist metrics into as JSON in a special file ",Object(i.b)("inlineCode",{parentName:"p"},"/tmp/sys-metrics.json"),". The JSON syntax is as an array as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n      "name": "accuracy", // Name of metric, should be string\n      "value": 0.98,      // Value of metric, should be a `number`\n      "format": ""        // Optional, valid values: "" or "%"\n    },\n    ...\n]\n')),Object(i.b)("p",null,"Here's an example in Python:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import json\n\n# JSON format for metrics\nmetrics = [\n    {'name': 'accuracy', 'value': 0.981},\n    {'name': 'loss', 'value': 0.018},\n]\n\n# Write metrics to `/tmp/sys-metrics.json`\nwith open('/tmp/sys-metrics.json', 'w') as f:\n    json.dump(metrics, f)\n")),Object(i.b)("p",null,"Once the Workflow task completes, you can view these metrics under ",Object(i.b)("strong",{parentName:"p"},"Artifacts")," in the task info panel:"),Object(i.b)("p",null,Object(i.b)("img",{src:t(237).default})),Object(i.b)("h2",{id:"passing-metrics-between-tasks"},"Passing metrics between tasks"),Object(i.b)("p",null,"Onepanel automatically outputs a ",Object(i.b)("inlineCode",{parentName:"p"},"sys-metrics")," artifact from a completed task, which you can access in a subsequent task as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\ntemplates:\n  - name: main\n    dag:\n      tasks:\n      - name: A\n        template: task-a-script\n      - name: B\n        dependencies: [A]\n        template: task-b-script\n        arguments:\n          # Use sys-metrics artifact output from task A\n          artifacts:\n          - name: task-a-metrics\n            from: \"{{tasks.A.outputs.artifacts.sys-metrics}}\"\n  - name: task-a-script\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # JSON format for metrics\n        metrics = [\n          {'name': 'accuracy', 'value': 0.981},\n          {'name': 'loss', 'value': 0.018},\n        ]\n        \n        # Write metrics to `/tmp/sys-metrics.json`\n        with open('/tmp/sys-metrics.json', 'w') as f:\n            json.dump(metrics, f)\n  \n  - name: task-b-script\n    inputs:\n      artifacts:\n      # Mount the argument to `/tmp/task-a-metrics.json` file\n      # You can optionally write to `/tmp/sys-metrics.json` to \n      # continously pass metrics to subsequent tasks.\n      - name: task-a-metrics\n        path: /tmp/task-a-metrics.json\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # Load Task A metrics\n        with open('/tmp/task-a-metrics.json') as f:\n            task_a_metrics = json.load(f)\n        \n        # Print to logs (optional)\n        print(task_a_metrics)\n")),Object(i.b)("h2",{id:"persisting-metrics-in-workflows"},"Persisting metrics in Workflows"),Object(i.b)("p",null,"You can use Onepanel's ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk#pip-install"}),"Python SDK")," to persist final metrics for a Workflow. These metrics are displayed in Workflow listing and detail pages and can also be edited using the web UI."),Object(i.b)("p",null,"The Python SDK snippet looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Set metrics variable to be passed into Onepanel SDK\nmetrics = [\n    {'name': 'accuracy', 'value': 0.981},\n    {'name': 'loss', 'value': 0.018}\n]\n\n# Configure API authorization\nconfiguration = onepanel.core.api.Configuration(\n    host = '<api-url>',\n    api_key = {\n        'authorization': '<token>'\n    }\n)\nconfiguration.api_key_prefix['authorization'] = 'Bearer'\n\n# Call SDK method to save metrics\nwith onepanel.core.api.ApiClient(configuration) as api_client:\n    api_instance = onepanel.core.api.WorkflowServiceApi(api_client)\n    namespace = '<namespace>'\n    uid = '<workflow-uid>'\n    body = onepanel.core.api.AddWorkflowExecutionsMetricsRequest()\n    body.metrics = metrics\n    try:\n        api_response = api_instance.add_workflow_execution_metrics(namespace, uid, body)\n        print('Metrics added.')\n    except ApiException as e:\n        print(\"Exception when calling WorkflowServiceApi->add_workflow_execution_metrics: %s\\n\" % e)\n")),Object(i.b)("p",null,"Here's a full Python script example that installs Onepanel's SDK and persists metrics in a Workflow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{7-8,10-13,38-68}","{7-8,10-13,38-68}":!0}),"import os\nimport datetime\nimport subprocess\nimport sys\nimport tensorflow as tf\n\n# Install onepanel-sdk\nsubprocess.check_call([sys.executable, '-m', 'pip', 'install', 'onepanel-sdk==0.16.0b10'])\n\nimport onepanel.core.api\nfrom onepanel.core.api.models.metric import Metric\nfrom onepanel.core.api.rest import ApiException\nfrom onepanel.core.api.models import Parameter\n\nmnist = tf.keras.datasets.mnist\n\n(x_train, y_train),(x_test, y_test) = mnist.load_data()\nx_train, x_test = x_train / 255.0, x_test / 255.0\n\ndef create_model():\n  return tf.keras.models.Sequential([\n    tf.keras.layers.Flatten(input_shape=(28, 28)),\n    tf.keras.layers.Dense(512, activation='relu'),\n    tf.keras.layers.Dropout(0.2),\n    tf.keras.layers.Dense(10, activation='softmax')\n  ])\n\nmodel = create_model()\nmodel.compile(optimizer='adam',\n              loss='sparse_categorical_crossentropy',\n              metrics=['accuracy'])\n\nhistory = model.fit(x=x_train, \n          y=y_train, \n          epochs=10, \n          validation_data=(x_test, y_test))\n\n# Set metrics variable to be passed into Onepanel SDK\nmetrics = [\n    {'name': 'accuracy', 'value': history.history['accuracy'][-1]},\n    {'name': 'loss', 'value': history.history['loss'][-1]}\n]\n\n# Get mounted service account token to use as API Key\nwith open('/var/run/secrets/kubernetes.io/serviceaccount/token') as f:\n    token = f.read()\n\n# Configure API authorization\nconfiguration = onepanel.core.api.Configuration(\n    host = os.getenv('ONEPANEL_API_URL'),\n    api_key = {\n        'authorization': token\n    }\n)\nconfiguration.api_key_prefix['authorization'] = 'Bearer'\n\n# Call SDK method to save metrics\nwith onepanel.core.api.ApiClient(configuration) as api_client:\n    api_instance = onepanel.core.api.WorkflowServiceApi(api_client)\n    namespace = '{{workflow.namespace}}'\n    uid = '{{workflow.name}}'\n    body = onepanel.core.api.AddWorkflowExecutionsMetricsRequest()\n    body.metrics = metrics\n    try:\n        api_response = api_instance.add_workflow_execution_metrics(namespace, uid, body)\n        print('Metrics added.')\n    except ApiException as e:\n        print(\"Exception when calling WorkflowServiceApi->add_workflow_execution_metrics: %s\\n\" % e)\n")),Object(i.b)("p",null,"You can use the above example in a Workflow script template:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"- name: metrics-example\n  script: \n    image: tensorflow/tensorflow:2.3.0\n    command: [python, '-u']\n    source: |\n      <INSERT ABOVE SCRIPT HERE>\n")))}l.isMDXComponent=!0}}]);