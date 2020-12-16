const body = document.querySelector('body');
const main = document.createElement('main');
main.className ='mainContainer';
document.body.appendChild(main);

const bar = document.createElement('div');
bar.className = 'tools';
main.appendChild(bar);

const refreshButton = document.createElement('button');
refreshButton.className = 'button'
bar.appendChild(refreshButton);
refreshButton.innerText = 'Refresh'

const Undo = document.createElement('button');
Undo.className = 'undo'
bar.appendChild(Undo);
Undo.innerText = 'Undo'

const Redo = document.createElement('button');
Redo.className = 'redo'
bar.appendChild(Redo);
Redo.innerText = 'Redo'


const content = document.createElement('div');
content.className = 'content'
main.appendChild(content);

const textAreadiv = document.createElement('div');
textAreadiv.className = 'textAreadiv';
content.appendChild(textAreadiv);

const resultdiv = document.createElement('div');
resultdiv.className = 'result';
resultdiv.innerText = 'Result →';
content.appendChild(resultdiv);

const textArea = document.createElement('textarea');
textArea.className = 'textArea';
textAreadiv.appendChild(textArea);


const previewdiv = document.createElement('div');
previewdiv.className = 'previewdiv';
content.appendChild(previewdiv);

const preview = document.createElement('section');
preview.className = 'preview';
previewdiv.appendChild(preview);

let pattern = [
    {
        regex: /^# (.*$)/gim,
        replace: '<h1>$1</h1>'
    },
    {
        regex: /^## (.*$)/gim,
        replace: '<h2>$1</h2>'
    },
    {
        regex: /^### (.*$)/gim,
        replace: '<h3>$1</h3>'
    },
    {
        regex: /^\> (.*$)/gim,
        replace: '<blockquote>$1</blockquote>'
    },
    {
        regex: /\*\*(.*)\*\*/gim,
        replace: '<b>$1</b>'
    },
    {
        regex: /\*(.*)\*/gim,
        replace: '<i>$1</i>'
    },
    {
        regex: /!\[(.*?)\]\((.*?)\)/gim,
        replace: "<img alt='$1' src='$2' />"
    },
    {
        regex: /\[(.*?)\]\((.*?)\)/gim,
        replace: "<a href='$2'>$1</a>"
    },
    {
        regex: /\n$/gim,
        replace: '<br />'
    },
   
]


textArea.addEventListener('keyup', (e) =>{

    let {value} = e.target
    for(let element of pattern) {
        value = value.replace(element.regex, element.replace)
    }
    preview.innerHTML = value
}) 


        
refreshButton.onclick = () => {
    textAreadiv.innerText = '';
    preview.innerHTML = '';
    
}