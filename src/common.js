
var defaultSearchEngines = [
	{key:"STARTPAGE", isDefault:true}, 
	{key:"DUCKDUCKGO"},
	{key:"BING"}, 
	{key:"URL"},
	{key:"NEWLINE"}, 
	{key:"GOOGLE"},
	{key:"YOUTUBE"},
	{key:"GOOGLE-MAPS"},
	{key:"GOOGLE-IMAGES"}, 
	{key:"NEWLINE"}, 
	{key:"GOOGLE-TRANSLATE"}, 
	{key:"THESAURUS.COM"}, 
	{key:"WIKIPEDIA"}
];

function createSearchButton(entry, func, id) {
	engine = getEngineFromKey(entry.key);
	var elem = document.createElement('button');
	elem.innerHTML = engine.display_name;
	elem.classList.add('btn');
	if (entry.isDefault) {
		elem.classList.add('btnDefault');
	}
	if (engine.description) {
    	elem.title = engine.description;		        		
	}
	if (entry.color) {
		elem.style.backgroundColor = entry.color;
	}
	elem.id = id;
	elem.addEventListener('click', func, false);
	return elem;
}


function saveState(s) {
	var date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	var c = "store="+encodeURIComponent(JSON.stringify(s))+"; expires=" + date.toGMTString();
	document.cookie = c;
}

function loadState() {
	var ret = { };
	console.log(document.cookie);
	var result = document.cookie.match(new RegExp('store=([^;]+)'));
	try {
		if (result)
			ret = JSON.parse(decodeURIComponent(result[1]));
	}
	catch(err) { 
	}
	return ret;
}

function isStateValid(state) {
	return state.hasOwnProperty('newTab') && state.hasOwnProperty('searchEngines');
}

function loadDefaults() {
	// Set default no-cookie state
	var state = {newTab:true};
	state.searchEngines = defaultSearchEngines;
	return state;
}


