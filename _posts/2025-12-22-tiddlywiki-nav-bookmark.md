---
layout: post
title: "A Bookmarklet for Tiddlywiki Nav"
date: 2025-12-22 13:16:48 -0500
categories: ["tiddlywiki", "bookmarklet"]
---
This bookmarklet opens the `$:/AdvancedSearch` tiddler for any Tiddlywiki open
in the browser. It works for local Tiddlywiki files (`file://`) as well as online.

This can be useful when working on a "read-only" mode of your wiki, for
example.

It can be modified to open any tiddler by replacing `$:/AdvancedSearch` with the
name of the tiddler.

`javascript:(function(){var l=location;l.href = l.protocol+'//'+(l.host ? l.host : l.pathname)+'#'+encodeURIComponent('$:/AdvancedSearch');})();`


