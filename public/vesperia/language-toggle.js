(function (){
	function loadStyles(){
		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = 'japanese-only.css';
			link.media = 'all';
			head.appendChild(link);
		}
	}

	function getResult(val) {
		var result = "Not found",
			tmp = [];
		var items = location.search.substr(1).split("&");
		for (var index = 0; index < items.length; index++) {
			tmp = items[index].split("=");
			if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
		}
		return result;
	}
	//alert('her');
	var lang = 'eng';
	if(lang !== getResult('lang')){
		loadStyles();
	}

})();