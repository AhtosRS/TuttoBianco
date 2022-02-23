export const products = [
    {
        id: 1,
        title: 'Termo',
        price: '5000',
        imgURL: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/062/836/products/0191-37b33d9c196697bc5e15968172259338-1024-1024.jpg',
        description: 'Termo de muy buena calidad color blanco, resistente a golpes'
    },
    {
        id: 2,
        title: 'Cuchilla',
        price: '2000',
        imgURL: 'https://http2.mlstatic.com/D_NQ_NP_659557-MLA45403935913_032021-W.jpg',
        description: 'Cuchilla de cocina altamente afilada de acero de damasco'
    },
    {
        id: 3,
        title: 'Lampara',
        price: '4400',
        imgURL: 'https://www.bazardeluces.com.ar/wp-content/uploads/2020/04/tri.jpeg',
        description: 'Lampara moderna de alta capacidad lumivolumetrica'
    },
    {
        id: 4,
        title: 'Taza',
        price: '1500',
        imgURL: 'https://casmerdesign.com/wp-content/uploads/2020/05/00009-taza-600x554.png',
        description: 'Taza termica, conserva la temperatura adecuada del cafe'
    },
]

export const giveProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});