// (function(){
// 	document.addEventListener('DOMContentLoaded',function(){
// 		var username = document.querySelector('#username');
// 		var password = document.querySelector('#password');
// 		var a1 = document.querySelector('.a1');
// 		var a2 = document.querySelector('.a2');
// 		var a3 = document.querySelector('.a3');
// 		var vcode = document.querySelector('#vcode');
// 		var love = document.querySelector('.love');
// 		var Text = document.querySelector('.Text');
// 		var btn_flush = document.querySelector('.btn_flush');
// 		var btn_send = document.querySelector('.btn_send');
// 		//用户名
// 		username.onfocus = function(){
// 			username.classList.add('active');
// 			a1.innerText = '';
// 			username.value = '';
// 		}
// 		username.onblur = function(){
// 			var _usrName = username.value;
// 			var reg =/^[\u2E80-\u9FFF]+$/;
// 			if(!/^[\u2E80-\u9FFF]+$/.test(_usrName)){
// 				a1.style.color = 'red';
// 				a1.innerText = '用户名不合法';
// 				return false;
// 			}else{
// 				a1.innerText = '用户名可用';
// 				a1.style.color = 'green';
// 			}
// 			username.classList.remove('active');
// 		}
// 		//密码
// 		password.onfocus = function(){
// 			password.classList.add('active');
// 			a2.innerText = '';
// 			password.value = '';
// 		}
// 		password.onblur = function(){
// 			var _pswWrd = password.value;
// 			var reg =/^[a-z0-9_-]{6,18}$/;
// 			if(!/^[a-z0-9_-]{6,18}$/.test(_pswWrd)){
// 				a2.style.color = 'red';
// 				a2.innerText = '密码不合法';
// 				return false;
// 			}else{
// 				a2.innerText = '密码可用';
// 				a2.style.color = 'green';
// 			}
// 			password.classList.remove('active');
// 		}
// 		//验证码
// 		vcode.onfocus = function(){
// 			vcode.classList.add('active');
// 			vcode.value = '';
// 			a3.innerText = '';
// 		}
// 		vcode.onblur = function(){
// 			var _vcode = vcode.value;
// 			if(_vcode.toLowerCase() == Text.innerHTML.toLowerCase()){
// 				a3.style.color = 'red';
// 				a3.innerText = '验证码正确';
// 			}else{
// 				a3.style.color = 'green';
// 				a3.innerText = '验证码不正确';
// 			}
// 			vcode.classList.remove('active');
// 		}
// 		var str = 'abcdefghigklmnopqrstuvwsyz1234567890';
// 		//随机验证码
// 		btn_flush.onclick = function(){
// 			Text.innerHTML = randomCode();
// 		}
		
// 		function randomCode(){
// 			// 随机生成一个4位验证码（包含字母）
// 			var _code = '';
// 			for(var i=0;i<4;i++){
// 				var index = parseInt(Math.random()*str.length) //不可能大于36
// 				_code += str[index];
// 			}
// 			return _code;
// 		}
// 		Text.innerHTML = randomCode();
// 		//发送验证码
// 		btn_send.onclick = function(){
			
// 		}
// 	});
// })();


require(['config'],function(){
	require(['jquery'],function(){
		var username = document.querySelector('#username');
		var password = document.querySelector('#password');
		var a1 = document.querySelector('.a1');
		var a2 = document.querySelector('.a2');
		var a3 = document.querySelector('.a3');
		var vcode = document.querySelector('#vcode');
		var love = document.querySelector('.love');
		var Text = document.querySelector('.Text');
		var btn_flush = document.querySelector('.btn_flush');
		var btn_send = document.querySelector('.btn_send');
		//用户名
		username.onfocus = function(){
			username.classList.add('active');
			a1.innerText = '';
			username.value = '';
		}
		username.onblur = function(){
			var _usrName = username.value;
			var reg =/^[\u2E80-\u9FFF]+$/;
			if(!/^[\u2E80-\u9FFF]+$/.test(_usrName)){
				a1.style.color = 'red';
				a1.innerText = '用户名不合法';
				return false;
			}else{
				a1.innerText = '用户名可用';
				a1.style.color = 'green';
			}
			username.classList.remove('active');
		}
		//密码
		password.onfocus = function(){
			password.classList.add('active');
			a2.innerText = '';
			password.value = '';
		}
		password.onblur = function(){
			var _pswWrd = password.value;
			var reg =/^[a-z0-9_-]{6,18}$/;
			if(!/^[a-z0-9_-]{6,18}$/.test(_pswWrd)){
				a2.style.color = 'red';
				a2.innerText = '密码不合法';
				return false;
			}else{
				a2.innerText = '密码可用';
				a2.style.color = 'green';
			}
			password.classList.remove('active');
		}
		//验证码
		vcode.onfocus = function(){
			vcode.classList.add('active');
			vcode.value = '';
			a3.innerText = '';
		}

		vcode.onblur = function(){
			var _vcode = vcode.value;
			if(_vcode.toLowerCase() == Text.innerHTML.toLowerCase()){
				a3.style.color = 'red';
				a3.innerText = '验证码正确';
				_vcodes =  _vcode;
			}else{
				a3.style.color = 'green';
				a3.innerText = '验证码不正确';
			}
			vcode.classList.remove('active');
		}
		var str = 'abcdefghigklmnopqrstuvwsyz1234567890';
		//随机验证码
		btn_flush.onclick = function(){
			Text.innerHTML = randomCode();
		}
		
		function randomCode(){
			// 随机生成一个4位验证码（包含字母）
			var _code = '';
			for(var i=0;i<4;i++){
				var index = parseInt(Math.random()*str.length) //不可能大于36
				_code += str[index];
			}
			return _code;
		}

		Text.innerHTML = randomCode();
		//发送验证码
		// btn_send.onclick = function(){
			
		// }






		$('.btn_send').on('click',function(){
			var _username = $('#username').val();
			var _password = $('#password').val();
			//发起ajax请求
			$.ajax({
				url:'../api/zc.php',
				data:{
					username:_username,
					password:_password
				},
				success:function(data){
					if(data === 'fail'){
					console.log(data);
						return;
					}
				}
			})
		})

	})
})