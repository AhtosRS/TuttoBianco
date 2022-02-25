export const products = [
    {
        id: 1,
        title: 'Remera Rock',
        price: '2000',
        imgURL: 'https://http2.mlstatic.com/D_640445-MLA31078692996_062019-O.jpg',
        description: 'Remera de alghodon 90%, con estampado de mano rock',
        category: 'remeras'
    },
    {
        id: 2,
        title: 'Remera Live',
        price: '2100',
        imgURL: 'https://http2.mlstatic.com/D_NQ_NP_802696-MLA45233960007_032021-W.jpg',
        description: 'Remera de alghodon 90%, con estampado de Live Free',
        category: 'remeras'
    },
    {
        id: 3,
        title: 'Remera Maravilla',
        price: '2300',
        imgURL: 'https://i.pinimg.com/originals/e7/79/35/e77935f43237908b775ff81d1745e49e.jpg',
        description: 'Remera de mujer 90% alghodon con estampado de mujer maravilla',
        category: 'remeras'
    },
    {
        id: 4,
        title: 'Pantalon Skinny',
        price: '2700',
        imgURL: 'https://images.squarespace-cdn.com/content/v1/579202971b631b5dbc741986/1545071985656-W5H25TXKMCABLH95LJ8Y/67e6cd3a92b57615db9d9cfcc9fb667f.jpg',
        description: 'Pantalon ajustado mujer',
        category: 'pantalones'
    },
    {
        id: 5,
        title: 'Pantalon Man',
        price: '2500',
        imgURL: 'https://m.media-amazon.com/images/I/715PSQZCgEL._AC_UL320_.jpg',
        description: 'Pantalon normal fit hombre',
        category: 'pantalones'
    },
    {
        id: 6,
        title: 'Short',
        price: '1500',
        imgURL: 'https://www.dhresource.com/0x0/f2/albu/g8/M01/18/77/rBVaV15YubuAesqYAADA0WPZsQI865.jpg/fashion-ripped-hole-denim-shorts-men-black.jpg',
        description: 'Short hombre rajado',
        category: 'pantalones'
    },
    {
        id: 7,
        title: 'Zapatilla Converse',
        price: '7500',
        imgURL: 'https://smoda.elpais.com/wp-content/uploads/2016/07/Converse-Chuck-Taylor-All-Star.jpg',
        description: 'Zapatilla Converse tipo botita',
        category: 'zapatillas'
    },
    {
        id: 8,
        title: 'Taco alto',
        price: '8500',
        imgURL: 'https://s3-us-west-2.amazonaws.com/lolys/20180909173245/S2043500070008_02.jpg',
        description: 'Taco alto slim ecocuero',
        category: 'zapatillas'
    },
    {
        id: 9,
        title: 'Zapatilla deportiva',
        price: '9500',
        imgURL: 'https://http2.mlstatic.com/D_NQ_NP_849343-MLA48067072569_102021-W.jpg',
        description: 'Zapatilla simil nike deporte',
        category: 'zapatillas'
    },
    {
        id: 10,
        title: 'Cinturon Blanco',
        price: '1500',
        imgURL: 'https://previews.123rf.com/images/vitalytyagunov/vitalytyagunov1511/vitalytyagunov151103389/47957236-cintura-bianca-isolato-su-bianco.jpg',
        description: 'Cinturon blanco de 1 metro cuero vacuno',
        category: 'accesorios'
    },
    {
        id: 11,
        title: 'Piluso ATR',
        price: '1300',
        imgURL: 'https://images.ssstatic.com/gorro-blanco-1-algodon-27901282z0-16123567.jpg',
        description: 'Piluso unisex full white',
        category: 'accesorios'
    },
    {
        id: 12,
        title: 'Lentes Willy',
        price: '2500',
        imgURL: 'https://http2.mlstatic.com/D_NQ_NP_783143-MLA31063168323_062019-O.jpg',
        description: 'Lentes Willy Wonka sin aumento',
        category: 'accesorios'
    },
]

export const giveProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});