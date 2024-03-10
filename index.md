---
layout: default
title: "amreus"
---

Not much going on here at the moment. Have a look at some [sketches](sketches.html).


<!--
Sketches by Tag:

{% assign tags =  site.sketches | map: 'tags' | uniq %}

{% for tag in tags %}
  {{ tag }}
  <ul>
  {% for note in site.sketches %}
    {% if note.tags contains tag %}
    <li><a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a> {{note.date}}</li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}

categories

{% assign tags =  site.sketches | map: 'categories' | uniq %}

{% for tag in tags %}
  {{ tag }}
  <ul>
  {% for note in site.sketches %}
    {% if note.categories contains tag %}
    <li><a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a> {{note.date}}</li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}


-->