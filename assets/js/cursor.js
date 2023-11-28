/* <div class="cursor">
S
</div> */

// .cursor {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 20px;
//     height: 20px;
//     background-color: #000;
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//     transition: all 0.1s ease-in-out;
//     pointer-events: none;
//     z-index: 100;
// }

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.style.animation = "click 0.1s ease";
    setTimeout(() => {
        cursor.style.animation = "";
    }, 100)
})
