const userInput = document.getElementById("search");
const form = document.querySelector("#github-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchUser(userInput.value);
  form.reset()
});

function searchUser(username) {
  fetch(`https://api.github.com/search/users?q=${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {displayUsers(data.items)
    console.log(data.items);
    });
}

function displayUsers(users) {
  const userCards = document.querySelector('#user-list')
  users.forEach(user => {
    const userList = document.createElement('li')
    userList.innerHTML=`
    <h2>${user.login}</h2>
    <a href="${user.html_url}" target="_blank">View Profile</a>
    <a href="https://github.com/${user.login}?tab=repositories" target="_blank">View repositories</a>
`;
userCards.appendChild(userList)
  });
}
