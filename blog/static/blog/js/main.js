const search = document.getElementById('search-icon')
const searchBar = document.querySelector('.search-bar')
const comment = document.getElementById('comment-icon')
const commentBar = document.querySelector('.comment-bar')

search.addEventListener('click', () =>{
    searchBar.style.display = "inline";
    search.style.display = "none";
});

comment.addEventListener('click', () => {
    commentBar.style.display = "inline";
    comment.style.display = "none";
});
