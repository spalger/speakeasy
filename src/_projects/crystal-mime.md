---
title: "crystal-mime"
order: 4
repo:  "https://github.com/spalger/crystal-mime"
uses:
  - crystal
---

This was a fun project, and the first and only bit of Crystal I ever published (so far). Unfortunately, at this time there isn't any way for dependencies to have dependencies in Crystal so the intented purpose of this library is no longer valid; web frameworks can't really rely on this unless every framework consumer also adds it as a dependency.