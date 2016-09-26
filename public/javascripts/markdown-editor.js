$(function(){
  var markdown_editor=new Vue({
    el: '#editor',
    data: {
      input: '# Hello, let\'s start'
    },
    filters: {
      marked: marked
    }
  });

});
