let employees=[{"eid":1,"ename":"Shina","email":"shardern0@auda.org.au","gender":"Female"},
    {"eid":2,"ename":"Eleonora","email":"edomenichelli1@cafepress.com","gender":"Female"},
    {"eid":3,"ename":"Luis","email":"lgillio2@pinterest.com","gender":"Male"},
    {"eid":4,"ename":"Karlotte","email":"kbreeze3@telegraph.co.uk","gender":"Female"},
    {"eid":5,"ename":"Morgan","email":"mmasters4@hp.com","gender":"Female"},
    {"eid":6,"ename":"Laryssa","email":"lcraik5@mapy.cz","gender":"Female"},
    {"eid":7,"ename":"Deidre","email":"dgawn6@netlog.com","gender":"Female"},
    {"eid":8,"ename":"Sonny","email":"sphizackarley7@ucoz.com","gender":"Female"},
    {"eid":9,"ename":"Goddard","email":"gkenner8@blinklist.com","gender":"Male"},
    {"eid":10,"ename":"Jean","email":"jdendle9@paypal.com","gender":"Male"},
    {"eid":11,"ename":"Carlin","email":"cpirota@php.net","gender":"Male"},
    {"eid":12,"ename":"Wallie","email":"wwigfieldb@vistaprint.com","gender":"Female"},
    {"eid":13,"ename":"Marne","email":"mgodridgec@admin.ch","gender":"Female"},
    {"eid":14,"ename":"Willie","email":"wthiesd@wsj.com","gender":"Male"},
    {"eid":15,"ename":"Aharon","email":"ablaneye@mozilla.org","gender":"Male"},
    {"eid":16,"ename":"Marquita","email":"mbrooksbyf@i2i.jp","gender":"Female"},
    {"eid":17,"ename":"Everard","email":"epresnailg@earthlink.net","gender":"Male"},
    {"eid":18,"ename":"Flory","email":"fnaperh@feedburner.com","gender":"Female"},
    {"eid":19,"ename":"Fancy","email":"freahi@blinklist.com","gender":"Female"},
    {"eid":20,"ename":"Veda","email":"vlowensohnj@ebay.co.uk","gender":"Female"},
]
function display_Data(){
    /* console.log("inside function"); */
    let rows='';
    for(let emp of employees){
        rows=rows+`<tr>
                       <td>${emp.eid}</td>
                       <td>${emp.ename}</td>
                       <td>${emp.email}</td>
                       <td>${emp.gender}</td>
                    </tr>`
    } 
    document.getElementById("tbody_data").innerHTML=rows
}