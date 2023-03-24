// JavaScript code for Prediction page

// Function to fetch data from API
function fetchData() {
    // Replace the URL with your own API endpoint
    fetch("https://api.example.com/prediction")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Process the data as per your requirement
        console.log(data);
      })
      .catch(error => {
        console.error("There was a problem fetching the data: ", error);
      });
  }
  
  // Call the fetchData function when the page loads
  window.onload = function() {
    fetchData();
  }
  