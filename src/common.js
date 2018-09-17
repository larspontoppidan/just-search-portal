
var defaultEngines = [[
	{key:"STARTPAGE", isDefault:true}, 
	{key:"DUCKDUCKGO"},
	{key:"SEARXME"}, 
	{key:"QWANT"}],[
	{key:"GOOGLE"},	
	{key:"GOOGLE-MAPS"},
	{key:"GOOGLE-IMAGES"},
	{key:"URL"}],[
	{key:"GOOGLE-TRANSLATE"},
	{key:"WORDNIK"}, 
	{key:"WIKIPEDIA"}
]];

function getEngineFromKey(key) {
	ret = {};
	searchEngineList.forEach(function (category) {
		category.engines.forEach(function (engine) {
			if (engine.key == key) {
				ret = engine;
			}
		});
	});
	return ret;
}

function createSearchButtonEngine(engine, is_default, color, func, id) {
	var elem = document.createElement('button');
	elem.classList.add('btn');
	if (is_default) {
		elem.classList.add('btnDefault');
	} 
	if (engine.description) {
		elem.title = engine.description;
	}
	if (color) {
		elem.style.backgroundColor = color;
	}
	elem.id = id;
	elem.addEventListener('click', func, false);
	elem.appendChild(document.createTextNode(engine.display_name));
	return elem;
}

function createSearchButton(entry, func, id) {
	engine = getEngineFromKey(entry.key);
	return createSearchButtonEngine(engine, entry.isDefault, entry.color, func, id);
}

// State management
// ----------------

function stateLoad() {
	var ret = { };
	var result = document.cookie.match(new RegExp('store=([^;]+)'));
	try {
		if (result)
			ret = JSON.parse(decodeURIComponent(result[1]));
	}
	catch(err) { 
	}
	return ret;
}

function stateCheckValid(state) {
	return state.version == 1; 
}

function stateGetRejectDefaults() {
	// Return default no-cookie state, without cookie consent
	return {version:1, newTab:true, consent:false, engines:defaultEngines};
}

function stateGetAcceptDefaults() {
	// Return default no-cookie state, with cookie consent
	return {version:1, newTab:true, consent:true, engines:defaultEngines};
}

function stateLoadOrDefault() {
	var state = stateLoad();
	
	if (!stateCheckValid(state)) {
		state = stateGetRejectDefaults();
	}
	
    return state;
}

function stateSave(s) {
	if (s.consent) {
		var date = new Date();
		date.setFullYear(date.getFullYear() + 1);
		var c = "store="+JSON.stringify(s)+"; expires=" + date.toGMTString();
		document.cookie = c;
	}
}

function stateErase() {
	var c = "store=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	document.cookie = c;
}
