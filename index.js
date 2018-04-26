//loading
var welcome = document.getElementById('welcome');
setTimeout(function(){
    welcome.className = 'site-welcome';
},1500)
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
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
   for (let i = 0; i < aTags.length; i++) {
       aTags[i].onclick = function(e) {
            e.preventDefault()
            let aId = this.getAttribute('href');
            if (!(aId === 'javascript:;')) {
                let elem = document.querySelector(aId),
                  elemTop = elem.offsetTop; 
                  console.log(elemTop)
                  window.scrollTo(0,elemTop-80)    
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
}