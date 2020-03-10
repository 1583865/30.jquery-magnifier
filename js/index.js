//鼠标划过小图过度到大图
$(function() {
    //tab切换 点小图看中图
    var arrimg = ['url(img/03.jpg)','url(img/002.jpg)']
    //大图
    var arrbigimg = ['url(img/02.jpg)','url(img/003.jpg)']
    //绑定img事件
    $('.hd img').mouseover(function() {
        //鼠标划过谁显示数字
        var i = $(this).index()
        // alert(i)
        //中图切换
        $('.bd').css('background',arrimg[i])
        //大图切换
        $('#bigimg').css('background-image',arrbigimg[i])
        //鼠标划过小图显示边框  邻居边框显示透明
        $(this).css('border','2px solid #ff0000').siblings().css('border','2px solid transparent')
    })




//镜片
$('.bd').mousemove(function(e) {
    var x = e.pageX;
    var y = e.pageY;
    bdL = $('.bd').offset().left;
    bdT = $('.bd').offset().top;
    zoomW = $('.zoom').outerWidth()
    zoomH = $('.zoom').outerHeight()
    var dx = x - bdL - (zoomW/2);
    var dy = y - bdT - zoomH/2;
    $('.zoom').css({'left':dx + 'px', 'top':dy+'px'})
    // console.log($('.zoom').css('left'));



    //镜片边界判断
    var zooml = parseFloat($('.zoom').css('left'))//获取镜片放大内部定位值 左
    var zoomt = parseFloat($('.zoom').css('top'))//获取镜片放大内部定位值 上
   if(zooml <= 0) {
       zooml = 0;//镜片移动到左边界时让zooml重新归位0
       $('.zoom').css('left',0)//限制左边界
   }
   else if(zooml >= 230) {
       $('.zoom').css('left','230px')//限制右边界
       zooml = 230;//镜片移动到右边界时让zooml重新归位0
   }

    if(zoomt <= 0) {
        zoomt = 0//镜片移动到上边界时让zooml重新归位230
        $('.zoom').css('top',0)//限制上边界
    }//限制上边界
    else if(zoomt >= 230) {
        $('.zoom').css('top','230px')//限制下边界
        zoomt = 230;//镜片移动到下边界时让zooml重新归位230
    }


    //显示大图
    var bgscale = (300/75*100) + '%'//大图放大比例
    var posX,posY
    posX = -zooml*(300/75)+'px';
    posY = -zoomt*(300/75)+'px';
    // alert(bgscale)

    $('#bigimg').css({'display':'block','backgroundPositionX':posX,'backgroundPositionY':posY,'background-size': bgscale})
})




//鼠标离开中图 区域 放大镜片移除
    $('.bd').mouseleave(function () {
        $('.zoom').css('left','-150px')
        //关闭大图
        $('#bigimg').css('display', 'none')
    })
})