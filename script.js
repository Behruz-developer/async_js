const box = document.querySelector('.box')

async function getProduct() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json(); 
        console.log(data); 
        data.products.forEach(element => {
            console.log(element);
            const card = document.createElement('div')
            card.classList.add('card')
            let img = document.createElement('img')
            let h2 = document.createElement('h2')
            let h4 = document.createElement('h3')
            let p = document.createElement('p')
            h2.innerHTML = element.title
            h4.innerHTML = `price: ${element.price}$`
            p.innerHTML = element.description
            img.setAttribute('src', `${element.thumbnail}`)
            card.appendChild(img)
            card.appendChild(h2)
            card.appendChild(h4)
            card.appendChild(p)
            box.appendChild(card)
        });
    } catch (error) {}
}
getProduct();
