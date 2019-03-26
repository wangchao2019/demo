$(function(){

    // 恢复a标签的跳转
    $('body').on('tap', 'a', function(){

        mui.openWindow({
            url: $(this).attr('href')
        });

    });

});