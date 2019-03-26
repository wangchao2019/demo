$(function () {
    $('#modifyBtn').on('tap',function () {
        var data = {
            oldPassword:$.trim($('[name="originPass"]').val()),
            newPassword:$.trim($('[name="newPass"]').val()),
            confirmPassword:$.trim($('[name="confirmPassword"]').val()),

        };
           if (!data.oldPassword) {
               mui.toast('请输入原密码')
               return
           }
        if (!data.newPassword) {
            mui.toast('请输入新密码')
            return
        }
        if (!data.confirmPassword) {
                mui.toast('请确认新密码')
            return
        }
        if (data.newPassword!=data.confirmPassword) {
            mui.toast('新密码与确认密码不一致')
            return
        }
             else{mui.toast('修改密码成功')}
    })
})