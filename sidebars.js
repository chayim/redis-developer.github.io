module.exports = {
  docs: [{
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'category',
      label: 'Create',
      items: [
        'create/index-create',
        'create/redis-stack/index-redis-stack',
        'create/redis-functions/index-redis-functions',
        'create/rediscloud/index-rediscloud',
        {
          type: 'category',
          label: 'Redis on Heroku',
          items: [
            'create/heroku/index-heroku',
            'create/heroku/portal/index-heroku-portal',
            'create/heroku/herokujava/index-herokujava',
            'create/heroku/herokunodejs/index-herokunodejs',
            'create/heroku/herokupython/index-herokupython',
            'create/heroku/ratelimiting-go/index-ratelimitinggo',
            'create/heroku/herokuruby/index-herokuruby',
            'create/heroku/herokugo/index-herokugo'
          ]
        },
        {
          type: 'category',
          label: 'Redis on Azure Cache',
          items: [
            'create/azure/index-azure',
            'create/azure/portal/index-azure-portal',
            'create/azure/terraform-simple/index-azure-terraform-simple',
            'create/azure/terraform-private-endpoint/index-azure-terraform-private-endpoint'
          ]
        },
        'create/gcp/index-gcp',
        {
          type: 'category',
          label: 'Redis on AWS',
          items: [
            'create/aws/index-aws',
            'create/aws/redis-on-aws/index-redis-on-aws',
            'create/aws/slackbot/index-slackbot',
            'create/aws/terraform/index-terraform',
            'create/aws/bidding-on-aws/index-bidding-on-aws',
            'create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud',
            'create/aws/chatapp/index-chatapp',
            'create/aws/analytics-using-aws/index-analytics-using-aws'
          ]
        },
        {
          type: 'category',
          label: 'Redis on Docker',
          items: [
            'create/docker/index-docker',
            'create/docker/redis-on-docker/index-redis-on-docker',
            'create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis'
          ]
        },
        {
          type: 'category',
          label: 'Redis on Kubernetes',
          items: [
            'create/kubernetes/index-kubernetes',
            'create/kubernetes/kubernetes-gke/index-kubernetes-gke',
            'create/kubernetes/kubernetes-operator/index-kubernetes-operator'
          ]
        },
        'create/homebrew/index-homebrew',
        'create/windows/index-windows',
        'create/from-source/index-from-source',
        'create/jenkins/index-jenkins',
        'create/openshift/index-openshift',
        {
          type: 'category',
          label: 'Redis using Netlify',
          items: [
            'create/netlify/getting-started-with-netlify/index-getting-started-with-netlify',
            'create/netlify/deploy-docusaurus-to-netlify/index-deploy-docusaurus-to-netlify',
          ]
        },
        {
          type: 'category',
          label: 'Redis using Vercel',
          items: [
            'create/vercel/index-vercel',
          ]
        },
        {
          type: 'category',
          label: 'Redis using Cloud Run',
          items: [
            'create/cloudrun/index-cloudrun',
          ]
        },
        {
          type: 'category',
          label: 'Redis using Azure Functions',
          items: [
            'create/azurefunctions/index-azurefunctions',
          ]
        },
        {
          type: 'category',
          label: 'Redis using Portainer',
          items: [
            'create/portainer/index-portainer',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/index-develop',
        {
          type: 'category',
          label: 'Java',
          items: [
            'develop/java/index-java',
            {
              type: 'category',
              label: 'Spring',
              items: [
                'develop/java/spring/index-spring',
                {
                  type: 'category',
                  label: 'Redis OM Tutorial',
                  items: [
                    'develop/java/spring/redis-om/redis-om-spring',
                    'develop/java/spring/redis-om/redis-om-spring-json',
                    'develop/java/spring/redis-om/redis-om-spring-hash',
                  ]
                },
                {
                  type: 'category',
                  label: 'Redis and Spring Course',
                  items: [
                    'develop/java/spring/redis-and-spring-course/index-redis-and-spring-course',
                    'develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1',
                    'develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2',
                    'develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3',
                    'develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4',
                    'develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5',
                    'develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6',
                    'develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7',
                    'develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8',
                    'develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9'
                  ]
                },
                {
                  type: 'category',
                  label: 'Rate Limiting',
                  items: [
                    'develop/java/spring/rate-limiting/index-ratelimiting',
                    {
                      type: 'category',
                      label: 'Fixed Window',
                      items: [
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-lua',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears'
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        'develop/C/index-c',
        {
          type: 'category',
          label: 'Node.js',
          items: [
            'develop/node/index-node',
            'develop/node/gettingstarted/index-gettingstarted',
            {
              type: 'category',
              label: 'Node.js Crash Course',
              items: [
                'develop/node/node-crash-course/index-node-crash-course',
                'develop/node/node-crash-course/welcome/index-welcome',
                'develop/node/node-crash-course/whatisredis/index-whatisredis',
                'develop/node/node-crash-course/redisandnodejs/index-redisandnodejs',
                'develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight',
                'develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview',
                'develop/node/node-crash-course/runningtheapplication/index-runningtheapplication',
                'develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes',
                'develop/node/node-crash-course/introductiontomodules/index-introductiontomodules',
                'develop/node/node-crash-course/redisjson/index-redisjson',
                'develop/node/node-crash-course/redisearch/index-redisearch',
                'develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams',
                'develop/node/node-crash-course/managingsuccess/index-managingsuccess',
                'develop/node/node-crash-course/caching/index-caching',
                'develop/node/node-crash-course/sessionstorage/index-sessionstorage',
                'develop/node/node-crash-course/advancedstreams/index-advancedstreams',
                'develop/node/node-crash-course/redisbloom/index-redisbloom',
                'develop/node/node-crash-course/coursewrapup/index-coursewrapup',
              ]
            },
            'develop/node/redis-om/index-redis-om'
          ]
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            'develop/python/index-python',
            'develop/python/fastapi/index-fastapi'
          ]
        }, {
          type: 'category',
          label: '.NET',
          items: [
            'develop/dotnet/index-dotnet',
            {
              type: 'category',
              label: 'ASP.NET Core',
              items: [{
                  type: 'category',
                  label: 'Rate Limiting',
                  items: [
                    'develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting',
                    'develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting',
                    'develop/dotnet/aspnetcore/rate-limiting/middleware/byo-rate-limiter-middleware'
                  ]
                },
                {
                  type: 'category',
                  label: 'Caching',
                  items: [
                    'develop/dotnet/aspnetcore/caching/basic/index-basic-caching'
                  ]
                }

              ]
            },
            {
              type: 'category',
              label: 'Redis OM Dotnet',
              items: [
                'develop/dotnet/redis-om-dotnet/getting-started/getting-started',
                'develop/dotnet/redis-om-dotnet/add-and-retrieve-objects/add-and-retrieve-objects',
                'develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index',
                {
                  type: 'category',
                  label: 'Querying',
                  items: [
                    'develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries',
                    'develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries',
                    'develop/dotnet/redis-om-dotnet/searching/geo-filters/geo-filters',
                  ]
                },
                {
                  type: 'category',
                  label: 'Aggregations',
                  items: [
                    'develop/dotnet/redis-om-dotnet/aggregations/intro/intro',
                    'develop/dotnet/redis-om-dotnet/aggregations/apply-functions/apply-functions',
                    'develop/dotnet/redis-om-dotnet/aggregations/groups/groups'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Streams',
              items: ['develop/dotnet/streams/stream-basics',
                {
                  type: 'category',
                  label: "Blocking Reads",
                  items: [
                    'develop/dotnet/streams/blocking-reads/blocking-reads',
                    'develop/dotnet/streams/blocking-reads/service-stack/service-stack',
                    'develop/dotnet/streams/blocking-reads/cs-redis/cs-redis',
                  ]
                }
              ]
            }
          ]
        },
        'develop/golang/index-golang',
        'develop/ruby/index-ruby',
        'develop/php/index-php',
        'develop/deno/index-deno',
      ]
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/index-explore',
        'explore/what-is-redis/index-what-is-redis',
        'explore/import/index-import',
        {
          type: 'category',
          label: 'RedisInsight v2.x',
          items: [
            'explore/redisinsightv2/index-redisinsightv2',
            'explore/redisinsightv2/getting-started/index-gettingstarted',
            'explore/redisinsightv2/windows/index-windows',
            'explore/redisinsightv2/browser/index-browser',
            'explore/redisinsightv2/profiler/index-profiler',
            'explore/redisinsightv2/redisearch/index-redisearch',
          ]
        },
        {
          type: 'category',
          label: 'RedisInsight v1.x',
          items: [
            'explore/redisinsight/index-redisinsight',
            'explore/redisinsight/getting-started/index-gettingstarted',
            'explore/redisinsight/browser/index-browser',
            'explore/redisinsight/slowlog/index-slowlog',
            'explore/redisinsight/memoryanalyzer/index-memoryanalyzer',
            'explore/redisinsight/cluster/index-cluster',
            'explore/redisinsight/streams/index-streams',
            'explore/redisinsight/profiler/index-profiler',
            'explore/redisinsight/redisgraph/index-redisgraph',
            'explore/redisinsight/redisgears/index-redisgears',
            'explore/redisinsight/redistimeseries/index-redistimeseries',
            'explore/redisinsight/redisearch/index-redisearch',
            'explore/redisinsight/autodiscover/index-autodiscover',
            'explore/redisinsight/usinghelm/index-usinghelm',
          ]
        },
        'explore/redisdatasource/index-redisdatasource',
        'explore/redisexplorer/index-redisexplorer',
        'explore/datadog/index-datadog',
        'explore/redismod/index-redismod',
        'explore/riot/index-riot',
      ]
    },
    {
      type: 'category',
      label: 'Operate',
      items: [
        'operate/index-operate',
        {
          type: 'category',
          label: 'Continuous Integration/Deployment',
          items: [
            'operate/continuous-integration-continuous-deployment/index-continuous-integration-continuous-deployment',
            'operate/continuous-integration-continuous-deployment/jenkins/index-jenkins',
            'operate/continuous-integration-continuous-deployment/circleci/index-circleci',
            'operate/continuous-integration-continuous-deployment/argocd/index-argocd',
          ]
        },
        {
          type: 'category',
          label: 'Observability',
          items: [
            'operate/observability/index-observability',
            'operate/observability/redisdatasource/index-redisdatasource',
            'operate/observability/redisexplorer/index-redisexplorer',
            'operate/observability/datadog/index-datadog',
            'operate/observability/prometheus/index-prometheus',
          ]
        },
        {
          type: 'category',
          label: 'Provisioning',
          items: [
            'operate/provisioning/index-provisioning',
            'operate/provisioning/terraform/index-terraform',
            'operate/provisioning/azure-cache-terraform/index-azure-cache-terraform',
            'operate/provisioning/azure-cache-terraform-private/index-azure-cache-terraform-private',
          ]
        },
        {
          type: 'category',
          label: 'Running Redis at Scale',
          items: [
            'operate/redis-at-scale/index-redis-at-scale',
            {
              type: 'category',
              label: '1 Talking to Redis',
              items: [
                'operate/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview',
                'operate/redis-at-scale/talking-to-redis/command-line-tool/index-command-line-tool',
                'operate/redis-at-scale/talking-to-redis/configuring-a-redis-server/index-configuring-a-redis-server',
                'operate/redis-at-scale/talking-to-redis/redis-clients/index-redis-clients',
                'operate/redis-at-scale/talking-to-redis/client-performance-improvements/index-client-performance-improvements',
                'operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning',

              ]
            },
            {
              type: 'category',
              label: '2 Persistence & Durability',
              items: [
                'operate/redis-at-scale/persistence-and-durability/introduction/index-introduction',
                'operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis',
                'operate/redis-at-scale/persistence-and-durability/exercise/index-exercise',
              ]
            },
            {
              type: 'category',
              label: '3 High Availability',
              items: [
                'operate/redis-at-scale/high-availability/introduction/index-introduction',
                'operate/redis-at-scale/high-availability/basic-replication/index-basic-replication',
                'operate/redis-at-scale/high-availability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels',
                'operate/redis-at-scale/high-availability/exercise-2/index-exercise-2',
              ]
            },
            {
              type: 'category',
              label: '4 Scalability',
              items: [
                'operate/redis-at-scale/scalability/clustering-in-redis/index-clustering-in-redis',
                'operate/redis-at-scale/scalability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster',
                'operate/redis-at-scale/scalability/redis-cluster-and-client-libraries/index-redis-cluster-and-client-libraries',
              ]
            },
            {
              type: 'category',
              label: '5 Observability',
              items: [
                'operate/redis-at-scale/observability/introduction/index-introduction',
                'operate/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis',
                'operate/redis-at-scale/observability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/observability/identifying-issues/index-identifying-issues',
              ]
            },
            {
              type: 'category',
              label: '6 Course wrap-up',
              items: [
                'operate/redis-at-scale/course-wrap-up/index-wrap-up',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Orchestration',
          items: [
            'operate/orchestration/index-orchestration',
            'operate/orchestration/docker/index-docker',
            'operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis',
            'operate/orchestration/kubernetes/index-kubernetes',
            'operate/orchestration/kubernetes-operator/index-kubernetes-operator',
          ]
        },
      ]

    },
    {
      type: 'category',
      label: 'HowTos & Tutorials',
      items: [
        'howtos/index-howtos',
        'howtos/redisearch/index-redisearch',
        {
          type: 'category',
          label: 'RedisJSON Tutorial',
          items: [
            'howtos/redisjson/index-redisjson',
            'howtos/redisjson/getting-started/index-gettingstarted',
            'howtos/redisjson/using-python/index-usingpython',
            'howtos/redisjson/using-nodejs/index-usingnodejs',
            'howtos/redisjson/using-ruby/index-usingruby',
            'howtos/redisjson/using-go/index-usinggo',
            'howtos/redisjson/using-java/index-usingjava',
            'howtos/redisjson/using-redisinsight/index-usingredisinsight',
            'howtos/redisjson/storing-complex-json-document/index-storing-complex-json-document',
            'howtos/redisjson/jsonind-document/index-jsonind-document',
            'howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet',
            'howtos/redisjson/shoppingcart/index-shoppingcart',
            'howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs',
          ]
        },
        {
          type: 'category',
          label: 'RedisTimeSeries Tutorial',
          items: [
            'howtos/redistimeseries/index-redistimeseries',
            'howtos/redistimeseries/getting-started/index-gettingstarted',
            'howtos/redistimeseries/using-python/index-usingpython',
            'howtos/redistimeseries/using-dotnet/index-usingdotnet',
            'howtos/redistimeseries/using-go/index-usinggo',
            'howtos/redistimeseries/using-prometheus/index-usingprometheus',
          ]
        },
        {
          type: 'category',
          label: 'RedisGraph Tutorial',
          items: [
            'howtos/redisgraph/index-redisgraph',
            'howtos/redisgraph/getting-started/index-gettingstarted',
            'howtos/redisgraph/explore-python-code/index-explorepythoncode',
            'howtos/redisgraph/using-redisinsight/index-usingredisinsight',
            'howtos/redisgraph/using-dotnet/index-using-dotnet',
            'howtos/redisgraph/using-python/index-usingpython',
            'howtos/redisgraph/using-ruby/index-usingruby',
            'howtos/redisgraph/using-javascript/index-usingjavascript',
            'howtos/redisgraph/using-go/index-usinggo',
            'howtos/redisgraph/using-rust/index-usingrust',
            'howtos/redisgraph/redisgraphmovies/index-redisgraphmovies',
            'howtos/redisgraph/csvtograph/index-csvtograph',
          ]
        },
        {
          type: 'category',
          label: 'Redis Bloom Tutorial',
          items: [
            'howtos/redisbloom/index-redisbloom',
            'howtos/redisbloom/with-dotnet/redisbloom-withdotnet'
          ]
        },
        'howtos/redisgears/index-redisgears',
        {
          type: 'category',
          label: 'RedisAI Tutorial',
          items: [
            'howtos/redisai/index-redisai',
            'howtos/redisai/getting-started/index-gettingstarted',
            'howtos/redisai/market-basket-analysis/index-market-basket-analysis'
          ]
        },
        'howtos/leaderboard/index-leaderboard',
        'howtos/ratelimiting/index-ratelimiting',
        'howtos/caching/index-caching',
        {
          type: 'category',
          label: 'How to list & search Movies database using RediSearch',
          items: [
            'howtos/moviesdatabase/getting-started/index-gettingstarted',
            'howtos/moviesdatabase/install/index-install',
            'howtos/moviesdatabase/create/index-create',
            'howtos/moviesdatabase/query/index-query',
            'howtos/moviesdatabase/manage/index-manage',
            'howtos/moviesdatabase/import/index-import',
            'howtos/moviesdatabase/querymovies/index-querymovies',
            'howtos/moviesdatabase/aggregation/index-aggregation',
            'howtos/moviesdatabase/advancedoption/index-advancedoption',
            'howtos/moviesdatabase/sampleapp/index-sampleapp',
          ]
        },
        'howtos/chatapp/index-chatapp',
        'howtos/frauddetection/index-frauddetection',
        'howtos/redisgraphmovies/index-redisgraphmovies',
        'howtos/nlp/index-nlp',
        'howtos/hackernews/index-hackernews',
        'howtos/antipatterns/index-antipatterns',
        'howtos/socialnetwork/index-socialnetwork',
        'howtos/security/index-tls',
        'howtos/analytics/index-analytics',
        'howtos/popupstore/index-popupstore',
        'howtos/herokunodejs/index-herokunodejs',
        'howtos/herokupython/index-herokupython',
        'howtos/herokujava/index-herokujava',
      ]
    },
    {
      type: 'category',
      label: 'Get Involved',
      items: [
        'get-involved/index-getinvolved',
        'get-involved/devcember/index-devcember',
        {
          type: 'category',
          label: 'Hacktoberfest 2021',
          items: [
            'get-involved/hacktoberfest/index-hacktoberfest',
            'get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story',
            'get-involved/hacktoberfest/vincent-aceto-story/index-vincent-aceto-story'
          ]
        },
        'get-involved/discord/index-discord',
        'get-involved/redis-live/index-redis-live',
      ]
    },

  ]
};