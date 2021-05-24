(function() {
    let {body} = document;
    let header = new Header({
        navigation: {
            links: [
                {url: "#", content: "Главная"},
                {url: "#basket", content: "Корзина"},
                {url: "#favorites", content: "Избранное"}
            ]
        }
    });
    let main = (() => {
        let {User, Order, Product, Products} = Main;
        let users = [
            new User({
                id: 0,
                name: "Артём",
                surname: "Потыкун",
                photoUrl: "./data/users/0/photo.jpg"
            }),
            new User({
                id: 1,
                name: "Карим",
                surname: "Волознев"
            }),
            new User({
                id: 2,
                name: "Роман",
                surname: "Толмачёв",
                photoUrl: "./data/users/2/photo.jpg"
            })
        ];
        let main = new Main({
            orders: [
                new Order({
                    id: 0,
                    customer: users[1],
                    dateCreated: new Date(1621513355792),
                    products: new Products(
                        new Product({
                            id: 1,
                            name: "Хлопковое худи VETEMENTS",
                            photoUrl: "./data/products/1/photo.jpg",
                            color: "#131315",
                            size: "XS",
                            price: 66_100,
                            count: 1
                        }),
                        new Product({
                            name: "Пуховая куртка VETEMENTS",
                            price: 181_500,
                            count: 2,
                            color: "#8B670A",
                            size: "XL",
                            photoUrl: "./data/products/0/photo.jpg"
                        })
                    )
                }),
                new Order({
                    id: 1,
                    customer: users[2],
                    dateCreated: new Date(1621514174655),
                    products: new Products(
                        new Product({
                            name: "Хлопковая футболка Loewe x Paula's Ibiza LOEWE",
                            price: 38_800,
                            count: 2,
                            color: "#e6d8c1",
                            size: "XXS",
                            photoUrl: "./data/products/7/photo.jpg"
                        }),
                        new Product({
                            name: "Солнцезащитные очки TOM FORD",
                            price: 32_250,
                            count: 1,
                            color: "#987b53",
                            size: "54",
                            photoUrl: "./data/products/8/photo.jpg"
                        }),
                        new Product({
                            name: "Кожаные кроссовки ALEXANDER MCQUEEN",
                            price: 42_700,
                            count: 2,
                            color: "white",
                            size: "39",
                            photoUrl: "./data/products/9/photo.jpg"
                        }),
                        new Product({
                            name: "Текстильный рюкзак Valentino Garavani",
                            price: 79_950,
                            count: 1,
                            color: "#2c663d",
                            photoUrl: "./data/products/10/photo.jpg"
                        })
                    ),
                    status: 3
                }),
                new Order({
                    id: 2,
                    customer: users[0],
                    dateCreated: new Date(1621514465440),
                    products: new Products(
                        new Product({
                            name: "Текстильный рюкзак PALM ANGELS",
                            price: 62_300,
                            count: 1,
                            color: "#54504d",
                            photoUrl: "./data/products/2/photo.jpg"
                        }),
                        new Product({
                            name: "Хлопковое худи VETEMENTS",
                            price: 72_600,
                            count: 1,
                            color: "#18181a",
                            size: "XS",
                            photoUrl: "./data/products/3/photo.jpg"
                        }),
                        new Product({
                            name: "Хлопковая футболка VETEMENTS",
                            price: 36_300,
                            count: 2,
                            color: "#131315",
                            size: "S",
                            photoUrl: "./data/products/4/photo.jpg"
                        }),
                        new Product({
                            name: "Рубашка VETEMENTS",
                            price: 129_500,
                            count: 2,
                            color: "#aa130e",
                            size: "S",
                            photoUrl: "./data/products/5/photo.jpg"
                        }),
                        new Product({
                            name: "Комбинированные кеды NS1 DOLCE & GABBANA",
                            price: 62_400,
                            count: 3,
                            color: "#694a31",
                            size: "43",
                            photoUrl: "./data/products/6/photo.jpg"
                        })
                    )
                })
            ]
        });
        return main;
    })();
    let footer = new Footer;
    body.appendChild(header.render());
    body.appendChild(main.render());
    body.appendChild(footer.render());
})();