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
  ).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const pElement = document.createElement('p');
  //console.log(json)
  pElement.innerHTML = json.html_url;
  document.getElementById('results').appendChild(pElement)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const obj = {
    title: title,
    body: body
  }
  fetch(baseURL + `/repos/${user}/js-ajax-fetch-lab/issues`,
  {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  ).then(res => res.json()).then(json => json);
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(baseURL + `/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

console.log('JavaScipt loaded up!')