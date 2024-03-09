---
title: p5 Sketches
layout: page
permalink: /sketches/
---

Attempting to setup a site using jekyll with some p5.js content.

{% for sketch in site.sketches %}
<div>
<!--{{ sketch.methods }}
title:{{ sketch.title }}
url:{{ sketch.url }}
rel:{{ sketch.url | relative_url }}
-->

<a href="{{ sketch.url }}">{{sketch.title}}</a>
{{ sketch.caption }}
</div>

{% endfor %}
