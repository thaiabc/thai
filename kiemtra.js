var loginFormVisible = false;

		function toggleLoginForm() {
			var loginForm = document.getElementById("login-form");
			loginFormVisible = !loginFormVisible;

			if (loginFormVisible) {
				loginForm.style.display = "block";
			} else {
				loginForm.style.display = "none";
			}
		}
		var username = document.getElementById("username");
		var password = document.getElementById("password");
		const btn_login = document.getElementById("btn-login")
		
		btn_login.addEventListener('click', function(){
			if(username.value == ""){
				alert("Chưa nhập tài khoản!!!")
				return false
			} else if(password.value == ""){
				alert("Chưa nhập mật khẩu!!!")
			}
		})