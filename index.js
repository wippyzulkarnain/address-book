let book = [
  {
    fname: "Jack",
    lname: "Bauer",
    email: "Jack@gmail.com",
    address: "CTU"
  },
  {
    fname: "John",
    lname: "Mcclane",
    email: "John@gmail.com",
    address: "New York"
  },
  {
    fname: "Tom",
    lname: "Clancy",
    email: "Tom@gmail.com",
    address: "Washington"
  }
];

function add(fname, lname, email, address) {
  book.push({
    fname: fname,
    lname: lname,
    email: email,
    address: address
  });
}
function display() {
  book.forEach(function(entry) {
    document.write(
      `First name : ${entry.fname} </br> Last name : ${
        entry.lname
      } </br> Email : ${entry.email} </br> Address : ${
        entry.address
      } </br></br>`
    );
  });
}

function remove(keyword) {
  for (i = 0; i < book.length; i++) {
    if (keyword === book[i].fname) {
      book.splice(i, 1);
      console.log("success !");
    }
  }
}

function modify(index, key, keyword) {
  book[index][key] = keyword;
}

function search2(key, value) {
  let result = book.filter(function(entry) {
    return entry[key] === value;
  });
  console.log(result);
}

function search3(key, value) {
  let result = book.filter(function(entry) {
    if (typeof entry[key] === "string") {
      return entry[key].toLowerCase().includes(value.toLowerCase());
    } else {
      return entry[key] === value;
    }
  });
  console.log(result);
}
var result = document.getElementById("result");
var ul = document.createElement("ul");

const displaybutton = document.getElementById("displaybutton");

displaybutton.addEventListener("click", display);
function display() {
  ul.innerHTML = "";
  for (i = 0; i < book.length; i++) {
    console.log(book[i].fname);

    var li = document.createElement("li");
    li.textContent = `Index : ${i} | First Name : ${book[i].fname} | Last Name : ${book[i].lname} | Address:${
      book[i].address
    } | Email:${book[i].email} `;
    ul.appendChild(li);
  }
  result.appendChild(ul);
}
// if (b === "fname") {
//   book[a].fname = keyword
//   console.log("success !")
//   }
//   else if (b === "lname") {
//       book[a].lname = keyword
//       console.log("success !")
//       }
//       else if (b === "address") {
//           book[a].address = keyword
//           console.log("success !")
//           }
//           else if (b === "email") {
//               book[a].email = keyword
//               console.log("success !")
//               }
//               else{
//                   console.log("fail")
//               }

//

const submitbutton = document.getElementById("submitbutton");
// const fname = document.getElementById('fname')
submitbutton.addEventListener("click", submit);

function submit() {
  var temp = {};
  temp["fname"] = document.getElementById("fname").value;
  temp["lname"] = document.getElementById("lname").value;
  temp["email"] = document.getElementById("email").value;
  temp["address"] = document.getElementById("address").value;
  book.push(temp);
}

const searchbutton = document.getElementById("searchbutton");
searchbutton.addEventListener("click", search);

function search() {
  ul.innerHTML = "";

  for (i = 0; i < book.length; i++) {
    var li = document.createElement("li");
    if (
      document.getElementById("search").value.toLowerCase() ===
      book[i].fname.toLowerCase()
    ) {
      li.textContent = `Name : ${book[i].fname} ${book[i].lname} Address:${
        book[i].address
      } Email:${book[i].email} `;
      ul.appendChild(li);
    } else if (
      document.getElementById("search").value.toLowerCase() ===
      book[i].lname.toLowerCase()
    ) {
      li.textContent = `Name : ${book[i].fname} ${book[i].lname} Address:${
        book[i].address
      } Email:${book[i].email} `;
      ul.appendChild(li);
    } else if (
      document.getElementById("search").value.toLowerCase() ===
      book[i].email.toLowerCase()
    ) {
      li.textContent = `Name : ${book[i].fname} ${book[i].lname} Address:${
        book[i].address
      } Email:${book[i].email} `;
      ul.appendChild(li);
    } else if (
      document.getElementById("search").value.toLowerCase() ===
      book[i].address.toLowerCase()
    ) {
      li.textContent = `Name : ${book[i].fname} ${book[i].lname} Address:${
        book[i].address
      } Email:${book[i].email} `;
      ul.appendChild(li);
    }
  }
  result.appendChild(ul);
}
