---
title: "Kibana 4"
repo:  "https://github.com/elastic/kibana"
url:   "https://www.elastic.co/products/kibana"
---

Kibana is a flexible analytics and visualization tool written as a **highly** complex single-page angular app. The predecessor to this application, Kibana 3, was completely static and only required access to an elasticsearch cluster to function. With Kibana 4 we started with the same goal but decided to implement a back-end using node.js that removes the constraint of operating without a server.

In time we will take greater advantage of this server, but for now Kibana 4 behaves much like Kibana 3 and runs almost entirely client-side.