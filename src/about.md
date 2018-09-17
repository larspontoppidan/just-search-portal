
## Description


The Just Search Portal is an open source, distraction free and privacy respecting search portal. Simply type the query and click the desired search engine to submit the query to.

The portal was made with the following goals:

**Privacy**. The search query is not sent anywhere other than to the chosen search engine. The portal makes it is easy to choose privacy minded search engines when relevant and other engines when not.

**Efficiency**. The portal main page loads very fast as it is a single file static HTML page that doesn't download any external dependencies. The browser will soon cache the HTML file and the page will show up without any delay at all. 

This makes the portal very well suited as a browser homepage or new-tab page.

**Freedom of choice**. The portal makes it easy to use different search providers and alternate between them. This reduces the risk of falling into a habit of using the same search provider all the time. The portal also provides direct access to specialised pages like Wikipedia and dictionarys.

**Without distractions**. The search bar does not show search suggestions while the query is being typed. This lack of a feature is a feature in itself, because it respects the original search intent of the user. When search suggestions are shown it influences the thought process and makes the user more likely to use the terms promoted in the suggestions. With the Just Search Portal, the user gets to type the original query in peace.

The portal has no ads, doodles nor recently visited page suggestions luring the user into procrastination.

Check out this [YouTube video](https://www.youtube.com/watch?v=fASp63eB60Q) about the portal.

**Usability**. The Just Search Portal can be added as a search plugin to the search menu in most browsers. 

It is possible to customize the selection of search engines and button layout.

## Tips and tricks

### Show All Engines

Checking `Show All Engines` will immediately show all the search engines available. 

When `Show All Engines` is not checked, the custom search view is shown which can be customized in the [Customize Page](customize.html).

### Default Search engines

The default search engines are marked with a thick black border around the search button and will be searched when pressing Enter from the search bar. 

If there are multiple default search engines all of them will searched at the same time when pressing Enter and the search results will appear in multiple browser tabs. The browser might need to configured to allow pop-ups for this to work.

Select the default search engines in the [Customize Page](customize.html). 

### Open as URL

The search button named `Open as URL` is not a search engine but a function that opens the search query as an URL directly. 

This is handy when encountering links in plain text that can't be clicked. With Just Search Portal installed as a search plugin it is a matter of selecting the text, invoking JustSearchPortal, and clicking `Open as URL` after reviewing the URL in the search bar.

### Mobile

The portal was made to be usable on mobile and touch devices

## Installing the search plugin

Just Search Portal provides an [OpenSearch](https://en.wikipedia.org/wiki/OpenSearch) plugin for integration with the search menu in browsers. Care has been taken to make the plugin in a way that doesn't send the search terms to the server hosting justsearchportal.com. Read more about that [here](https://larsee.com/blog/2018/02/passing-url-parameters-client-only/). 

### Firefox

1. Click the top-right "burger" menu and select Preferences 
2. Select `Search`
3. Make sure `Add search bar in toolbar` is selected
4. Navigate to Just Search Portal main page
5. Click the magnifier glass in the search bar in the toolbar.
6. Click `Add "JustSearchPortal"`


## Setting as homepage and new-tab page

### Firefox

1. Click the top-right "burger" menu and select Preferences
2. Select `Home`
3. Type `https://justsearchportal.com/` as a Custom URL home page
4. Install an extension to control the new tab page, like this one: [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
5. Configure the extension to use the home page as the new tab page


## Read more

More information and updates can be found [here](https://larsee.com/blog/tag/just-search-portal.html).

## Contact

The source is available on Github: [https://github.com/larspontoppidan/just-search-portal](https://github.com/larspontoppidan/just-search-portal)

Email: [contact@justsearchportal.com](mailto:contact@justsearchportal.com)

