function initMap() {
  // Replace the latitude and longitude with the desired location on the map
  const myLatLng = { lat: 40.7128, lng: -74.006 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });

  // Add a marker to the map
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Your Location",
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Perform any additional logic (e.g., send data to the server) here
    // For this example, we will just display the data in the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Clear the form after submission (optional)
    event.target.reset();
  });
