/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
This function creates and appends all the elements needed to display a page.
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const studentListUL = document.querySelector(".student-list");
   studentListUL.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentListUL.insertAdjacentHTML("beforeend", 
            `<li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${data[i].name.first} ${data[i].name.last}</h3>
                  <span class="email">${data[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${data[i].registered.date}</span>
               </div>
            </li>`
         );
      }
   }
}


/*
This function creates the buttons necessary to navigate between pages
*/
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / 9);
   const linkListUL = document.querySelector(".link-list");
   linkListUL.innerHTML = "";
   for (let i = 0; i < numberOfButtons; i++) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = i + 1;
      linkListUL.appendChild(li);
      li.appendChild(button);
   }
   
   const firstButton = linkListUL.children[0].childNodes[0];
   firstButton.className = "active";

   linkListUL.addEventListener("click", function(e) {
      if (e.target.tagName == "BUTTON") {
         for (let i = 0; i < linkListUL.children.length; i++) {
            const pageButton = linkListUL.children[i].children[0]
            pageButton.classList.remove("active");
         }
         e.target.classList.add("active");
         showPage(list, e.target.textContent)
      }
   })
}


// This is the section where the functions are called
showPage(data, 1);
addPagination(data);