# personal-ajax-lib


## Current Usage

```
const tmp = request("https://suicide-watch-backend.herokuapp.com/articles");
const res = tmp();  // returns {articles: Array(20)} 
res.articles; // returns (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```