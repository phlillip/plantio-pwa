---
layout: thought
comments: false
title: "(Gulp) Here goes nothing"
date: "2018-11-18 22:00:12"
categories: thoughts
---
It seems plug 'n' play technology only reaches a certain level; installing Gulp and running
singular tasks worked just fine however running combined tasks (as is the case with the standard
default task) breaks between Gulps versions 3 and 4.

For clarification, the old way of writing a default task:

```
gulp.task('default', ['sass', 'js', 'watch']);
```
Must now be written like this:
```
gulp.task('default', gulp.series(gulp.parallel('sass', 'js', 'watch')))
```
> TODO: Segregate js code and rewrite css as sass.
