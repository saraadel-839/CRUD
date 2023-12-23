

var SiteNameInput=document.getElementById('SiteNameInput');
var SiteURLInput=document.getElementById('SiteURLInput');


var Sitelist=[];

if(localStorage.getItem("bookmarks") != null){
    Sitelist=JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark();
}


function addBookmark(){
    var bookmarks={
        name : SiteNameInput.value,
        url : SiteURLInput.value,
    }

    Sitelist.push(bookmarks);
    localStorage.setItem("bookmarks",JSON.stringify(Sitelist));
    
    clearbookmarks();
    displayBookmark();
    visitBookmark();
}



function clearbookmarks(){
    SiteNameInput.value="";
    SiteURLInput.value="";
}



function displayBookmark(){
    var cartona="";
    for(var i=0; i<Sitelist.length; i++){
        cartona +=`
        <tr>
            <td>${i + 1}</td>
            <td>${Sitelist[i].name}</td>
            <td><button class="btn btn-success" onclick=" visitBookmark(); "><i class="fa-solid fa-eye text-light"></i><a href="${Sitelist[i].url}"> Visit</a></button></td>
            <td><button class="btn btn-danger" onclick="deleteBookmark(${i});"><i class="fa-solid fa-trash text-light"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartona;
}



function deleteBookmark(elementnumber){
    Sitelist.splice(elementnumber,1);
    localStorage.setItem("bookmarks",JSON.stringify(Sitelist));
    displayBookmark();
}



function visitBookmark(){
    window.open(url, '_blank');
}