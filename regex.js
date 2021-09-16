const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const message = (text, displaySystem, className) => {
    const msgContainer = document.getElementById('message-container');
    const msg = document.createElement('div');
    msgContainer.classList.add('message');
    msgContainer.textContent = '';

    msg.innerText = text;
    msg.style.display = displaySystem;
    msg.classList.add(className);
    msgContainer.appendChild(msg);
}

const useRegex = () => {
    const inputRegex = document.querySelector('#input-regex').value;
    console.log(inputRegex);
    if (!inputRegex) {
        message('Empty!', 'block', 'emptyId');
        setTimeout(() => { message('', 'none', '#'); }, 1000);
    }
    else if (regex.test(inputRegex) == true) {
        message('Success!', 'block', 'successId');
        setTimeout(() => { message('', 'none', '#'); }, 1000);
    }
    else if (regex.test(inputRegex) == false) {
        message('Failed!', 'block', 'failedId');
        setTimeout(() => { message('', 'none', '#'); }, 1000);
    }
    else {
        message('Something went wrong! Please try again later', 'block', 'failedId');
        setTimeout(() => { message('', 'none', '#'); }, 1000);
    }
}
message('', 'none', '#');