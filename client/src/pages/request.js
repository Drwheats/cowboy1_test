import { io } from 'socket.io-client'

// async function buttonClickedAsync2() {
//     const response = await getPage('http://127.0.0.1:5000/');
//     console.log(response);
// }
//
// async function getPage(url) {
//     const response1 = await fetch(url);
//     const response2 = await response1.text();
//     console.log('yeet')
//     return response2;
// }

function displayMessage(message){
    const div = document.createElement("div");
    console.log(message)
    div.textContent = message;
    div.className = "readout_list";
    div.createElement("div");
    div.classList.add('readout_list_title');
    div.classList.add('readout_list_posts_by_id')
    div.classList.add('readout_list_post_number')
    div.classList.add('readout_list_contents')

    if (message === 'error 1'){
        div.textContent = `THIS POST HAS BEEN DEEMED BAD AND HAS BEEN REMOVED. REMOVAL CODE: ERROR 1. PLEASE REFER TO THE BIBLI'OGRAPH TO REDEEM ERROR CODE.`;
    }
    else if (message === 'error 2'){
        div.textContent = `THIS POST HAS BEEN DEEMED BAD AND HAS BEEN REMOVED. REMOVAL CODE: ERROR NUMBER TWO. PLEASE REFER TO THE CODEX TO REDEEM YOU'RE ERROR CODE. BOTTOM TEXT.`;

    }


    document.getElementById("readout_list_holder").append(div)

}


function buttonClickedAsync()
{
    // let message = {a: 'a'}
    let message = document.getElementById('input_list').value
    message = String(message)

    const socket = io("http://127.0.0.1:5000/");
    socket.emit('send-message', message)
    socket.on('send-massage', args => {
        displayMessage(args)
        return null;
    })
}

export default buttonClickedAsync;
