const container = document.querySelector(".container");
const addButton = document.querySelector("input[type=submit]");
const newLink = document.querySelector(".newLink");

//the following function gets triggered when the "add" button is clicked
//it adds the link to the list
addButton.addEventListener("click", () => {
  if (newLink.value === " " || !newLink.value) {
    return;
  }
  let link = newLink.value;
  let linkName = link.split(".");

  // makes the link complete
  if (linkName[0].search("www")) {
    // console.log("adding protocole");
    link = "http://www" + "." + linkName[0] + "." + linkName[1];
    linkName = link.split(".");
  } else if (
    linkName[0].search("http://www") ||
    linkName[0].search("https://www")
  ) {
    // console.log("adding protocole");
    link = "http://www" + "." + linkName[1] + "." + linkName[2];
  }

  // adds an anchor tag to the extension body
  const template = `<a href="${link}" target="_blank">${linkName[1]}</a>`;
  let newElmt = document.createElement("div");
  newElmt.classList.add("link");
  newElmt.innerHTML = template;
  container.appendChild(newElmt);
  newLink.value = " ";
});
