let book=[{
    fname : "Jack" , 
    lname : "Bauer",
    email : "Jack@gmail.com",
    address : "CTU"}]

    function add(fname,lname,email,address){ 
    book.push(
    {fname : fname , 
    lname : lname,
    email : email,
    address : address})
}
function display(){
book.forEach(function (entry){
    document.write(`First name : ${entry.fname} </br> Last name : ${entry.lname} </br> Email : ${entry.email} </br> Address : ${entry.address} </br></br>`)
})}

function search(keyword){
   for (i=0 ; i < book.length ; i++){
       if (keyword === book[i].fname)
       {
           console.log(book[i])
       }
       else if (keyword === book[i].lname)
       {
           console.log(book[i])
       }
       else if (keyword === book[i].email)
       {
           console.log(book[i])
       }
       else if (keyword === book[i].address)
       {
           console.log(book[i])
       }
       else{
           console.log("No Result")
       }
   }
    
}

