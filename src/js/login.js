require(['config'],function(){
	require(['jquery'],function(){
		$('.btn_login').on('click',function(){
			// var _username = $('#username').val();
			// var _password = $('#password').val();
			var _username = document.querySelector('#username');
			var _password = document.querySelector('#phone');
			var _vcode = document.querySelector('#vcode');
			var err = document.querySelector('.err');
			console.log(_username);
			_username.onfocus = function(){
				_username.classList.add('active');
				err.innerText = '';
				username.value = '';
			}
			_username.onblur = function(){
				_username.classList.remove('active');
			}
			if(_username !== ''){
				//发起ajax请求
				ajax.get({
					url:'../api/login.php',
					data:{
						username:_username,
						password:_password
					},
					success:function(data){
						// console.log(data);
						if(data === 'fail'){
							err.innerText = "用户名或密码错误";
						}else{
							window.location.href = "index.html";
						}
					}
				})
			}
		})
	})
})