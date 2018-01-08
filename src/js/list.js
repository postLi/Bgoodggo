(function(){
	document.addEventListener('DOMContentLoaded',function(){
		// var arr = JSON.stringify(goodslist);
		// console.log(arr);
		// var ul = document.createElement('ul');
		// console.log(goodslist);
		// console.log(Bg_goodlist);
		// ul.className = 'clearfix';

		var Bg_goodlist = document.querySelector('.Bg_goodlist');
		var page = document.querySelector('.page');
		var Bg_ul = document.querySelector('.Bg_ul');
		var pageNo = 1;
		var qty = 5;
		var status = [200,304];
		//发起ajax请求
		var xhr = new XMLHttpRequest();
		xhr.onload = function(){
			if(status.includes(xhr.status)){
				var res = JSON.parse(xhr.responseText);
				console.log(res);
				Bg_ul.innerHTML  = res.data.map(function(item){
					return `
						<li data-id="${item.id}">
							<img src="${item.imgulr}" class="img_list"/>
							<p class="title">${item.title}</p>
							<p class="name">${item.name}</p>
							<p class="price">爆价：${item.price}<del class="del">￥9998</del></p>
						</li>
					`
				}).join('');
				Bg_goodlist.appendChild(Bg_ul);
				Bg_ul.className = 'clearfix Bg_ul';
				// 处理分页
				page.innerText = '';
				var pageQty = Math.ceil(res.total/res.qty);
				for(var i=0;i<pageQty;i++){
					var span = document.createElement('span');
					span.innerHTML = i+ 1;

					if(i === pageNo){
						span.className = 'active';
					}
					page.appendChild(span);
				}

				//传参
				Bg_ul.onclick = function(e){
					var e = e || window.event;
					var target = e.target || event.srcElement;
					//li的所有子元素为事件源对象
					var classname = ['p','img'];
					if(target.tagName.toLowerCase() === 'img'){
							var params = '?';
							//获取点击事件源对象的父元素（即）li的date-id
						var _id = target.parentNode.getAttribute('data-id');
						console.log(_id);
						for(var i=0;i<res.data.length;i++){
							console.log(res.data[i]);
							if( _id == res.data[i].id ){
								for(var attr in res.data[i]){
									params += attr +'='+ encodeURI(res.data[i][attr]) +'&';
								}
								params = params.slice(0,-1);
								location.href = 'goodslist.html' + params;
							}
						}
					}
				}
			}
		}
		xhr.open('post',`http://localhost:1107/api/list.php`,true);
		xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
		// post请求，数据写在send方法中
		xhr.send(`pageNo=${pageNo}&qty=${qty}`);

		// 点击分页切换
		page.onclick = function(e){
			if(e.target.tagName.toLowerCase() === 'span'){
				pageNo = e.target.innerText*1-1;//1,2,3,4
				
				xhr.open('post','http://localhost:1107/api/list.php',true);
				xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
				xhr.send(`pageNo=${pageNo}&qty=${qty}`);
			}
		}
		



	/*var $Bg_goodlist = $('.Bg_goodlist');
	var $page = $('.page');
	console.log($Bg_goodlist);
	var $ul = $('<ul></ul>');
	$(goodslist).each(function(idx,item){
		var $li = $('<li></li>');
		$li.html(`
			<img src="${goodslist.imgurl}" class="img_list"/>
 			<span class="title">${goodslist.title}</span>
	 		<span class="name">${goodslist.name}<del>￥9998</del></span>
			<span class="price">${goodslist.price}</span>
		`);
		$li.appendTo($ul);
	});*/
	
	});
})();