const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Tablet", price: 450, category: "tablets", stock: 8 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
    { id: 6, title: "Keyboard", price: 75, category: "accessories", stock: 20 },
    { id: 7, title: "Mouse", price: 40, category: "accessories", stock: 25 },
    { id: 8, title: "Monitor", price: 300, category: "monitors", stock: 7 },
    { id: 9, title: "Gaming PC", price: 1500, category: "computers", stock: 4 },
    { id: 10, title: "Gaming Chair", price: 350, category: "furniture", stock: 6 },
    { id: 11, title: "Webcam", price: 90, category: "accessories", stock: 14 },
    { id: 12, title: "Microphone", price: 130, category: "audio", stock: 9 },
    { id: 13, title: "Speaker", price: 110, category: "audio", stock: 11 },
    { id: 14, title: "Printer", price: 200, category: "printers", stock: 5 },
    { id: 15, title: "Router", price: 85, category: "networking", stock: 18 },
    { id: 16, title: "Power Bank", price: 60, category: "accessories", stock: 30 },
    { id: 17, title: "External SSD", price: 180, category: "storage", stock: 10 },
    { id: 18, title: "USB Flash Drive", price: 25, category: "storage", stock: 40 },
    { id: 19, title: "Hard Drive", price: 100, category: "storage", stock: 13 },
    { id: 20, title: "Graphics Card", price: 700, category: "components", stock: 3 },
    { id: 21, title: "CPU", price: 400, category: "components", stock: 6 },
    { id: 22, title: "RAM 16GB", price: 80, category: "components", stock: 22 },
    { id: 23, title: "Motherboard", price: 220, category: "components", stock: 8 },
    { id: 24, title: "Laptop Stand", price: 45, category: "accessories", stock: 17 },
    { id: 25, title: "Mechanical Keyboard", price: 120, category: "accessories", stock: 15 },
    { id: 26, title: "Wireless Mouse", price: 55, category: "accessories", stock: 28 },
    { id: 27, title: "Bluetooth Earbuds", price: 95, category: "audio", stock: 19 },
    { id: 28, title: "Smart TV", price: 900, category: "televisions", stock: 4 },
    { id: 29, title: "Projector", price: 500, category: "projectors", stock: 5 },
    { id: 30, title: "Game Console", price: 600, category: "gaming", stock: 7 }
];

function findProductById(Products, id){
    return products.find (p => p.id === id)
};

const lowStockProducts = products.filter(p => p.stock <= 10);

function updateStock(products, id, newStock) {
    return products.map(p => p.id === id ? {...p, stock: newStock} : p)
}
console.log(findProductById);
console.log(lowStockProducts);
console.log(updateStock);