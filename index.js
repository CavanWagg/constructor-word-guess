var prompt = require('prompt');

// Get letter from user via prompt
  // 
  prompt.get(['Guess a letter'], function (err, result) {
    // 
    // Log the results. 
    // 
    result = userGuess;
    console.log('Command-line input received:');
    console.log('  letter: ' + userGuess.letter);
  });

  const wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", 
  "twitter", "github", "wordpress", "opera", "sass", "layout", "standards",
   "semantic", "designer", "developer", "module", "component", "website", 
   "creative", "banner", "browser", "screen", "mobile", "footer", "header", 
   "typography", "responsive", "programmer", "css", "border",
   "gulp", "pixel", "document", "object", "modernizr", "bootstrap", "react",
   "pattern", "ajax", "node", "element", "android", "application", "adobe", 
   "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", 
   "background", "property", "syntax", "html", "font", "blog", 
   "network", "server", "content", "database", "socket",
   "function", "variable", "link", "stylus", "query", "proxy",
   "email", "underscore", "cloud"];