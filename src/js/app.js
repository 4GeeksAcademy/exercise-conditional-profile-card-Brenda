import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // Setting default values for variables that might be null
  let includeCover =
    variables.includeCover !== undefined ? variables.includeCover : true;
  let background =
    variables.background ||
    "https://images.unsplash.com/photo-1511974035430-5de47d3b95da";
  let avatarURL =
    variables.avatarURL || "https://randomuser.me/api/portraits/men/42.jpg";
  let socialMediaPosition = variables.socialMediaPosition || "right";
  let name = variables.name || "First Name";
  let lastName = variables.lastName || "Last Name";
  let role = variables.role || "Role";
  let city = variables.city || "City";
  let country = variables.country || "Country";

  let twitter = variables.twitter
    ? `<a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a>`
    : "";
  let github = variables.github
    ? `<a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a>`
    : "";
  let linkedin = variables.linkedin
    ? `<a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a>`
    : "";
  let instagram = variables.instagram
    ? `<a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a>`
    : "";

  let cover = includeCover
    ? `<div class="cover"><img src="${background}" /></div>`
    : "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="position-${socialMediaPosition}">
            ${twitter}
            ${github}
            ${linkedin}
            ${instagram}
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
