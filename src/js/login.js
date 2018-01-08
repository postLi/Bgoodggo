require(['config'],function(){
	require(['jquery'],function(){
		$('.btn_login').on('click',function(){
			var _username = $('#username').val();
			var _password = $('#password').val();
			
			//发起ajax请求
			$.ajax({
				url:'../api/zc.php',
				data:{
					username:_username,
					password:_password
				}
					console.log(data);
				success:function(data){
					if(data === 'fail'){
					return;
					}
				}
			})
		})
	})
})