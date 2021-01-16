const { body } = document;

function changeBackground(number) {
    //Check if background is already set
    let prevBackground;
    if (body.className) {
        prev = body.className;
    }
    body.className = ''; //Reset CSS class for body
    switch (number) {
        case '1':
            return(prevBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return(prevBackground === 'background-2' ? false : body.classList.add('background-2'));            
        case '3':
            return(prevBackground === 'background-3' ? false : body.classList.add('background-3'));           
        default:
            break;
    }
}