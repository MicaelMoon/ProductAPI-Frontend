document.getElementById('fetchProductsBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const dataStr = JSON.stringify(data, null, 2);
        
        let productArray = JSON.parse(dataStr)
        
        document.getElementById('productData').textContent = dataStr;
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('productData').textContent = 'Failed to load products: ' + error.message;
    }
});

async function sendPostRequest(url, name, price) {
    try {
        const data = { name, price };

        let jsonData = JSON.stringify(data)
        console.log(jsonData)
        await fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: jsonData
        })
        .catch(console.log)


    } catch (error) {
        console.error( error);
        document.getElementById('productData').textContent = 'Failed to send POST request: ' + error.message;
    }
}


document.getElementById('sendPostBtn').addEventListener('click', async function() {
    const name = document.getElementById('nameInput').value
    const price = document.getElementById('priceInput').value
    const url = 'http://localhost:3000/product';
    await sendPostRequest(url, name, price);
});

