const sanitizeHtml=require('sanitize-html')
console.log('sanitize program')
const dirty="<h1>today is</h1><h2>sunny day</h2>"
const clean=sanitizeHtml(dirty,{allowedTags:[]})
console.log(dirty)
console.log(clean)