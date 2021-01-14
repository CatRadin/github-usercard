import axios from "axios";

/*  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//this is where i want the cards to be appended too!

const cards = document.querySelector('.cards');


//step 4 (so out of order!) ------------------------------------------------------
axios.get("https://api.github.com/users/CatRadin")
.then(response => {
  cards.append(githubCard(response.data));
  })
.catch((error) => {
  console.log("something went big wrong! :3", error);
})




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
//step 5 ------------------------------------------
const followersArray = [ 'tetondan', 'dustinmyers', 'justsml' , 'luishrd', 'bigknell'];



axios.get(('https://api.github.com/users/catradin/followers'))
.then(response => {
  followersArray.forEach(item =>{
    axios.get(`https://api.github.com/users/${item}`)
    .then(response =>{
      cards.append(githubCard(response.data));
    })
  })
})


//step 3 ------------------------------------------------------
function githubCard(data){
  //making elements here
const card = document.createElement("div");
const profileIMG = document.createElement("img");
const cardInfo = document.createElement("div");
const rName = document.createElement("h3");
const uName = document.createElement("p");
const uLocation = document.createElement("p");
const profileLink = document.createElement("a");
const uFollowers = document.createElement("p");
const uFollowing = document.createElement("p");
const uBio = document.createElement("p");

// making the structure here
card.appendChild(profileIMG);
card.appendChild(cardInfo);
cardInfo.appendChild(rName);
cardInfo.appendChild(uName);
cardInfo.appendChild(uLocation);
cardInfo.appendChild(profileLink)
cardInfo.appendChild(uFollowers);
cardInfo.appendChild(uFollowing);
cardInfo.appendChild(uBio);

//class names here
card.classList.add('card');
cardInfo.classList.add("card-info");
rName.classList.add('name');
uName.classList.add('username');

//text content
profileIMG.setAttribute('src', data.avatar_url)
rName.textContent = data.name;
uName.textContent = data.login;
uLocation.textContent = `Location: ${data.location}`;
profileLink.textContent = "Profile: "
profileLink.setAttribute('href', data.html_url);
uFollowers.textContent = `Followers: ${data.followers}`;
uFollowing.textContent = `Following: ${data.following}`;
uBio.textContent = `Bio: ${data.bio}`;

//return 


return card


}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
