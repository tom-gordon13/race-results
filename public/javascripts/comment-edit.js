

// const submitBtn = document.getElementsByClassName('edit-submit');
const commentSectionCollection = document.getElementsByClassName('show-exComments')
commentSection = commentSectionCollection.item(0)
commentSection.addEventListener('click', toggleEdit);

let editing = false;
function toggleEdit(evt) {
    if (evt.target.className !== 'edit-cmt-btn') return;

    editing = !editing;

    let inputBox = evt.target.parentElement.firstElementChild.children[1]
    let submitButton = evt.target.parentElement.firstElementChild.children[2]

    
    inputBox.readOnly = !editing;
    inputBox.style.color = editing ? 'gray' : 'black';
    inputBox.style.border = editing ? '1px solid gray' : 'none';
    
    submitButton.style.visibility = editing ? 'visible' : 'hidden';
}



