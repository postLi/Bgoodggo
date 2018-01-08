require(['config'],function(){
	require(['jquery'],function(){
			//tab切换
	var Bg_tab = document.querySelector('.Bg_tab');
	var ul1 = Bg_tab.querySelector('.tab_list');
	var lis = ul1.children;
	var width = ul1.offsetWidth/2;
	console.log(width);
	//添加按钮
	let next = document.createElement('span');
	next.innerHTML = '&gt';
	next.className = 'next';
	let prev = document.createElement('span');
	prev.innerHTML = '&lt';
	prev.className ='prev';
	Bg_tab.appendChild(next);
	Bg_tab.appendChild(prev);
	Bg_tab.onclick = function(e){
		e = e ||window.event;
		var target = e.target || e.srcElement;
		if(target.className === 'next'){
			animate(ul1,{left:0});
			console.log(width);
		}else if(target.className === 'prev'){
			animate(ul1,{left:-width});
			console.log(width);
		}
	}
	//轮播图
	var Bg_c_center_cont = document.querySelector('.Bg_c_center_cont');
	var ul = Bg_c_center_cont.querySelector('ul');
	ul.appendChild(ul.children[0].cloneNode(true));
	var lis = ul.children;
	var len = lis.length;
	var Bg_c_center_item = document.querySelector('.Bg_c_center_item');
	var ul2 = Bg_c_center_item.querySelector('ul');
	var imgWidth = Bg_c_center_cont.clientWidth;
	ul.style.width = imgWidth*len + 'px';
	let idx = 0;
	//添加按钮
	let btnNext = document.createElement('span');
	btnNext.innerHTML = '&gt';
	btnNext.className = 'btnNext';
	let btnPrev = document.createElement('span');
	btnPrev.innerHTML = '&lt';
	btnPrev.className ='btnPrev';
	Bg_c_center_cont.appendChild(btnNext);
	Bg_c_center_cont.appendChild(btnPrev);
	var timer = setInterval(autoplay,3000);
		function autoplay(){
			idx++;
			show();
		}
		function show(){
			if(idx >len-1){
				ul.style.left = 0;
				idx = 0;
			}else if(idx <0){
				idx =0;
			}
			animate(ul,{left:-idx*imgWidth});
			for(let i=0; i<len-1; i++){
				ul2.children[i].className = '';
			}
			if(idx === len-1){
				ul2.children[0].classList.add('active')
			}else{

				ul2.children[idx].className = 'active';
			}
		}
		Bg_c_center_cont.onmouseenter = function(){
			clearInterval(timer);
			autoplay();
		}
		Bg_c_center_cont.onmouseleave = function(){
			autoplay();
		}
		// 发起请求ajax请求
			//获取页面上元素

		//获取页面品牌推荐 container 类名为cnxh盒子上元素
		// var goods = document.querySelector('.goods');
		// console.log(goods)
		//subject发起ajax请求数据
		// ajax.get({
		// 	url: `http://localhost:1107/api/list.php`,
		// 	success: function(data){
		// 		console.log(data)
		// 		//创建一个ul
		// 		var ul = document.createElement('ul');
		// 		ul.innerHTML = data.map(function(item) {
		// 			return `
		// 	 			<li>
		// 	 			<h4 class="imgR"><img  src="${item.imgurl}"></h4>
		// 	 			<p class="cnxh_1">${item.name}</P>
		// 	 			<p class="cnxh_2">${item.price}</P>
		// 	 			</li>
		// 		 	`
		// 		}).join('');
		// 		//插入ul之前先清空
		// 		//nxh.innerHTML = '';
		// 		goods.appendChild(ul);
		// 		imgR = document.getElementsByClassName('imgR');
		// 		function add() {
		// 			for(let i = 0; i < imgR.length; i++) {

		// 				imgR[i].onclick = function() {
		// 					console.log(i);
		// 					chuanCan(i, data);
		// 				}
		// 			}
		// 		}
		// 		add();

		// 		// 页面传参
		// 		function chuanCan(idx, data) {
		// 			var str = '';
		// 			for(var arr in data[idx]) {
		// 				str += arr + '=' + encodeURI(data[idx][arr]) + '&';
		// 			}
		// 			//去除多余的&
		// 			str = str.slice(0, -1);
		// 			// 跳转页面
		// 			console.log(str);
		// 			location.href = 'list.html?' + str;
		// 		}

		// 	}
		// })

		$('.Bg_main_img').on('click',function(){
			 location.href = 'list.html'
		});
	})
})