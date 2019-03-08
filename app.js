var btns = document.querySelectorAll('#movie-list .delete');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li)
  });
});
function myFunction_hide() {
  var x = document.getElementById("movie-list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var list = document.querySelector('#movie-list ul');

const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var value = addForm.querySelector('input[type="text"]').value;

  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');

  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.textContent = 'delete';
  movieName.textContent = value;

  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
});
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("movie-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var findform = document.forms['search-movies'];
findform.addEventListener('keyup',function(e){
  e.preventDefault();

  var find_movie = document.querySelector("input[type='text']").value.toUpperCase();
  var movie_list = document.querySelectorAll('li .name');
  var lists=document.querySelectorAll('li');
  for(var i=0;i<movie_list.length;i++){
    if(movie_list[i].textContent.toUpperCase().indexOf(find_movie)>-1)  lists[i].style.display='';
    else lists[i].style.display='none';
  }
});