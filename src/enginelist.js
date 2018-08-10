var searchEngineList = [
{
	category : "General web searching",
	engines : [
		{
			key : "STARTPAGE",
			display_name : "startpage",
			description : "The worlds most private search engine",
			query_url : "https://startpage.com/do/search?language=english&cat=web&query=$QUERY",
			about_url : "https://www.startpage.com/"
		}, {
			key : "DUCKDUCKGO",
			display_name : "DuckDuckGo",
			description : "The search engine that doesn't track you",
			query_url : "https://duckduckgo.com/?q=$QUERY_PLUS_SEP&ia=web",
			about_url : "https://duckduckgo.com/"
		}, {
			key : "BING",
			display_name : "Bing",
			description : "Bing web search",
			query_url : "https://www.bing.com/search?q=$QUERY",
			about_url : "https://www.bing.com/"
		}, {
			key : "GOOGLE",
			display_name : "Google",
			description : "Google web search",
			query_url : "https://www.google.com/search?q=$QUERY",
			about_url : "https://www.google.com/"
		}, {
			key : "YAHOO",
			display_name : "Yahoo",
			query_url : "https://search.yahoo.com/search?p=$QUERY_PLUS_SEP",
			about_url : "https://www.yahoo.com/"
		}
	]
},
{
	category : "Media searching",
	engines : [
		{
			key : "GOOGLE-IMAGES",
			display_name :  "Google Images",
			query_url : "https://www.google.com/search?tbm=isch&q=$QUERY"
		}, {
			key : "YOUTUBE",
			display_name : "YouTube",
			query_url : "https://www.youtube.com/results?search_query=$QUERY"
		}
	]
},
{
	category : "Other",
	engines : [
		{
			key : "URL",
			display_name : "Open as URL",
			description : "Use query as URL directly",
			mode : "URL"
		}, {
			key : "WIKIPEDIA",
			display_name : "Wikipedia",
			description : "Wikipedia search",
			query_url : "https://en.wikipedia.org/w/index.php?search=$QUERY_PLUS_SEP",
			about_url : "https://en.wikipedia.org/wiki/Main_Page"
		}, {
			key : "GOOGLE-MAPS",
			display_name : "Google Maps",
			query_url : "https://maps.google.com?q=$QUERY"					
		}
	]	    		
},
{
	category : "Language",
	engines : [	    			
		{	
			key : "GOOGLE-TRANSLATE",
			display_name : "Google Translate",
			query_url : "https://translate.google.com/#auto/en/$QUERY"
		}, {
			key : "THESAURUS.COM",
			display_name : "thesaurus.com",
			query_url : "http://thesaurus.com/browse/$QUERY"
		}
	]	    		
}];

