var logo = document.querySelector("#logo"),
	rightContent = document.querySelector("#rightContent"),
	customerService = document.querySelector("#customerService"),
	username = document.querySelector("#username"),
	usernameTip = document.querySelector("#usernameTip"),
	loginPassword = document.querySelector("#loginPassword"),
	loginPasswordTip1 = document.querySelector("#loginPasswordTip1"),
	loginPasswordTip1div = loginPasswordTip1.querySelectorAll("div"),
	loginPasswordTip2 = document.querySelector("#loginPasswordTip2"),
	loginPasswordTip2td = loginPasswordTip2.querySelectorAll("td"),
	confirmPassword = document.querySelector("#confirmPassword"),
	confirmPasswordTip = document.querySelector("#confirmPasswordTip"),
	myname = document.querySelector("#name"),
	nameTip = document.querySelector("#nameTip"),
	nameTipspan = nameTip.querySelector("span"),
	namerule = nameTip.querySelector("#namerule"),
	IDnumber = document.querySelector("#IDnumber"),
	IDnumberTip = document.querySelector("#IDnumberTip"),
	myemail = document.querySelector("#email"),
	emailTip = document.querySelector("#emailTip"),
	phoneNumber = document.querySelector("#phoneNumber"),
	phoneNumberTip = document.querySelector("#phoneNumberTip"),
	myImooc = document.querySelector("#myImooc"),
	myImoocul = myImooc.querySelector("ul"),
	myImooca = myImooc.querySelectorAll("a"),
	netStep = document.querySelector("#netStep"),
	confirmProtocol = document.querySelector("#confirmProtocol");

//根据相同行为绑定事件（绑定了 意见反馈、imooc@com、登录、注册和手机版的鼠标和颜色改变效果 的事件）
var pointerAndcolorchange = rightContent.querySelectorAll("a");//鼠标经过变成小手状且字体颜色改变

// 确认表单标志
var test1 = false, test2 = false, test3 = false, test4 = false, test5 = false, test6 = false, test7 = false;

// 通过循环绑定数组事件
var pointerAndcolorchangeMouseover = function(x){
	pointerAndcolorchange[x].onmouseover = function(){
		this.style.cursor = "pointer";
		this.style.color = "rgb(251,116,3)";
	}
}
var pointerAndcolorchangeMouseout = function(x){
	pointerAndcolorchange[x].onmouseout = function(){
		this.style.color = "#000";
	}
}
for(var i=0; i<4; i++){
	pointerAndcolorchangeMouseover(i);
	pointerAndcolorchangeMouseout(i);
}

pointerAndcolorchangeMouseover(15);//为手机版标志添加mouseover事件
pointerAndcolorchangeMouseout(15);//为手机版标志添加mouseout事件
logo.onmouseover = function(){
	this.style.cursor = "pointer";
}
customerService.onmouseover = function(){
	this.style.cursor = "pointer";
}
myImooc.onmouseover = function(){
	myImoocul.style.display = "block";
	this.style.cursor = "pointer";
	this.style.color = "rgb(251,116,3)";
}
myImooc.onmouseout = function(){
	myImoocul.style.display = "none";
	this.style.color = "#000";
}
// 通过循环绑定myImoocli的onmouseover事件
var myImoocaMouseover = function(x){
	myImooca[x].onmouseover = function(){
		myImooca[x].style.color = "rgb(251,116,3)";
	}
}
var myImoocaMouseout = function(x){
	myImooca[x].onmouseout = function(){
		myImooca[x].style.color = "#7d7e81";
	}
}
for(var i=0;i<11;i++){
	myImoocaMouseover(i);
	myImoocaMouseout(i);
}

// 表单验证
username.onfocus = function(){
	usernameTip.innerHTML = "6-30位字母、数字或\"_\"，字母开头";
	usernameTip.style.color = "rgb(251,116,3)"
}
username.onblur = function(){
	var reg = /^[a-zA-Z]\w{5,29}/;
	if(reg.exec(this.value)){
		test1 = true;
		usernameTip.innerHTML = "用户名输入正确";
		usernameTip.style.color = "green";
	}else{
		test1 = false;
		usernameTip.innerHTML = "6-30位字母、数字或\"_\"，字母开头";
		usernameTip.style.color = "red";
	}
}
loginPassword.onblur = function(){
	var reg = /^[\w|@|!|&|*|#|$|^|?|!|~|+|=|-|\.|,]{6,20}$/;
	if(!reg.exec(this.value)){
		test2 = false;
		loginPasswordTip2td[2].innerHTML = "请输入6-20位字母、数字或符号";
		loginPasswordTip2.style.color="red";
		loginPasswordTip1div[1].style.backgroundColor = "#ddd";
		loginPasswordTip1div[2].style.backgroundColor = "#ddd";
	}else{
		test2 = true;
		var reg1 = /[@|!|&|*|#|$|^|?|!|~|+|=|-|\.|,]/,
			reg2 = /[a-zA-Z]/,
			reg3 = /[0-9]/;
		var sum = 0;//类型数
		loginPasswordTip2td[2].innerHTML= "";
			if(reg1.test(this.value)){
				sum++;
			}
			if(reg2.test(this.value)){
				sum++;
			}
			if(reg3.test(this.value)){
				sum++;
			}
			switch(sum){
				case 1:
					loginPasswordTip1div[1].style.backgroundColor = "#ddd";
					loginPasswordTip1div[2].style.backgroundColor = "#ddd";
				break;
				case 2:
					loginPasswordTip1div[1].style.backgroundColor = "#ffa706";
					loginPasswordTip1div[2].style.backgroundColor = "#ddd";
				break;
				case 3:
					loginPasswordTip1div[2].style.backgroundColor = "#068306";
				break;
			}
	}
}
confirmPassword.onblur = function(){
	if(!this.value){
		test3 = false;
		confirmPasswordTip.innerHTML="输入框不能为空";
		confirmPasswordTip.style.color="red";
	}
	else if(loginPassword.value === this.value){
		test3 = true;
		confirmPasswordTip.innerHTML="两次输入一致";
		confirmPasswordTip.style.color="green";
	}
	else{
		test3 = false;
		confirmPasswordTip.innerHTML="两次密码的输入不一致，请重新输入";
		confirmPasswordTip.style.color="red";
	}
}
myname.onblur = function(){
	var reg = /^[A-Za-z]{3,30}$|^[\u4e00-\u9fa5]{2,15}$/;
	if(reg.test(this.value)){
		test4 = true;
		nameTip.innerHTML = "姓名输入正确";
		nameTip.style.color = "green";
		nameTip.style.textDecoration = "none";
	}else{
		test4 = false;
		nameTip.innerHTML = "姓名只能包含中文或者英文且字符在3-30个之间！"
		nameTip.style.color = "red";
		nameTip.style.textDecoration = "none";
	}
}

// 姓名填写规则
nameTipspan.onmouseover = function(){
	namerule.style.display = "block";
}
nameTipspan.onmouseout = function(){
	namerule.style.display = "none";
}

//表单验证
IDnumber.onblur = function(){
	var reg = /^[0-9]{18}$|^[0-9]{17}(x|X)$/;
	if(reg.test(this.value)){
		test5 = true;
		IDnumberTip.innerHTML = "号码输入正确";
		IDnumberTip.style.color = "green";
	}else{
		test5 = false;
		IDnumberTip.innerHTML = "请输入18位身份证号码";
		IDnumberTip.style.color = "red";
	}
}
myemail.onblur = function(){
	var reg = /^[0-9a-zA-Z_-]+\@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_-]+$/
	if(reg.test(this.value)){
		test6 = true;
		emailTip.innerHTML = "邮箱格式正确";
		emailTip.style.color = "green";
	}else{
		test5 = false;
		emailTip.innerHTML = "请输入正确的邮箱";
		emailTip.style.color = "red";
	}
}
phoneNumber.onblur = function(){
	var reg = /^1[03-9][0-9]{9}$/;
	if(reg.test(this.value)){
		test7 = true;
		phoneNumberTip.innerHTML = "手机格式正确";
		phoneNumberTip.style.color = "green";
	}else{
		test7 = false;
		phoneNumberTip.innerHTML = "您输入的手机号码不是有效的格式！";
		phoneNumberTip.style.color = "red";
	}
}

// 最终验证、提交
netStep.onmouseover = function(){
	this.style.cursor="pointer";
	this.style.backgroundColor = "green";
}
netStep.onmouseout = function(){
	this.style.backgroundColor = "rgb(251,116,3)";
}
netStep.onclick = function(){
	if(test1&test2&test3&test4&test5&test6&test7&confirmProtocol.checked){
		window.location.href = "https://www.imooc.com";
	}
}
