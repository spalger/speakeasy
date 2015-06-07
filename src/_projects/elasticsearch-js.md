---
title: "Elasticsearch.js"
order: 1
repo:  "https://github.com/elastic/elasticsearch-js"
url:   "https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html"
uses:
  - js
---

Elasticsearch.js is the official low-level elasticsearch client for Node.js and the browser. It provides additional features like cluster-awareness, load-distribution, connection pooling, and a standardized interface that matches the other official clients.

The neat part about the client is how the APIs are all generated, using a custom code generation utility, by reading the [rest api spec](https://github.com/elastic/elasticsearch/tree/master/rest-api-spec/api) that is distributed with every version of elasticsearch. In the same vein, there is a [yaml test suite](https://github.com/elastic/elasticsearch/tree/master/rest-api-spec/test) which is maintained by the elasticearch team and run against all of the official clients every time a changes is made in master.

These two factors make managing elasticsearch.js something I can easily do while focusing full-time on Kibana.