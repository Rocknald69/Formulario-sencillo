const inputs = document.querySelectorAll('.input')
function focusFunc(){
    let parents = this.parentNode.parentNode;
    parent.classList.add('focus')
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
})