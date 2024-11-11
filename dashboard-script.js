// dashboard-script.js

// Sample hardcoded username and password
const correctUsername = "admin";
const correctPassword = "password123";

// Simulate login authentication
function authenticateUser() {
    const username = prompt("Enter Username:");
    const password = prompt("Enter Password:");

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('dashboard').style.display = 'block'; // Show dashboard
    } else {
        alert("Invalid login credentials");
        window.location.href = 'index.html'; // Redirect to login page
    }
}

// Function to fetch and display top 10 GitHub users
document.getElementById('fetchBtn').addEventListener('click', function () {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear the list before fetching new users

    // Simulated GitHub users list
    const githubUsers = [
        'mojombo', 'defunkt', 'pjhyett', 'wycats', 'ezmobius',
        'ivey', 'evanphx', 'vanpelt', 'wayneeseguin', 'brynary'
    ];

    githubUsers.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        userList.appendChild(listItem);
    });
});

// Sorting functionality
document.getElementById('sort-select').addEventListener('change', function (event) {
    const sortOption = event.target.value;
    const userList = document.getElementById('user-list');
    const users = Array.from(userList.children);

    if (sortOption === 'alphabetical') {
        users.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Sort alphabetically
    } else {
        users.sort(); // Default sort (in this case, nothing will change)
    }

    // Clear the list and re-add sorted users
    userList.innerHTML = '';
    users.forEach(user => {
        userList.appendChild(user);
    });
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function () {
    document.getElementById('dashboard').style.display = 'none'; // Hide dashboard
    alert("You have logged out.");
    window.location.href = 'index.html'; // Redirect to login page
});

// Call the authenticateUser function to simulate login
authenticateUser();
