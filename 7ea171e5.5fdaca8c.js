(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var i=a(3),s=a(7),n=(a(0),a(362)),r={id:"index-gettingstarted",title:"Storing and Querying Time Series data using Redis Stack",sidebar_label:"Storing and Querying Time Series data",slug:"/howtos/redistimeseries/getting-started",authors:["ajeet"]},o={unversionedId:"howtos/redistimeseries/getting-started/index-gettingstarted",id:"howtos/redistimeseries/getting-started/index-gettingstarted",isDocsHomePage:!1,title:"Storing and Querying Time Series data using Redis Stack",description:"RedisTimeseries is a Redis module developed by Redis Inc. to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With RedisTimeSeries, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf.",source:"@site/docs/howtos/redistimeseries/getting-started/index-redistimeseries.mdx",slug:"/howtos/redistimeseries/getting-started",permalink:"/howtos/redistimeseries/getting-started",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/getting-started/index-redistimeseries.mdx",version:"current",lastUpdatedAt:1648140661,sidebar_label:"Storing and Querying Time Series data",sidebar:"docs",previous:{title:"RedisTimeSeries Tutorial",permalink:"/howtos/redistimeseries/"},next:{title:"How to collect and process time-series data using Redis and Python",permalink:"/howtos/redistimeseries/using-python"}},d=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",children:[]},{value:"Step 2. Create Your database",id:"step-2-create-your-database",children:[]},{value:"Step 3.  Verify the database details",id:"step-3--verify-the-database-details",children:[]},{value:"Step 4. Install RedisInsight",id:"step-4-install-redisinsight",children:[]},{value:"Step 5. Add Redis database",id:"step-5-add-redis-database",children:[]},{value:"Step 6. Enter Redis Enterprise Cloud details",id:"step-6-enter-redis-enterprise-cloud-details",children:[]},{value:"Step 7. Verify the database under RedisInsight dashboard",id:"step-7-verify-the-database-under-redisinsight-dashboard",children:[]},{value:"Step 8. Getting Started with RedisTimeSeries",id:"step-8-getting-started-with-redistimeseries",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:d};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/modules/redis-timeseries/"}),"RedisTimeseries")," is a Redis module developed by Redis Inc. to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With RedisTimeSeries, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf."),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/nkUZqxjs2rk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),Object(n.b)("p",null,"Create your free ",Object(n.b)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"For a limited time, use ",Object(n.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(n.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(n.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(n.b)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),Object(n.b)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},'If you want to create a custom database with your preferred name and type of Redis,\nclick "Create a custom database" option shown in the image.'))),Object(n.b)("p",null,Object(n.b)("img",{alt:"create database ",src:a(880).default})),Object(n.b)("h3",{id:"step-3--verify-the-database-details"},"Step 3.  Verify the database details"),Object(n.b)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),Object(n.b)("p",null,Object(n.b)("img",{alt:"verify database",src:a(881).default})),Object(n.b)("h3",{id:"step-4-install-redisinsight"},"Step 4. Install RedisInsight"),Object(n.b)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),Object(n.b)("p",null,"You can install Redis Stack on your local system to get RedisInsight GUI tool up and running. Ensure that you have the ",Object(n.b)("inlineCode",{parentName:"p"},"brew")," package installed in your Mac system."),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),"  ==> Installing Cask redis-stack-redisinsight\n  ==> Moving App 'RedisInsight-preview.app' to '/Applications/RedisInsight-preview.app'\n  \ud83c\udf7a  redis-stack-redisinsight was successfully installed!\n  ==> Installing Cask redis-stack\n  \ud83c\udf7a  redis-stack was successfully installed!\n")),Object(n.b)("p",null,'Go to Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),Object(n.b)("h3",{id:"step-5-add-redis-database"},"Step 5. Add Redis database"),Object(n.b)("p",null,Object(n.b)("img",{alt:"access redisinsight",src:a(882).default})),Object(n.b)("h3",{id:"step-6-enter-redis-enterprise-cloud-details"},"Step 6. Enter Redis Enterprise Cloud details"),Object(n.b)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),Object(n.b)("p",null,Object(n.b)("img",{alt:"access redisinsight",src:a(883).default})),Object(n.b)("h3",{id:"step-7-verify-the-database-under-redisinsight-dashboard"},"Step 7. Verify the database under RedisInsight dashboard"),Object(n.b)("p",null,Object(n.b)("img",{alt:"database details",src:a(884).default})),Object(n.b)("h3",{id:"step-8-getting-started-with-redistimeseries"},"Step 8. Getting Started with RedisTimeSeries"),Object(n.b)("p",null,"This section will walk you through using some basic RedisTimeseries commands. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.)\nUsing a basic air-quality dataset, we will show you how to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a new time series"),Object(n.b)("li",{parentName:"ul"},"Add a new sample to the list of series"),Object(n.b)("li",{parentName:"ul"},"Query a range across one or multiple time series")),Object(n.b)("p",null,Object(n.b)("img",{alt:"RedisTimeSeries",src:a(885).default})),Object(n.b)("h4",{id:"create-a-new-time-series"},"Create a new time series"),Object(n.b)("p",null,"Let\u2019s create a time series representing air quality dataset measurements. To interact with RedisTimeSeries you will most often use the TS.RANGE command, but here you will create a time series per measurement using the TS.CREATE command. Once created, all the measurements will be sent using TS.ADD."),Object(n.b)("p",null,"The sample command below creates a time series and populates it with three entries:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),">> TS.CREATE ts:carbon_monoxide\n>> TS.CREATE ts:relative_humidity\n>> TS.CREATE ts:temperature RETENTION 60 LABELS sensor_id 2 area_id 32\n")),Object(n.b)("p",null,"In the above example, ts:carbon_monoxide, ts:relative_humidity and ts:temperature are key names. We are creating a time series with two labels (sensor_id and area_id are the fields with values 2 and 32 respectively) and a retention window of 60 milliseconds:"),Object(n.b)("h4",{id:"add-a-new-sample-data-to-the-time-series"},"Add a new sample data to the time series"),Object(n.b)("p",null,"Let\u2019s start to add samples into the keys that will be automatically created using this command:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112596200 2.4\n>> TS.ADD ts:relative_humidity 1112596200 18.3\n>> TS.ADD ts:temperature 1112599800 28.3\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112599800 2.1\n>> TS.ADD ts:relative_humidity 1112599800 13.5\n>> TS.ADD ts:temperature 1112603400 28.5 \n")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),">> TS.ADD ts:carbon_monoxide 1112603400 2.2\n>> TS.ADD ts:relative_humidity 1112603400 13.1\n>> TS.ADD ts:temperature 1112607000 28.7\n")),Object(n.b)("h4",{id:"querying-the-sample"},"Querying the sample"),Object(n.b)("p",null,"Now that you have sample data in your time series, you\u2019re ready to ask questions such as:"),Object(n.b)("h4",{id:"how-do-i-get-the-last-sample"},"\u201cHow do I get the last sample?\u201d"),Object(n.b)("p",null,"TS.GET is used to get the last sample. The returned array will contain the last sample timestamp followed by the last sample value, when the time series contains data:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'>> TS.GET ts:temperature\n1) (integer) 1112607000\n2) "28.7"\n')),Object(n.b)("h4",{id:"how-do-i-get-the-last-sample-matching-the-specific-filter"},"\u201cHow do I get the last sample matching the specific filter?\u201d"),Object(n.b)("p",null,"TS.MGET is used to get the last samples matching the specific filter:"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'>> TS.MGET FILTER area_id=32\n1) 1) "ts:temperature"\n   2) (empty list or set)\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),Object(n.b)("h4",{id:"how-do-i-get-the-sample-with-labels-matching-the-specific-filter"},"\u201cHow do I get the sample with labels matching the specific filter?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'>> TS.MGET WITHLABELS FILTER area_id=32\n1) 1) "ts:temperature"\n   2) 1) 1) "sensor_id"\n         2) "2"\n      2) 1) "area_id"\n         2) "32"\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),Object(n.b)("h4",{id:"query-a-range-across-one-or-more-time-series"},"Query a range across one or more time series"),Object(n.b)("p",null,"TS.RANGE is used to query a range in forward directions while TS.REVRANGE is used to query a range in reverse directions, They let you answer such questions as:"),Object(n.b)("h4",{id:"how-do-i-get-the-sample-for-a-time-range"},"\u201cHow do I get the sample for a time range?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),Object(n.b)("h4",{id:"aggregation"},"Aggregation"),Object(n.b)("p",null,"You can use various aggregation types such as  avg, sum, min, max, range, count, first, last etc. The example below example shows how to use \u201cavg\u201d aggregation type to answer such questions as:"),Object(n.b)("h4",{id:"how-do-i-get-the-sample-for-a-time-range-on-some-aggregation-rule"},"\u201cHow do I get the sample for a time range on some aggregation rule?\u201d"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400 AGGREGATION avg 2\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),Object(n.b)("h3",{id:"next-step"},"Next Step"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Learn more about RedisTimeSeries in the ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redistimeseries/"}),"Quickstart")," tutorial."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"}),"Build Your Financial Application on RedisTimeSeries")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"}),"Introduction to RedisTimeSeries - Video"))),Object(n.b)("h2",{id:""}),Object(n.b)("div",null,Object(n.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(n.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}l.isMDXComponent=!0},362:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var i=a(0),s=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=l(a),u=i,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||n;return a?s.a.createElement(m,o(o({ref:t},c),{},{components:a})):s.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<n;c++)r[c]=a[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},880:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"},881:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},882:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},883:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},884:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},885:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redistimeseriesflow-d1eddd903d258cb4835f7e975d8266c9.png"}}]);