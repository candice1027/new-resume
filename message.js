//初始化
var APP_ID = '06PhcdkHFbxkFTivJ7dYjgR7-gzGzoHsz';
var APP_KEY = 'cKPH0DRtJFYi1l1tb6e6lXTW';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

var query = new AV.Query('Message');
//var messLi = document.getElementById('messLi');
query.find().then(function (data) {
  var oli = '';
  for (var i = 0, len = data.length; i < len; i++) {
    oli += '<li>'+data[i].attributes.name+'说：'+data[i].attributes.content+'</li>';
  }
  $('#messLi').html(oli)
  // 成功
}, function (error) {
  // 异常处理
});

//var postMessageForm = document.getElementById('postMessage');
var postMessageForm = $('#postMessage')
postMessageForm.submit(function(e){

// })
// postMessageForm.addEventListener('submit',function(e){
  e.preventDefault();
  var content = $('input[name=content]').val();
  var name = $('input[name=name]').val();
  if (name == '' || content == '') {
    alert('请输入完整的内容')
    return false;
  }
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    content: content,
    name: name
  }).then(function(object) {
    alert('留言成功')
    var oli = '<li>'+name+'说：'+content+'</li>';
    $('#messLi').append(oli)
    $('input[name=content]').val('');
    $('input[name=name]').val('');
  })
})