console.log("This is a notes app Js");
showNotes();

//If user adds a note,add to the local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addtext = document.getElementById("addText");
  let addTitle = document.getElementById("addTitle");
  //   console.log(addtext.value);

  let savedNotes = localStorage.getItem("notes");
  let notesObj;
  if (savedNotes == null) {
    notesObj = [];
  } else {
    // console.log(typeof notesObj);
    notesObj = JSON.parse(savedNotes);
    // console.log(typeof notesObj);
  }

  let myObj = {
    Title: addTitle.value,
    Note: addtext.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});

//Function to show local storage
function showNotes() {
  let savedNotes = localStorage.getItem("notes");
  let notesObj;
  if (savedNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(savedNotes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${notesObj[index].Title}</h5>
                <p class="card-text">${notesObj[index].Note}</p>
                <button onclick = "deleteNote(${index})" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
  });
  let notesEle = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesEle.innerHTML = html;
  } else {
    notesEle.innerHTML = `<em>Nothing to show! Use "Add a Note" Section above to add notes</em>`;
  }
}

//Function to delete note
function deleteNote(index) {
  console.log("I am Deleting", index);
  let savedNotes = localStorage.getItem("notes");
  let notesObj;
  if (savedNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(savedNotes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// let search = document.getElementById("searchText");
// search.addEventListener("input", function () {
//   let inputVal = search.value;
//   console.log("Input Fired", inputVal);
// });
