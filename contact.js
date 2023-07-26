function initMap() {
  const myLatLng = { lat: 40.7128, lng: -74.006 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });


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

   
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);


    event.target.reset();
  });
