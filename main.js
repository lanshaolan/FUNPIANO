console.log("我是JS");


// 元件應用：分頁重複內容 - 導覽列、頁尾
Vue.component("navbar", { 
    template: `
    <nav>
        <a href="./index.html">隨聲琴奏</a>
        <a href="./about.html">ABOUT US</a>
        <a href="./product.html">PRODUCT</a>
        <a href="./service.html">SERVICE</a>
        <a href="./new.html">NEWS</a>
        <a href="./contact.html">CONTACT</a>
    </nav>
    `
})

var navbar = new Vue({
    el: "#navbar"
})