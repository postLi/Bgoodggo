;$(function($){
		var params = location.search;
	    params = params.slice(1);
	    params = params.split('&');
		var data = {};
		params.forEach(function(item){
			var arr = item.split('=');
			data[arr[0]] = decodeURI(arr[1]);
		})
		console.log(params);//json字符串
		console.log(data);//对象
		var $Bg_goods_r = document.querySelector('.Bg_goods_r');
		var h2 = document.querySelector('h2');
		var t_name = document.querySelector('.t_name');
		h2.innerText = data.title;
		t_name.innerText = data.name;
		var p1 = document.querySelector('.p1');
		var p3 = document.querySelector('.p3');
		p1.innerText = data.price;
		p3.innerText = data.off;
		var c_color = document.querySelector('.c_color');
		var c_size = document.querySelector('.c_size');
		c_color.innerText = data.color;
		c_size.innerText = data.size;
		var qty = document.querySelector('.qty');
		qty.innerText = data.qty;
		var del = document.querySelector('.del');
		del.innerText = data.orprice;

		//
		var $img = $('<img/>').attr('src',data.imgsrc);
		$img.appendTo($('.smImg'));
		// console.log(data.imgulr);
		//放大镜
		var $Bg_goods_l = $('.Bg_goods_l');
		
		var $bigimg = $('<img/>').attr('src',data.imgulr);
		var $smgimg = $('<img/>').attr('src',data.imgulr);
		$('.tab_content').append($bigimg);
		var $tab_Item = $('.tab_Item');
		var $ul= $tab_Item.find('ul');
		var $li = $ul.find('li');
		($smgimg).appendTo($li);
		//点击数量添加
		var Bg_sl = document.querySelector('.Bg_sl');
		var jian =	document.querySelector('.jian');
		var add = 	document.querySelector('.add');
		var num = 	document.querySelector('.num');
		var input = document.querySelector('.input');
		// jian.onclick = function(){
		// 	var	_input = input.value;
		// 		_input++;
		// 	console.log(_input);
		// } 

		Bg_sl.onclick = function(e){
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
		// console.log(data);
		//写入cookie
		var goods_btn = document.querySelector('.goods_btn');
	    var Bg_add = document.querySelector('.Bg_add');
	    var close = document.querySelector('.close');
	    var Bgoodggo = document.querySelector('.Bgoodggo');
	    var title = document.querySelector('.title');
		var carList = [];
		// console.log(Bg_add);
		// var cookies = document.cookie;
		// if(cookies.length){
	 //        cookies = cookies.split('; ');
	 //        // console.log(cookies);
	 //        cookies.forEach(function(item){
	 //            var arr = item.split('=');
	 //            if(arr[0] === 'carList'){
	 //                carList = JSON.parse(arr[1]);
	 //            }
	 //        });
	 //    }
	    goods_btn.onclick = function(){
	    	var guid = data.id;
	    	var _qty = input.value;
	    	var price = data.price;
	    	var off = (data.off)/10;
	    	var total =(_qty*price*off).toFixed(2);
			console.log(total);
			console.log(_qty);
			// var guid = data.id;
	    	var goods = {
	    		guid:data.id,
	    		imgulr:data.imgulr,
	    		name:data.name,
	    		title:data.title,
	    		price:data.price,
	    		size:data.size,
	    		color:data.color,
	    		total:total,
	    		time:data.add_time,
	    		qty:1
	    	}
		//判断cookie里面是否存在该商品
		    //判断数组的长度
		    for(var i=0; i<carList.length; i++){
		        if(carList[i].guid === guid){
		            break;
		        }
		    }
		    if(i === carList.length){
		        carList.push(goods);
		    }else{
		        carList[i].qty++;
		    }
		    document.cookie = 'carList=' + JSON.stringify(carList);
			console.log(document.cookie);
			//点击弹窗
			Bg_add.style.display = 'block';
			// Bgoodggo.style.backgroundColor = '#666666';

	    }
	    //关闭弹窗
	    close.onclick = function(){
	    	Bg_add.style.display = 'none';
	    	// Bgoodggo.style.backgroundColor = '';
	    }
	    //居中弹窗
		autoSize();
		window.onresize = autoSize;
		function autoSize(){
			var left =(window.innerWidth-702)/2  + 'px';
			var top = (window.innerHeight-226)/2 + 'px';

			Bg_add.style.left = left;
			Bg_add.style.top = top;
		}
		// console.log(cookies);
		$('.btn1').on('click',function(){
			window.location.href = "car.html";

		})
		$('.btn2').on('click',function(){
			Bg_add.style.display = 'none';
		})
});