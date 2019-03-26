$(function () {
    $.ajax({
        url:'./datas/shopcar.json',
        type:'get',
        success:function (res) {
            var html=template('cartTpl',{data:res});
            $('#cartBox').html(html)
        }
    })
 $('body').on('click','.deleteBtn',function () {
      mui.confirm('确认删除吗')
 })

})