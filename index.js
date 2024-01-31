document.getElementById('apiGetBtn').addEventListener('click', async function(){
    try{
        let response = await fetch("http://localhost:3000/products")
        let data = await response.json()
        console.log(data)
    }catch (error){
        console.log('Error:', error)
    }

    document.getElementById('test').textContent = respons.Name
})

ducument.getElementById('apiPostBtn').addEventListener('click', async function(){
    //Text element = name
    //Text element = Price

    createProduct()
})

async function createProduct(name, price){
    try{
        let response = await fetch("http://localhost:3000/products", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name:name,
                Price:price
            })
        })
        let data = await response.json();
        console.log(data)
    }catch(error){
        console.log('Error:', error)
    }
}





app.listen(PORT, ()=>{
    console.log("Listening to port" + PORT)
})