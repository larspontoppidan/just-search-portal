var searchEngineList = [
{
	category : "Web search",
	engines : [
		{
			key : "STARTPAGE",
			display_name : "startpage",
			description : "Google search results, with complete privacy protection",
			query_url : "https://startpage.com/do/search?language=english&cat=web&query=$QUERY",
			about_url : "https://www.startpage.com/"
		}, {
			key : "DUCKDUCKGO",
			display_name : "DuckDuckGo",
			description : "The search engine that respects your privacy",
			query_url : "https://duckduckgo.com/?q=$QUERY_PLUS_SEP&ia=web",
			about_url : "https://duckduckgo.com/"
		}, {
			key : "QWANT",
			display_name : "Qwant",
			description : "A search engine that doesn't do user tracking",
			query_url : "https://www.qwant.com/?q=$QUERY&t=web",
			about_url : "https://www.qwant.com/"
		}, {
			key : "SEARXME",
			display_name : "searX",
			description : "Searx is a metasearch engine, aggregating the results of other search engines while not storing information about its users.",
			query_url : "https://searx.me/?q=$QUERY",
			about_url : "https://searx.me/about"
		}, {
			key : "GOOGLE",
			display_name : "Google",
			description : "Web search with Google",
			query_url : "https://www.google.com/search?q=$QUERY",
			about_url : "https://www.google.com/"
		}, {
			key : "BING",
			display_name : "Bing",
			description : "A web search engine owned and operated by Microsoft",
			query_url : "https://www.bing.com/search?q=$QUERY",
			about_url : "https://www.bing.com/"
		}, {
			key : "YAHOO",
			display_name : "Yahoo",
			description : "Search with Yahoo",
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
			query_url : "https://www.google.com/search?tbm=isch&q=$QUERY",
			about_url : "https://www.google.com/"
		}, {
			key : "YOUTUBE",
			display_name : "YouTube",
			query_url : "https://www.youtube.com/results?search_query=$QUERY",
			about_url : "https://www.youtube.com"
		}, {
			key : "BITCHUTE",
			display_name : "BitChute",
			description : "A video hosting site that uses P2P technology",
			query_url : "https://www.bitchute.com/search/?q=$QUERY_PLUS_SEP&sort=date_created+desc",
			about_url : "https://www.bitchute.com"
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
		}, {
			key : "SOUNDCLOUD",
			display_name : "SoundCloud",
			description : "Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.",
			query_url : "https://soundcloud.com/search?q=$QUERY",
			about_url : "https://soundcloud.com"
		}
	]
},
{
	category : "Shopping",
	engines : [
		{
			key : "AMAZON-CO-UK",
			display_name :  "Amazon.co.uk",
			query_url : "https://www.amazon.co.uk/s/field-keywords=$QUERY",
			about_url : "https://www.amazon.co.uk/"
		}, {
			key : "AMAZON-COM",
			display_name :  "Amazon.com",
			query_url : "https://www.amazon.com/s/field-keywords=$QUERY",
			about_url : "https://www.amazon.com/"
		}, {
			key : "AMAZON-DE",
			display_name :  "Amazon.de",
			query_url : "https://www.amazon.de/s/field-keywords=$QUERY",
			about_url : "https://www.amazon.de/"
		}, {
			key : "EBAY-COM",
			display_name : "eBay.com",
			query_url : "https://www.ebay.com/sch/i.html?_nkw=$QUERY_PLUS_SEP",
			about_url : "https://www.ebay.com"
		}, {
			key : "PRICERUNNER",
			display_name : "PriceRunner",
			description : "A product price comparison site",
			query_url : "https://www.pricerunner.com/results?q=$QUERY",
			about_url : "https://www.pricerunner.com"
		}
	]
},
{
	category : "Other",
	engines : [
		{
			key : "URL",
			display_name : "Open as URL",
			description : "Open search query as the URL directly",
			mode : "URL"
		}, {
			key : "WIKIPEDIA",
			display_name : "Wikipedia",
			query_url : "https://en.wikipedia.org/w/index.php?search=$QUERY_PLUS_SEP",
			about_url : "https://en.wikipedia.org/wiki/Main_Page"
		}, {
			key : "GOOGLE-MAPS",
			display_name : "Google Maps",
			query_url : "https://maps.google.com?q=$QUERY",
			about_url : "https://maps.google.com"
		}, {
			key : "TWITTER",
			display_name : "Twitter",
			query_url : "https://twitter.com/search?q=$QUERY",
			about_url : "https://twitter.com"
		}, {
			key : "REDDIT",
			display_name : "reddit",
			query_url : "https://www.reddit.com/search?q=$QUERY",
			about_url : "https://www.reddit.com"
		}, {
			key : "MINDS",
			display_name : "MINDS",
			description : "A social network commited to privacy and free speach",
			query_url : " https://www.minds.com/search;q=$QUERY",
			about_url : "https://www.minds.com"
		}
	]
},
{
	category : "Language",
	engines : [
		{
			key : "GOOGLE-TRANSLATE",
			display_name : "Google Translate",
			description : "Translate to English using Google Translate",
			query_url : "https://translate.google.com/#auto/en/$QUERY",
			about_url : "https://translate.google.com"
		}, {
			key : "WIKTIONARY",
			display_name : "Wiktionary",
			description : "A free dictionary of all words in all languages",
			query_url : "https://en.wiktionary.org/wiki/Special:Search?search=$QUERY_PLUS_SEP",
			about_url : "https://en.wiktionary.org"
		}, {
			key : "THESAURUS.COM",
			display_name : "thesaurus.com",
			description : "Search thesaurus.com",
			query_url : "https://thesaurus.com/browse/$QUERY",
			about_url : "https://thesaurus.com"
		}, {
			key : "MERRIAM-WEBSTERS-DICT",
			display_name : "Merriam Webster",
			description : "Search Merriam Webster's dictionary",
			query_url : "https://www.merriam-webster.com/dictionary/$QUERY",
			about_url : "https://www.merriam-webster.com"
		}, {
			key : "MERRIAM-WEBSTERS-THES",
			display_name : "Merriam Webster Thesaurus",
			description : "Search Merriam Webster's thesaurus",
			query_url : "https://www.merriam-webster.com/thesaurus/$QUERY",
			about_url : "https://www.merriam-webster.com"
		}, {
			key : "WORDNIK",
			display_name : "Wordnik",
			description : "Wordnik is the world's biggest online English dictionary, by number of words.",
			query_url : "https://www.wordnik.com/words/$QUERY",
			about_url : "https://www.wordnik.com"
		}
	]
}];

