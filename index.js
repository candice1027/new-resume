//初始化
var APP_ID = '06PhcdkHFbxkFTivJ7dYjgR7-gzGzoHsz';
var APP_KEY = 'cKPH0DRtJFYi1l1tb6e6lXTW';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//导航切换
var oLi = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < oLi.length; i++) {
    oLi[i].onmouseenter = function(e) {
        let a = e.currentTarget;
        a.classList.add('active');
    }
    oLi[i].onmouseleave = function(e) {
        let a = e.currentTarget;
        a.classList.remove('active');
    }
}
//页面导航定位

let aTags = document.querySelectorAll('nav.menu > ul > li > a');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
   for (let i = 0; i < aTags.length; i++) {
       aTags[i].onclick = function(e) {
            e.preventDefault()
            let aId = this.getAttribute('href');
            if (!(aId === 'javascript:;')) {
                let elem = document.querySelector(aId);
               // let n = 25; //1s以内一共动多少次
               // let duration = 500 / 25; //每次花费多少时间
                var targetTop = elem.offsetTop - 80;//目标距离
                var currTop = window.scrollY;//当前距离
                var distance = (targetTop - currTop);
                // var i = 0;
                // console.log(targetTop)
                // console.log(currTop)
                // console.log(distance)
                // var timer =  setInterval(function() {
                //         i+=1;
                //         if ( i > 25) {
                //             clearInterval(timer);
                //             return;
                //         }
                //         window.scrollTo(0,currTop + distance * i)
                //    },duration) 
                var coords = { y: currTop}; // 起始位置
                var t = Math.abs((distance/100)*100) // Math.abs()方法是取绝对值  这里的时间是根据距离来算的，算出距离是100像素的几倍 再乘以100ms 就是几百毫秒的时间
                if(t>500){ t = 500 }// 如果时间太长就直接设置为500ms
                var tween = new TWEEN.Tween(coords) // 起始位置
                            .to({ y: targetTop}, t) // 结束位置 和 时间 
                            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
                            .onUpdate(function() {
                                // coords.y 已经变了
                                window.scrollTo(0,coords.y) // 如何更新界面
                            })
                            .start(); // 开始缓动
            
          }
       }
   }

//项目切换
var project = document.querySelectorAll('#projectList li');
var lightBar = document.getElementById('lightBar');
for (let i = 0; i < project.length; i ++) {  
    project[i].onclick = function() {
        lightBar.className = 'light-inner state-'+i;
    } 
}
//页面滑动事件
window.onscroll = function() {
    var scrollY = window.scrollY;
    var topNavBar = document.getElementById('topNavBar')
    if (scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    getNearElem();//获取到当前距离顶部最近的元素，让其显示
}

//添加offanimate类,使每个部分开始位置处于下面一点，当滑动页面的时候，再让其慢慢从下面跑上来，通过transform:translateY()来控制位置，通过transition:all 3s;来控制过度平滑
var partTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < partTags.length; i++ ) {
    partTags[i].classList.add('offanimate');   
}
setTimeout(function() {
    getNearElem()
},500)

function getNearElem() {
    var partTags = document.querySelectorAll('[data-x]');
    var minIndex = 0;
    for (var i = 0; i < partTags.length; i++) {
        if(Math.abs(partTags[i].offsetTop - window.scrollY) < Math.abs(partTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }  
    }
    let currId = partTags[minIndex].id;
    let currLi = document.querySelector('a[href="#'+currId+'"]').parentNode;
    let liBrothers = currLi.parentNode.children;
    for (var i = 0; i < liBrothers.length; i++) {
        liBrothers[i].classList.remove('highlight');
    }
    currLi.classList.add('highlight');
    partTags[minIndex].classList.remove('offanimate'); 

}