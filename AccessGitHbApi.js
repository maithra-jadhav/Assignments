
var Client = require('node-rest-client').Client;
var client = new Client();
var request = require('request');
var options = {
  url: 'https://api.github.com/orgs/customerio/repos?per_page=50',
  headers: {
    'User-Agent': 'maithra-jadhav'
  }
};

request(options, callback);

function callback(error, response, body) {
  console.log(response.statusCode);
  var json = JSON.parse(body);

  json = json.sort(watcherSort);
  var open_issues=0;
    for(i=0;i<json.length;i++) {
      console.log(json[i].full_name + " -- " + json[i].watchers_count);
      open_issues= open_issues +json[i].open_issues;
      
    }
   console.log(open_issues);
  console.log(json[json.length-1].full_name + " ----MOST WATCHERS");

}

var watcherSort = function (a, b) {
  return a.watchers_count - b.watchers_count;
}
