const baseURL = 'https://api.github.com';
const user = 'hsztan';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  console.log(baseURL + `/repos/${repo}/forks`);
  fetch(baseURL + `/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  ).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const pElement = document.createElement('p');
  pElement.innerHTML = json.html_url;
  document.getElementById('results').appendChild(pElement)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value;
  const text = document.getElementById('body').value;
  console.log(title, text);
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

console.log('JavaScipt loaded up!')