
var defaultEngines = [[
	{key:"STARTPAGE", isDefault:true}, 
	{key:"DUCKDUCKGO"},
	{key:"BING"}, 
	{key:"URL"}],[
	{key:"GOOGLE"},
	{key:"YOUTUBE"},
	{key:"GOOGLE-MAPS"},
	{key:"GOOGLE-IMAGES"}],[
	{key:"GOOGLE-TRANSLATE"},
	{key:"THESAURUS.COM"}, 
	{key:"WIKIPEDIA"}
]];


function createSearchButton(entry, func, id) {
	engine = getEngineFromKey(entry.key);
	var elem = document.createElement('button');
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
	elem.appendChild(document.createTextNode(engine.display_name));
	return elem;
}

// State management
// ----------------

function stateLoad() {
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

function stateCheckValid(state) {
	return state.hasOwnProperty('newTab') && state.hasOwnProperty('engines');
}


function stateGetRejectDefaults() {
	// Set default no-cookie state
	var state = {newTab:true, consent:false};
	state.engines = defaultEngines;
	return state;
}

function stateGetAcceptDefaults() {
	// Set default no-cookie state
	var state = {newTab:true, consent:true};
	state.engines = defaultEngines;
	return state;
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
		console.log(c);
	}
}

function stateErase() {
	var date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	var c = "store=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	document.cookie = c;
}


