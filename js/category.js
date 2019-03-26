$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
    $.ajax({
        url: './datas/category1.json',
        type: 'get',
        dataType:JSON,
        success: function (res) {
            var datas=JSON.parse(res);
            console.log(datas)
            var html = template('category-first', {data: datas})
            $('#links').html(html);
            $('#links').find('a').eq(0).addClass('active')
        }
    })
    $.ajax({
        url:'./datas/category2.json',
        type: 'get',
        success:function (res) {

            var html= template('category-second',{result:res})
            $ ('.brand-list').html(html)

        }
    })
    $('#links').on('click','a',function () {
       $(this).addClass('active').siblings().removeClass('active')
           mui.toast('没有更多数据了')
    })
})