var searchEngineList = [
{
	category : "Web search",
	engines : [
		{
			key : "STARTPAGE",
			display_name : "startpage",
			description : "startpage web search",
			query_url : "https://startpage.com/do/search?language=english&cat=web&query=$QUERY",
			about_url : "https://www.startpage.com/"
		}, {
			key : "DUCKDUCKGO",
			display_name : "DuckDuckGo",
			description : "DuckDuckGo web search",
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
	category : "Media search",
	engines : [
		{
			key : "GOOGLE-IMAGES",
			display_name :  "Google Images",
			query_url : "https://www.google.com/search?tbm=isch&q=$QUERY"
		}, {
			key : "YOUTUBE",
			display_name : "YouTube",
			query_url : "https://www.youtube.com/results?search_query=$QUERY",
			about_url : "https://www.youtube.com"
		}, {
			key : "IMDB",
			display_name : "IMDb",
			description : "Search the Internet Movie Database",
			query_url : "https://www.imdb.com/find?q=$QUERY_PLUS_SEP",
			about_url : "https://www.imdb.com"
		}, {
			key : "ALLMUSIC",
			display_name : "AllMusic",
			description : "Search with AllMusic",
			query_url : "https://www.allmusic.com/search/all/$QUERY",
			about_url : "https://www.allmusic.com"
		}
	]
},
{
	category : "Other",
	engines : [
		{
			key : "URL",
			display_name : "Open as URL",
			description : "Open search query as the URL",
			mode : "URL"
		}, {
			key : "WIKIPEDIA",
			display_name : "Wikipedia",
			description : "Wikipedia search",
			query_url : "https://en.wikipedia.org/w/index.php?search=$QUERY_PLUS_SEP",
			about_url : "https://en.wikipedia.org/wiki/Main_Page"
		}, {
			key : "WIKIMEDIA-COMMONS",
			display_name : "Wikimedia commons",
			description : "Wikimedia commons search",
			query_url : "https://commons.wikimedia.org/w/index.php?search=$QUERY_PLUS_SEP",
			about_url : "https://commons.wikimedia.org"
		}, {
			key : "GOOGLE-MAPS",
			display_name : "Google Maps",
			description : "Search Google Maps",
			query_url : "https://maps.google.com?q=$QUERY",
			about_url : "https://maps.google.com"
		}
	]	    		
},
{
	category : "Language",
	engines : [	    			
		{	
			key : "GOOGLE-TRANSLATE",
			display_name : "Google Translate",
			query_url : "https://translate.google.com/#auto/en/$QUERY",
			about_url : "https://translate.google.com"
		}, {
			key : "THESAURUS.COM",
			display_name : "thesaurus.com",
			description : "Search thesaurus.com",
			query_url : "https://thesaurus.com/browse/$QUERY",
			about_url : "https://thesaurus.com"
		}, {
			key : "MERRIAM-WEBSTERS-DICT",
			display_name : "Merriam Websters",
			description : "Search Merriam Websters dictionary",
			query_url : "https://www.merriam-webster.com/dictionary/$QUERY",
			about_url : "https://www.merriam-webster.com"
		}, {
			key : "MERRIAM-WEBSTERS-THES",
			display_name : "Merriam Websters Thesaurus",
			description : "Search Merriam Websters thesaurus",
			query_url : "https://www.merriam-webster.com/thesaurus/$QUERY",
			about_url : "https://www.merriam-webster.com"
		}
	]	    		
}];

