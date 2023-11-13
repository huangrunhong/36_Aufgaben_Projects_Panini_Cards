const body = document.querySelector("body");
const formular = document.body.querySelector("#formular");
const addCard = document.body.querySelector("#addCard");
const headline = document.createElement("h1");
headline.textContent = "Add a Card";
formular.prepend(headline);

const firstName = document.createElement("input");
firstName.type = "text";
firstName.placeholder = "First Name";
const lastName = document.createElement("input");
lastName.type = "text";
lastName.placeholder = "Last Name";
const div1 = document.createElement("div");
div1.append(firstName, lastName);

const stageName = document.createElement("input");
stageName.type = "text";
stageName.placeholder = "Stage Name";

const albums = document.createElement("input");
albums.type = "number";
albums.placeholder = "How many albums?";
const singles = document.createElement("input");
singles.type = "number";
singles.placeholder = "How many top 10 Singles?";
const div2 = document.createElement("div");
div2.append(albums, singles);

const worth = document.createElement("input");
worth.type = "number";
worth.placeholder = "Net worth in EUR";
const age = document.createElement("input");
age.type = "number";
age.placeholder = "How old is this person?";
const div3 = document.createElement("div");
div3.append(worth, age);

const quote = document.createElement("textarea");
quote.placeholder = "A famous quote by this person";

const imageInput = document.createElement("input");
imageInput.placeholder = "image.URL";

formular.append(div1, stageName, div2, div3, quote, imageInput);

const section = document.body.querySelector("section");

addCard.addEventListener("click", () => {
  const image = document.createElement("img");
  image.src = `${imageInput.value}`;

  const firstNameOutput = document.createElement("h2");
  firstNameOutput.textContent = `${firstName.value}`;
  const lastNameOutput = document.createElement("h2");
  lastNameOutput.textContent = `${lastName.value}`;
  const div4 = document.createElement("div");
  div4.append(firstNameOutput, lastNameOutput);
  const stageNameOutput = document.createElement("h2");
  stageNameOutput.textContent = `${stageName.value}`;
  stageNameOutput.className = "stageName";

  const albumsOutput = document.createElement("p");
  albumsOutput.textContent = `Albums: ${albums.value}`;
  const singlesOutput = document.createElement("p");
  singlesOutput.textContent = `Hifs: ${singles.value}`;
  const worthOutput = document.createElement("p");
  worthOutput.textContent = `netWorth: ${worth.value}`;
  const ageOutput = document.createElement("p");
  ageOutput.textContent = `Age: ${age.value}`;
  const div5 = document.createElement("div");
  div5.append(albumsOutput, singlesOutput, worthOutput, ageOutput);
  section.append(image, div4, stageNameOutput, div5);
});
