function calculateDP( price, discountPercent){
    return price - (price * discountPercent) /100 ;
}

const cart = [ 
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5},
    { title: "Keyboard", price: 50, discountPercent: 0}
];

function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const discountPrice = calculateDP(
            item.price,
            item.discountPercent
        );
        result.push({
            title: item.title,
            title: item.price,
            discountPercent: item.discountPercent,
            finalPrice: discountPrice
        });
    }
    return result;
}
console.log(applyDiscounts(cart));