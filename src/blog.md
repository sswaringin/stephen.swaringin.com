---
title: 'blog'
layout: 'layouts/blog.html'
permalink: '/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
test:
  obj:
    test: hello
pagination:
  data: collections.blog
  size: 5
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
