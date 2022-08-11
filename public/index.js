const inputName = document.querySelector('#productName');
const inputPrice = document.querySelector('#productPrice');

const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    const productName = inputName.value
    const productPrice = inputPrice.value

    fetch('/products', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            productName, 
            productPrice            
        })
    });

});

