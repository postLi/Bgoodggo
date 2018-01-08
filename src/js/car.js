require(['config'],function(){
	require(['jquery'],function(){
		var cookies = document.cookie;
		var carList;
		if(cookies.length){
	        cookies = cookies.split('; ');
	        cookies.forEach(function(item){
	            var arr = item.split('=');
	            if(arr[0] === 'carList'){
	                carList = JSON.parse(arr[1]);
	            }
	        });
        }
		console.log(carList);
		var Bg_carlist = document.querySelector('.Bg_carlist');
		var btn_all = document.querySelector('.btn_all');
		var ul = document.createElement('ul');
		ul.innerHTML = carList.map(function(goods){
			console.log(goods.imgulr);
			return `
				<li class="one">
					<input type="checkbox" name="shop" class="check"/>
					<span class="imglist"><img src="${goods.imgulr}"/></span>
					<p>${goods.title} <span>${goods.name}</span></p>
				</li>
				<li class="two">
					<span>颜色：${goods.color}</span>
					<span>尺寸：${goods.size}(M:168/)</span>
				</li>
				<li class="three">
					<span>￥${goods.price}</span>
				</li>
				<li class="four">
					<span class="jian">-</span>
					<input type="text" name="shop" class="input" value="${goods.qty}"/>
					<span class="add">+</span>
				</li>
				<li class="fir">
					<span class="total">总价：￥${goods.total}</span>
				</li>
				<li class="six">
					<span class="sc">删除</span>
				</li>
			`
			ul.appendChild(li);
		})
		Bg_carlist.appendChild(ul);
		//
		var four = document.querySelector('.four');
		four.onclick = function(e){
			var e = e || window.event;
			var target = e.target || event.srcElement;
			if(target.className.toLowerCase() === 'jian'){
				var valus = $('.input').val();
				if(valus>=2){	
					var _vales = $('.input').val();
					_vales = _vales*1-1;
					$('.input').val(_vales);

				}else{

					return;
				}

			}else if(target.className.toLowerCase() === 'add'){
				var _vale = $('.input').val();
				_vale = _vale*1+1;
				$('.input').val(_vale);
			}
		}
		//
		var sc = document.querySelector('.sc');
			console.log(sc);
		sc.onclick = function(){
			Bg_carlist.removeChild(ul);
		}
		var all = document.querySelector('#all');
		var shop = document.getElementsByName('shop');
		console.log(shop);
		all.onclick = function(){
			for(var i=0;i<shop.length;i++){
				shop[i].checked = all.checked;
			}
		}

	})
})
