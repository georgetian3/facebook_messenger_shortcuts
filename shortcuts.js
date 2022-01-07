document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey) {
        switch (event.key) {
            case 'c': focusCompose(); break;
            case 's': focusSearch() ; break;
            case 'l': sendLike()    ; break;
            case 'g': chooseGif()   ; break;
        }
    }
});

function focusSearch()  {document.querySelector('[aria-label="Search Messenger"]').focus();}
function focusCompose() {document.querySelector('[aria-label="Message"]').focus();}
function sendLike() {
    // cannot search for the div based on the whole string 'Send a like', as 'like' is replaced by the emoji the user chooses
    var divs = document.querySelectorAll("div[aria-label^='Send a ']");
    // There also is a 'Send a voice clip', so need to select the last div in divs
    var likeButton = divs[divs.length - 1].getElementsByClassName('i09qtzwb')[0];
    likeButton.click();
}
function chooseGif() {
    var divs = document.querySelectorAll('[aria-label="Choose a gif"]');
    var gif = divs[divs.length - 1].getElementsByClassName('i09qtzwb')[0];
    gif.click();
}