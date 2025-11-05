let users = [{ "uid": 1, "uname": "Celie", "gender": "Female" },
{ "uid": 2, "uname": "Whitby", "gender": "Male" },
{ "uid": 3, "uname": "Josepha", "gender": "Genderqueer" },
{ "uid": 4, "uname": "Avram", "gender": "Male" },
{ "uid": 5, "uname": "Stacee", "gender": "Male" },
{ "uid": 6, "uname": "Winfred", "gender": "Male" },
{ "uid": 7, "uname": "Fawnia", "gender": "Female" },
{ "uid": 8, "uname": "Brnaba", "gender": "Male" },
{ "uid": 9, "uname": "Tristam", "gender": "Male" },
{ "uid": 10, "uname": "Raquel", "gender": "Female" },
{ "uid": 11, "uname": "Bar", "gender": "Male" },
{ "uid": 12, "uname": "Taffy", "gender": "Female" },
{ "uid": 13, "uname": "Normand", "gender": "Male" },
{ "uid": 14, "uname": "Arthur", "gender": "Polygender" },
{ "uid": 15, "uname": "Janos", "gender": "Genderqueer" },
{ "uid": 16, "uname": "Amaleta", "gender": "Female" },
{ "uid": 17, "uname": "Everard", "gender": "Male" },
{ "uid": 18, "uname": "Karel", "gender": "Female" },
{ "uid": 19, "uname": "Brandi", "gender": "Female" },
{ "uid": 20, "uname": "Jerrie", "gender": "Genderfluid" },
{ "uid": 21, "uname": "Britte", "gender": "Female" },
{ "uid": 22, "uname": "Aldridge", "gender": "Genderfluid" },
{ "uid": 23, "uname": "Corey", "gender": "Male" },
{ "uid": 24, "uname": "Maje", "gender": "Male" },
{ "uid": 25, "uname": "Kiley", "gender": "Female" },
{ "uid": 26, "uname": "Leta", "gender": "Female" },
{ "uid": 27, "uname": "Hendrick", "gender": "Male" },
{ "uid": 28, "uname": "Thain", "gender": "Male" },
{ "uid": 29, "uname": "Selig", "gender": "Male" },
{ "uid": 30, "uname": "Seymour", "gender": "Male" }]

function userData() {
    let rows = '';
    let MaleRows = '';
    let FemaleRows = '';

    for (let user of users) {
        if (user.gender === "Male") {
            MaleRows += `<tr>
                               <td>${user.uid}</td>
                               <td>${user.uname}</td>
                               <td>${user.gender}</td>
                             </tr>`;
        } else if (user.gender === "Female") {
            FemaleRows += `<tr>
                                 <td>${user.uid}</td>
                                 <td>${user.uname}</td>
                                 <td>${user.gender}</td>
                               </tr>`;
        } else {
            rows += `<tr>
                            <td>${user.uid}</td>
                            <td>${user.uname}</td>
                            <td>${user.gender}</td>
                         </tr>`;
        }
    }

    document.getElementById("user").innerHTML = rows;
    document.getElementById("user1").innerHTML = MaleRows;
    document.getElementById("user2").innerHTML = FemaleRows
}


/* function data(){
    let rows='';
    for (let user of users){
        if(user.gender ==="Male"){
        rows=rows+`<tr>
                       <td>${user.uid}</td>
                       <td>${user.uname}</td>
                       <td>${user.gender}</td>
                    </tr>` 
        }  
    } 
    document.getElementById("user").innerHTML=rows
}

function data2(){
    let rows='';
    for (let user of users){
        if(user.gender ==="Female"){
        rows=rows+`<tr>
                       <td>${user.uid}</td>
                       <td>${user.uname}</td>
                       <td>${user.gender}</td>
                    </tr>` 
        }  
    } 
    document.getElementById("data1").innerHTML=rows
}
     */