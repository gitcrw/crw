requirejs.config({
	paths:{
		'jquery' : '../lib/jquery-1.10.1.min',//.js省略
		'list' : 'list',
		'sum' : 'sum'
	},
	shim:{//保证顺序
		'list':{
			deps : ['jquery']
		},
		'sum' : {
			deps : ['list']
		}
	}
});

requirejs(['sum','list','jquery'],function($) {//不保证顺序,等到所有模块加载完成才执行这里函数
	// console.log(1);
});