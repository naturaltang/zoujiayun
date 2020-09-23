window.addEventListener('load', function() {
    //第一部分

    // 京东网页轮播图
    var arrow_l1 = document.getElementById('al1');
    var arrow_r1 = document.getElementById('ar1');
    var boxfirstright1 = document.querySelector('.boxfirstright1');
    // 1.鼠标经过  显示隐藏左右按钮
    boxfirstright1.addEventListener('mouseenter', function() {
        arrow_l1.style.display = 'block';
        arrow_r1.style.display = 'block';
        clearInterval(timer1);
        timer1 = null; //清空定时器
    })
    boxfirstright1.addEventListener('mouseleave', function() {
        arrow_l1.style.display = 'none';
        arrow_r1.style.display = 'none';
        timer1 = setInterval(function() {
            arrow_r1.click();
        }, 1000)
    })

    // 2.定义变量
    var num1 = 0;
    var circle1 = 0;
    var flag1 = true; //定义节流阀

    //3. 根据图片的个数动态生成小圆圈
    var ul = boxfirstright1.querySelector('ul');
    var ol = boxfirstright1.querySelector('.circle');
    // 图片的宽度
    var boxfirstright1Width = boxfirstright1.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');

        //4.在生成li的同时 获取li的索引号 我们需要自定义属性来获取
        li.setAttribute('index', i);

        ol.appendChild(li);
        // 5.小圆圈的排他思想  我们可以直接在生成小圆圈的同时绑定事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 6.点击小圆圈  移动图片 移动的是ul
            //当我们点击了某个小li  就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个小li的索引号给num1
            num1 = index;
            // 当我们点击了某个小li 就要把这个小li的索引号给circle1
            circle1 = index;
            //ul的移动距离  小圆圈的索引号 * 图片的宽度   (注意是负值)
            animate(ul, -index * boxfirstright1Width);
        })
    }
    ol.children[0].className = 'current';

    //7. 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //8.点击右侧按钮  图片滚动一张  
    arrow_r1.addEventListener('click', function() {
        if (flag1) {
            flag1 = false; //关闭节流阀
            if (num1 == ul.children.length - 1) {
                ul.style.left = 0;
                //9.图片的无缝滚动  把ul第一个li复制一份，放到ul的最后面
                // 当图片滚动到最后一张图时，让ul快速的，不做动画的跳到最左侧：left为0
                num1 = 0;
            }
            num1++;
            animate(ul, -num1 * boxfirstright1Width, function() {
                flag1 = true; //打开节流阀
            });
            circle1++;
            circle1 = (circle1 == ol.children.length) ? 0 : circle1;
            //10.调用函数
            circleChange();
        }
    })

    //11.点击左侧按钮  图片滚动一张
    arrow_l1.addEventListener('click', function() {
        if (flag1) {
            flag1 = false; //关闭节流阀
            if (num1 == 0) {
                num1 = ul.children.length - 1;
                ul.style.left = -num1 * boxfirstright1Width + 'px';
            }
            num1--;
            animate(ul, -num1 * boxfirstright1Width, function() {
                flag1 = true; //打开节流阀
            });
            circle1--;
            circle1 = circle1 < 0 ? (ol.children.length - 1) : circle1;
            //调用函数
            circleChange();
        }
    })

    //12.函数
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle1].className = 'current';
    }

    //13.自动播放轮播图  加定时器
    var timer1 = setInterval(function() {
        arrow_r1.click();
    }, 2000)




    // 第二部分

    // 京东秒杀
    var hours1 = document.querySelector('.hours1');
    var minutes1 = document.querySelector('.minutes1');
    var seconds1 = document.querySelector('.seconds1');
    var inputTime = +new Date('2020-7-31 21:00:00'); //返回的是用户输入时间总的毫秒数
    f()
    setInterval(f, 1000);

    function f() {
        var nowTime = +new Date(); //返回的是当前时间总的毫秒数

        var times = (inputTime - nowTime) / 1000; //times是剩余时间总的秒数
        var h = parseInt(times / 60 / 60 % 24) //计算小时
        h = h < 10 ? '0' + h : h;
        hours1.innerHTML = h;
        var m = parseInt(times / 60 % 60) //计算分数
        m = m < 10 ? '0' + m : m;
        minutes1.innerHTML = m;
        var s = parseInt(times % 60) //计算当前的秒数
        s = s < 10 ? '0' + s : s;
        seconds1.innerHTML = s;
    }
})