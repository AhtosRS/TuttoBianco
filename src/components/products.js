export const products = [
    {
        id: 1,
        title: 'Termo',
        price: '5000',
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/062/836/products/0191-37b33d9c196697bc5e15968172259338-1024-1024.jpg'
    },
    {
        id: 2,
        title: 'Cuchilla',
        price: '2000',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_659557-MLA45403935913_032021-W.jpg'
    },
    {
        id: 3,
        title: 'Lampara',
        price: '4400',
        pictureUrl: 'https://www.bazardeluces.com.ar/wp-content/uploads/2020/04/tri.jpeg'
    },
    {
        id: 4,
        title: 'Taza',
        price: '1500',
        pictureUrl: 'https://casmerdesign.com/wp-content/uploads/2020/05/00009-taza-600x554.png'
    },
]

export const giveProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});