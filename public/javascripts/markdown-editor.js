$(function(){
  var markdown_editor=new Vue({
    el: '#editor',
    data: {
      input: '# hello'
    },
    filters: {
      marked: marked
    }
  });

});
