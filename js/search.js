$(function () {
    var keyArr=[];

   $('#search-btn').on('click',function () {
       var keyWord=$(this).siblings('input').val();
        if (keyWord) {

            keyArr.push(keyWord);

            localStorage.setItem('keyArr',JSON.stringify(keyArr))
            var a= JSON.parse( localStorage.getItem('keyArr'))
            console.log(a)
        }
        else {mui.toast('请输入要搜索的数据')}
   })

  if ( localStorage.getItem('keyArr') ){
    var result= JSON.parse( localStorage.getItem('keyArr'))
   var html=template('historyTpl',{results:result})

      $('#history-box').html(html)
  }
   $('#clearBtn').on('click',function () {
       localStorage.removeItem('keyArr')
       $('#history-box').html('')
   })
})