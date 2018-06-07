$(document).ready(function(){
	$('.btn-login').on('submit', function(event) {
		return $(this).validator({
			'email': ['isEmail', ''],
			'password': ['is', '', '^\\S{6,18}$']
		}, true);
	});

	$('.btn-register').on('submit',function(){
		return $(this).validator({
			'email': ['isEmail', ''],
			'password': ['is', '', '^\\S{6,18}$'],
			'passwordAgain': ['value_eq', '', 'pwd_r']
		},true);
	});
});