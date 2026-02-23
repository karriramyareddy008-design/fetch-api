const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    container.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "";
            data.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.city}</p>
                `;

                container.appendChild(userCard);
            });
        })
        .catch(error => {
            container.innerHTML = "Error fetching data. Please try again.";
            console.error("Error:", error);
        });
}

reloadBtn.addEventListener("click", fetchUsers);

// Fetch data when page loads
fetchUsers();