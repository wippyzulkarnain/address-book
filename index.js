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

function search(keyword) {
  for (i = 0; i < book.length; i++) {
    if (keyword.toLowerCase() === book[i].fname.toLowerCase()) {
      console.log(book[i]);
    } else if (keyword.toLowerCase() === book[i].lname.toLowerCase()) {
      console.log(book[i]);
    } else if (keyword.toLowerCase() === book[i].email.toLowerCase()) {
      console.log(book[i]);
    } else if (keyword.toLowerCase() === book[i].address.toLowerCase()) {
      console.log(book[i]);
    }
  }
}

function remove(keyword){
    for (i = 0; i < book.length; i++) {
        if (keyword === book[i].fname) {
            book.splice(i,1)
            console.log("success !")    
}
    }
}

function modify(index,key,keyword){
    book[index][key]=keyword;
}

function search2(key, value){
  let result = book.filter(
    function (entry){
      return entry[key] === value
    }
  )
  console.log(result)
}

function search3(key, value){
  let result = book.filter(
    function (entry){
      if (typeof entry[key] === "string"){
        return entry[key].toLowerCase().includes(value.toLowerCase())
      }
      else {
      return entry[key] === value
    }}
  )
  console.log(result)
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