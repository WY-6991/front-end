const UP = 'KeyW'||'ArrowUp';
const DOWN = 'KeyS'||'ArrowDown';
const LEFT = 'KeyA'||'ArrowLeft';
const RIGHT = 'KeyD'||'ArrowRight';

window.onload = ()=>
{

    window.addEventListener('keyup',(e)=>{
       const code = e.code;
       console.log(code)
       switch(code)
       {
        case UP:
            console.log('上')
            break;
        case DOWN:
            console.log('下')
            break;
        case LEFT:
            console.log('左')
            break;
        case RIGHT:
            console.log('右')
            break;
        default:
            break;
       }
       
    })

}

let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let end = document.querySelector('.end')


start.addEventListener('click',()=>{
    alert('game start');
})

pause.addEventListener('click',()=>{
    alert('game pause');
})

end.addEventListener('click',()=>{
    alert('game end');
})



const operators = document.querySelectorAll('.operator-btn')

addClass(operators,'operator-btn')

// 添加样式
function addClass(elements,className){
    for( let i of elements){
        i.className = className
    }
    console.log(elements)
}

const container = document.querySelector('.container')

for(let i = 0;i<1000;i++){
    const span = document.createElement('span')
    container.appendChild(span)
}

