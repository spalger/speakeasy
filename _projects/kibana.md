---
title: "Kibana 4"
order: 0
repo:  "https://github.com/elastic/kibana"
url:   "https://www.elastic.co/products/kibana"
logo:  "/assets/images/kibana.png"
uses:
  - title: JavaScript
    img: /assets/images/js-icon.png
  - title: Node.js
    img: /assets/images/node-icon.png
  - title: Angular.js
    img: /assets/images/angular-icon.svg
  - title: less
    img: /assets/images/less-icon.png
---

Kibana is a **highly** complex single-page angular app for analyzing and visualizing data. The predecessor to this application, Kibana 3, was completely static and only required access to an elasticsearch cluster to function. With Kibana 4 we started with the same goal but decided to implement a back-end using node.js that removes the constraint of operating without a server.

In time we will take greater advantage of this server, but for now Kibana 4 behaves much like Kibana 3 and runs almost entirely client-side.
