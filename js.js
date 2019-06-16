const goods = [
    {title: "shirt", price: 15},
    {title: "socks", price: 9},
    {title: "pants", price: 75},
    {title: "jacket", price: 120}
];

 const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
 };

 const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));

     document.querySelector('.goods-list').innerHTML = goodsList
 };

renderGoodsList(goods);