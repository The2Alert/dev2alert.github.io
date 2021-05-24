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
            })
        ];
        let products = new Products(
            new Product({price: 120050}),
            new Product({
                name: "Пуховая куртка VETEMENTS",
                price: 1250,
                count: 3
            }),
            new Product({
                name: "Пуховая куртка VETEMENTS",
                price: 181500,
                count: 2,
                color: "#8B670A",
                size: "XL",
                photoUrl: "./data/products/0/photo.jpg"
            })
        );
        let main = new Main({
            orders: [
                new Order({
                    id: 0,
                    customer: users[0],
                    dateCreated: new Date(1621438978690),
                    products
                }),
                new Order({
                    id: 1,
                    customer: users[1],
                    dateCreated: new Date(1621502854483),
                    products,
                    status: 2
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