define(['m'], function(m) {
  var template = $('index').html();
  m.parse(template);   // optional, speeds up future uses
  var rendered = m.render(template, {title: "Luke"});
  $('index').html(rendered);
})
