/**
 * Created by Administrator on 2015/6/23 0023.
 *HTML5 Web 存储
 *
 *
 *  interface Storage{
 *      readonly attribute unsigned long length;//存储的数据长度
 *      DOMString? key (in unsigned long index);//存储的索引值
 *      getter DOMString getItem(in DOMString key);//获取一个数据
 *      setter creator void setItem (in DOMString key ,in DOMString value);//存储一个数据(字符串/json)
 *      deleter void removeItem(in DOMString key);//删除一个键值对
 *      void clear();//删除所有键值对
 *
 *  };
    localStorage - 没有时间限制的数据存储,任何在该域内的所有页面，都可以访问localStorage 数据，但是各浏览器的的数据时各自独立的，也就是说，在firefox中使用localStorage存储的数据，在chrome 下获取不到
    sessionStorage - 针对一个 session 的数据存储,用户关闭浏览器窗口后，数据会被删除。
 *
 * 浏览器支持
 *  Internet Explorer 8+, Firefox, Opera, Chrome, 和 Safari支持Web 存储。
 *
 *
 */

//console.log(cookie);
//function cookie(){
    if(typeof(Storage)!=="undefined"){//support localStorage and sessionStorage
        localStorage.lastname="Smith";
        document.writeln("localStorage Last name: " + localStorage.lastname+"</br>");
        sessionStorage.lastname="xxxxx";
        document.writeln("sessionStorage Last name: " + sessionStorage.lastname+"</br>");
        localStorage.setItem("setItem","setItem");
        document.writeln("localStorage setItem: " + localStorage.getItem("setItem")+"</br>");
        document.writeln("localStorage 存储的数据长度: " + localStorage.length+"</br>");
        document.writeln("localStorage 第一个值: " + localStorage.key(0)+"</br>");
        document.writeln("localStorage 第2个值: " + localStorage.key(1)+"</br>");
        document.writeln("localStorage 第3个值: " + localStorage.key(2)+"</br>");
        localStorage.removeItem("setItem");
        document.writeln("localStorage 删除 setItem: " + localStorage.getItem("setItem")+"</br>");

        var userData = {name :"dfdf",account: 23};
        localStorage.setItem("userData",JSON.stringify(userData));
        document.writeln("localStorage 存储json: " + JSON.parse(localStorage.getItem("userData"))+"</br>");

    }else{
        alert("Sorry! No web storage support..");
    }
//}