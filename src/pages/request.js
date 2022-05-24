import { io } from 'socket.io-client'
import Social from "./Social";
import {socialsHolder} from "../data";
import list from "./list";
import social from "./Social";
import home from "./Home";
import Card from "../components/Card";
import List from "./list";


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

function buttonClickedAsync(list)
{

    // let message = {a: 'a'}
    let message = document.getElementById('input_list').value
    message = String(message)

    const socket = io("http://127.0.0.1:5000/");
    socket.emit('send-message', message)
    socket.on('send-massage', args => {
        socialsHolder.push(args)
        console.log(socialsHolder)
        home.reload();
        social.reload();
    })
}

export default buttonClickedAsync;
