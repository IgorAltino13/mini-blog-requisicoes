
//Escreva um codigo JS que obtem os posts de um blog em um servidor por meio de uma requisição e exiba os 
//posts na tela. Além disso, voce deve ser capaz de criar um novo post no blog tambem por meio de um envio
//de uma requisição.




async function readPost(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    let post = document.querySelector('.posts')
    if(data.length > 0){
        for(let i in data){
            let title = document.createElement('h1');
            let body = document.createElement('div');
            
            let linha = document.createElement('hr');

            title.innerText = data[i].title;
            body.innerText = data[i].body;

        

            post.append(title);
            post.append(body);
            post.append(linha);
        
        }
    }
    else{
        alert('Nenhum post para exibir')
    }
}

readPost();

let button = document.querySelector('#insertButton');

async function addPost(title,body){
    let response = fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Contenty-Type' : 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId : 2
        })
    });
    document.querySelector('#title').value = '';
    body = document.querySelector('#body').value = '';
    readPost();
}

button.addEventListener('click',() => {
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    if(title && body){
        addPost(title,body);
    }
    else{
        alert('Escreva alguma coisa');
    }
})

