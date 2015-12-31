define(['m', 'jquery'], function(m, $) {
  var template = $('index').html()
  var view = {
    title: 'cool',
    model: function() {
      return {
        first: 'zach',
        last: 'last'
      }
    }
  }
  console.log(view.model);
  return m.render(template, view);
})
