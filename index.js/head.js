window.onload = function() {

    // 关闭广告
    var i = document.getElementById('m1');
    i.onclick = function() {
        var top = document.getElementById('top');
        var d = top.parentNode;
        d.removeChild(top);
    }

    // 导航部分
    // 定位广东
    $(function() {
        $('.dv-dt').mouseenter(function() {
            $('.dv-dd').css("display", "block");
            $(this).css({ "border": "1px solid #ccc", "borderBottom": "none", "backgroundColor": "#fff" })
            $('.dv-dd').mouseenter(function() {
                $(this).css("display", "block");
                $('.dv-dt').css({ "border": "1px solid #ccc", "borderBottom": "none", "backgroundColor": "#fff" })
            })
        })
        $('.dv-dt').mouseleave(function() {
            $('.dv-dd').css("display", "none");
            $(this).css({ "border": "none", "backgroundColor": "#e3e4e5" })
            $('.dv-dd').mouseleave(function() {
                $(this).css("display", "none");
                $('.dv-dt').css({ "border": "none", "backgroundColor": "#e3e4e5" })
            })
        })

        //我的京东
        $('.my-jd').mouseenter(function() {
            $('.myJd1').css("display", "block");
            $(this).css({ "border": "1px solid #ccc", "borderBottom": "none", "backgroundColor": "#fff" })
            $('.myJd1').mouseenter(function() {
                $(this).css("display", "block");
                $('.my-jd').css({ "border": "1px solid #ccc", "borderBottom": "none", "backgroundColor": "#fff" })
            })
        })
        $('.my-jd').mouseleave(function() {
            $('.myJd1').css("display", "none");
            $(this).css({ "border": "none", "backgroundColor": "#e3e4e5" })
            $('.myJd1').mouseleave(function() {
                $(this).css("display", "none");
                $('.my-jd').css({ "border": "none", "backgroundColor": "#e3e4e5" })
            })
        })



        //搜索部分
        // 搜索功能
        $('.search-txt').focus(function() {
            $('.search-show').css("display", "block");
        })
        $('.search-txt').blur(function() {
            $('.search-show').css("display", "none");
        })
    })






}