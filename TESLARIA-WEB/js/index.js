// @ts-nocheck
$(document).ready(function() {
  //点击button内容切换
  $("button#login").click(function(e) {
    var container = document.getElementById("container");
    var ips = ":10003"
    var ip = document.getElementById("ip").value + ips;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if (ip == "" || userName == "" || password == "") {
      alert("ip或者用户名、密码不能为空!")
    }
    // 调用登录接口数据
    $.ajax ({
      type: "POST",  
      url: "http://"+ip+"/host/api/login", 
      dataType:'json',
      contentType: "application/json",
      data: JSON.stringify({"userName": userName, "password": password}),
      success: function(data) {
        localStorage.setItem('token',data.token)
        var token = localStorage.getItem('token')
        $.ajax({
          type: "Get",  
          url: "http://"+ip+"/host/scenes",
          dataType:'json',
          success: function(res){
            localStorage.setItem('details',JSON.stringify(res))
            var detail = JSON.parse(localStorage.getItem("details"))
            // 判断ul下是否有li，如果有li就显示在页面上，没有就隐藏起来。
            var div = document.getElementsByClassName('meet');
            var p1  = document.getElementsByClassName('p1');
            var p1Obj = {...p1}
            for (var c = 0; c < div.length; c++) {
              if(div[c].getElementsByClassName('conference').length === 0) {
                p1Obj[c].className = "p1 hidden"
              } else {
                p1Obj[c].className = "p1 show"
              }
            } 
            btn = function(index) {
              var ul = document.getElementsByClassName('meet')[index];
              var btns = ul.getElementsByClassName('conference')
              var state = null;
              for (let i = 0; i < btns.length; i++) {
                // 点击变换颜色的事件
                btns[i].onclick = function () {
                  state = btns[i].id;
                  // console.log(state)
                  detail.map(item => {
                    let _this = this
                    // 通过自定义一个状态，这个状态是li下面的id，判断如果state===item.id，那就执行下面的程序
                    if (state === item.id) {
                      $.ajax ({
                        type: "POST",  
                        url: "http://"+ip+"/host/scenes/"+item.id+"/execute", 
                        dataType:'json',
                        contentType: "application/json",
                        data: JSON.stringify({"paramerName": state}),
                        headers:{
                          'Authorization':"bearer "+token
                        }
                      }).success(function(res){
                          for (var j=0;j<btns.length;j++) {
                            btns[j].style.backgroundColor='';
                          }
                          _this.style.backgroundColor='rgb(254, 144, 3)';
                      })
                      .error( function(res) {
                        console.log("不能重复运行")
                      })
                    } 
                  })
                }
              }
            }
            for ( let a = 0; a < div.length; a++) {
              btn(a);
            }
            // 判断未分配分组的ul下是否有li，如果有li就显示在页面上，没有就隐藏起来。
            var divs = document.getElementsByClassName('group');
            var pt  = document.getElementsByClassName('pt');
            var ptObj = {...pt}
            for (var c = 0; c < divs.length; c++) {
              if(divs[c].getElementsByClassName('conference').length === 0) {
                ptObj[c].className = "pt hidden"
              } else {
                ptObj[c].className = "pt show"
              }
            } 
            // 未分配分组的点击事件
            point = function(index) {
              var ul = document.getElementsByClassName('group')[index];
              var btns = ul.getElementsByClassName('conference')
              var state = null;
              for (let i = 0; i < btns.length; i++) {
                btns[i].onclick = function () {
                  state = btns[i].id;
                  // console.log(state)
                  detail.forEach(item => {
                    let _this = this
                    // 通过自定义一个状态，这个状态是li下面的id，判断如果state===item.id，那就执行下面的程序
                    if (state === item.id) {
                      $.ajax ({
                        type: "POST",  
                        url: "http://"+ip+"/host/scenes/"+item.id+"/execute", 
                        dataType:'json',
                        contentType: "application/json",
                        data: JSON.stringify({"paramerName": state}),
                        headers:{
                          'Authorization':"bearer "+token
                        }
                      }).success(function(res){
                          for (var j=0;j<btns.length;j++) {
                            btns[j].style.backgroundColor='';
                          }
                          _this.style.backgroundColor='rgb(254, 144, 3)';
                      })
                      .error( function(res) {
                        console.log("不能重复运行")
                      })
                    } 
                  })
                }
              }
            }
            for ( let a = 0; a < divs.length; a++) {
              point(a);
            }
          }
        })
        if (data == "success") {
          container.className = "hidden";
        } else {
          // 点击登录成功后到登录后的页面
          if(container.className = "show") {
            document.onkeydown = function(){
              if ( event.keyCode==116) {
                event.keyCode = 0;
                event.cancelBubble = true;
                return false;
              }
            }
          }
          $('.button').append('<button type="button" id="logout" onclick="logout(this)">退出</button>');
          $('button#login').remove();
        }
      }
    })
     // 调用场景分组接口数据
    $.ajax({
      type: "Get",  
      url: "http://"+ip+"/host/scene_groups",
      dataType:'json',
      success: function(res){ 
        console.log(ip)
        var groups = res
        // 对createAt（时间）先后顺序进行排序
        res.sort(function(a, b) {
          return b.createAt < a.createAt ? 1 : -1
        })
        // console.log(groups)
        // 调用场景分组下的数据
        $.ajax({
          type: "Get",  
          url: "http://"+ip+"/host/scenes",
          dataType:'json',
          success: function(res){
            var html = ""
            var scenes = res
            var subgroup = res
            // localStorage.setItem('details',JSON.stringify(res))
            // 对createAt（时间）先后顺序进行排序
            res.sort(function(a, b) {
              return b.createAt < a.createAt ? 1 : -1
            })
            // console.log(scenes)
            // 调用接口渲染父级元素
            $.each(groups,function(index,item) {
              html += '<p class="p1 hidden">'+item.name+'</p>'
              html += '<ul class="meet" id='+index+' onclick="btn('+index+')">'
              // 调用接口渲染子级元素
              $.each(scenes,function(index,itemChildren) {
                if(item.id === itemChildren.groupId) {
                  itemChildren.activeScene === true
                  ? 
                  html += '<li class="conference" id='+itemChildren.id+' style="background-color: rgb(254, 144, 3);">' 
                  : 
                  html += '<li class="conference" id='+itemChildren.id+'>'
                  itemChildren.imageUrl === null
                  ?
                  html += '<p class="p2"><img src="images/scene.png"/></p>'
                  :
                  html += '<p class="p2"><img src=http://'+ip+'/host/'+itemChildren.imageUrl+'/></p>'
                  html += '<p class="p3"><span>'+itemChildren.name+'</span></p>'
                  html += '</li>'
                }
              })
              html += '</ul>'
              $('.meet').html(html);
            })
            // 调用接口渲染未分组分配渲染页面
            html += '<p class="pt hidden">未分组分配</p >'
              // 调用接口渲染子级元素
              html +='<ul class="group" onclick="point(0)">'
              $.each(subgroup,function(index,item1) {
                // console.log(item1.activeScene)
                if(item1.groupId === null) {
                  // localStorage.setItem('itemId',item1.id)
                  item1.activeScene === true
                  ? 
                  html += '<li class="conference" id='+item1.id+' style="background-color: rgb(254, 144, 3);">' 
                  : 
                  html += '<li class="conference" id='+item1.id+'>'
                  if(item1.imageUrl === null) {
                    html += '<p class="p2"><img src="images/scene.png"/></p>'
                  }
                  html += '<p class="p3"><span>'+item1.name+'</span></p>'
                  html += '</li>'
                }
              })
              html += '</ul>'
              $('.group').html(html);
            $('#meeting').html(html);
          }
        })
      }  
    })
  });
  // 退出登录的点击事件
  logout = function(e) {
    // console.log(e)
    $('.button').append('<button type="button" id="login">登录</button>');
    $('button#logout').remove();
    // 点击退出登录后返回登录页面后进行强制刷新（因为这里没有退出登录的接口，所以使用此方法）
    if (container.className = "hidden") {
      location.reload()
    }
  }
  // 从localStorage中获取数据
  // var detail = localStorage.getItem('details')
  // var detail = JSON.parse(localStorage.getItem("details"))
})