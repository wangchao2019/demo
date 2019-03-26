$(function () {

    var picker = new mui.PopPicker({layer:3});
    picker.setData(cityData);

    $('#showCityPicker').on('tap',function () {
        picker.show(function(items) {

            $('[name="address"]').val((items[0] ).text + (items[1] ).text + (items[2]).text);
        });
    })
})