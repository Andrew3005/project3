window.onload = function(){
	var facebook = document.querySelector("#facebook");
	var twitter = document.querySelector("#twitter");
	var youtube = document.querySelector("#youtube");
	var load = document.querySelector("#load");
	var preload = document.querySelector(".preload");
	var percent = document.querySelector("#percent");
	var footer = document.querySelector(".footer");
	var count = 0;
	var bf = true;
	var bt = true;
	var by = true;
	if(parseInt(getComputedStyle(percent).height) > 34){
		document.querySelector(".wrap").style.top = 35 + "px";
	}

	facebook.onclick = function(e){
		if(bf){		
			facebook.classList.add("rose");
			count++;
			check(count);
			bf = false;
		}
	};

	twitter.onclick = function(e){
		if(bt){		
			twitter.classList.add("rose");
			count++;
			check(count);
			bt = false;
		}
	};

	youtube.onclick = function(e){
		if(by){		
			youtube.classList.add("rose");
			count++;
			check(count);
			by = false;
		}
	};

	function check(count){
		switch (count){
		case 1 : 
			load.classList.add("line");
			preload.classList.add("col-xs-4");
			percent.innerHTML = count + " step done on 3";
			if(parseInt(getComputedStyle(percent).height) > 34){
				document.querySelector(".wrap").style.top = 35 + "px";
			}
			break;
		case 2 :
			preload.classList.remove("col-xs-4");
			preload.classList.add("col-xs-8");
			percent.innerHTML = count + " step done on 3";
			if(parseInt(getComputedStyle(percent).height) > 34){
				document.querySelector(".wrap").style.top = 35 + "px";
			}
			break;
		case 3 :
			preload.classList.remove("col-xs-8");
			preload.classList.add("col-xs-12");
			percent.innerHTML = count + " step done on 3. Good Job!"; 
			if(parseInt(getComputedStyle(percent).height) > 34){
				document.querySelector(".wrap").style.top = 35 + "px";
			}
			footer.style.display = "block";
			break;
		}
	}
};

