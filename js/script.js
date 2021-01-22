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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// const page = null;
function showPage(list, page) {
   const startIndex = (page * list.length) - list.length;
   const endIndex = (page * list.length);
   const studentListUL = document.querySelector(".student-list");
   studentListUL.innerHTML = "";
   // console.log(studentListUL)
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentListUL.insertAdjacentHTML("beforeend", `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
         </div>
      </li>
      `);
      }
   }
}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numberOfButtons = Math.ceil(list.length / 9);
   const linkListUL = document.querySelector(".link-list");
   linkListUL.innerHTML = "";
   for (let i = 0; i < numberOfButtons; i++) {
   //    linkListUL.insertAdjacentHTML("beforeend", `<li>
   //    <button type="button>${i}</button>
   // </li>`)
      
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = i + 1;
      linkListUL.appendChild(li);
      li.appendChild(button);
   }
   // console.log(numberOfButtons);
   // numberOfButtons.className = "active";
   // linkListUL[0].addEventListener("click", function() {
   //    console.log("hello");
   // })
   const firstButton = linkListUL.children[0].childNodes[0];
   firstButton.className = "active";

   

}




// Call functions
showPage(data, 1);
addPagination(data);