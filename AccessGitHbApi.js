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

  json = json.sort(custom_sort);
  var openIssues = 0;
  var watchers = 0;
    for(i=0;i<json.length;i++) {
    
      openIssues= openIssues +json[i].open_issues_count;
      if(watchers <= json[i].watchers_count)
      {
        watchers=json[i].watchers_count
      }
      
    }
    console.log("Total Open Issues = " + openIssues );
    console.log("Maximum watchers = " + watchers );
    for(i=0;i<json.length;i++) {
      console.log("Repos "+ json[i].full_name   + " sorted by update date = " + json[i].updated_at );
    }  
}
function custom_sort(a, b) {
  return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
}

var watcherSort = function (a, b) {
  return a.watchers_count - b.watchers_count;
}
