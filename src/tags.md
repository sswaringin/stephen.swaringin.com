---
title: 'Tag Archive'
layout: 'layouts/blog.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - blog
    - work
    - rss
permalink: '/tag/{{ tag | slugify }}/'
---
