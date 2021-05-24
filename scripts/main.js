const Main = (function() {
    class Main {
        constructor({orders, orderStatuses} = {}) {
            this.orders = orders ?? [];
            this.orderStatuses = orderStatuses ?? ["Новый", "Отменён", "Отклонён", "В пути", "Завершён"];
        }

        render() {
            let main = document.createElement("main");
            main.appendChild((() => {
                let h1 = document.createElement("h1");
                h1.className = "title";
                h1.appendChild(document.createTextNode("Управление заказами "));
                h1.appendChild((() => {
                    let span = document.createElement("span");
                    span.className = "count";
                    span.innerText = `(${this.orders.length})`;
                    return span;
                })());
                return h1;
            })());
            main.appendChild((() => {
                let div = document.createElement("div");
                let {orders} = this;
                div.className = "orders";
                for(let order of orders) {
                    let {id, customer, dateCreated, products, status: statusIndex} = order;
                    div.appendChild((() => {
                        let div = document.createElement("div");
                        let priceFormatter = new Intl.NumberFormat("ru");
                        div.className = "order";
                        div.id = id;
                        div.appendChild((() => {
                            let span = document.createElement("span");
                            span.className = "title";
                            span.innerText = `Заказ №${id + 1}`;
                            return span;
                        })());
                        div.appendChild((() => {
                            let div = document.createElement("div");
                            div.className = "content";
                            div.appendChild((() => {
                                let div = document.createElement("div");
                                div.className = "param";
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    span.className = "name title";
                                    span.innerText = "Заказчик:";
                                    return span;
                                })());
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    let {photoUrl, name, surname} = customer;
                                    span.className = "value user";
                                    span.appendChild((() => {
                                        let img = new Image;
                                        img.className = "photo";
                                        img.src = photoUrl;
                                        return img;
                                    })());
                                    span.appendChild((() => {
                                        let span = document.createElement("span");
                                        span.className = "namefamily";
                                        span.innerText = `${name} ${surname}`;
                                        return span;
                                    })());
                                    return span;
                                })());
                                return div;
                            })());
                            div.appendChild((() => {
                                let div = document.createElement("div");
                                div.className = "param";
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    span.className = "name title";
                                    span.innerText = "Дата и время заказа:";
                                    return span;
                                })());
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    let formatter = new Intl.DateTimeFormat("ru", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        year: "numeric",
                                        month: "numeric",
                                        day: "numeric"
                                    });
                                    span.className = "value";
                                    span.innerText = `${formatter.format(dateCreated)}.`;
                                    return span;
                                })());
                                return div;
                            })());
                            div.appendChild((() => {
                                let div = document.createElement("div");
                                div.className = "products";
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    span.className = "title";
                                    span.innerText = "Товары:";
                                    return span;
                                })());
                                div.appendChild((() => {
                                    let div = document.createElement("div");
                                    div.className = "list";
                                    for(let {id, photoUrl, name, color, size, price, count} of products)
                                        div.appendChild((() => {
                                            let div = document.createElement("div");
                                            div.className = "product";
                                            div.id = id;
                                            div.appendChild((() => {
                                                let span = document.createElement("span");
                                                span.className = "left";
                                                span.appendChild((() => {
                                                    let div = document.createElement("div");
                                                    div.className = "photo";
                                                    div.appendChild((() => {
                                                        let img = new Image;
                                                        img.src = photoUrl;
                                                        return img;
                                                    })());
                                                    return div;
                                                })());
                                                span.appendChild((() => {
                                                    let div = document.createElement("div");
                                                    div.className = "name";
                                                    div.innerText = name;
                                                    return div;
                                                })());
                                                span.appendChild((() => {
                                                    let div = document.createElement("div");
                                                    div.className = "params";
                                                    div.appendChild((() => {
                                                        let span = document.createElement("span");
                                                        span.className = "param color";
                                                        span.appendChild((() => {
                                                            let span = document.createElement("span");
                                                            span.className = "name";
                                                            span.innerText = "Цвет:";
                                                            return span;
                                                        })());
                                                        span.appendChild((() => {
                                                            let span = document.createElement("span");
                                                            span.className = "view";
                                                            span.style = `--color: ${color};`;
                                                            return span;
                                                        })());
                                                        return span;
                                                    })());
                                                    if(size)
                                                        div.appendChild((() => {
                                                            let span = document.createElement("span");
                                                            span.className = "param size";
                                                            span.appendChild((() => {
                                                                let span = document.createElement("span");
                                                                span.className = "name";
                                                                span.innerText = "Размер:";
                                                                return span;
                                                            })());
                                                            span.appendChild((() => {
                                                                let span = document.createElement("span");
                                                                span.className = "view";
                                                                span.innerText = size;
                                                                return span;
                                                            })());
                                                            return span;
                                                        })());
                                                    return div;
                                                })());
                                                return span;
                                            })());
                                            div.appendChild((() => {
                                                let span = document.createElement("span");
                                                span.className = "right";
                                                span.appendChild((() => {
                                                    let div = document.createElement("div");
                                                    div.className = "price";
                                                    div.appendChild(document.createTextNode(priceFormatter.format(price)));
                                                    div.appendChild((() => {
                                                        let span = document.createElement("span");
                                                        span.className = "currency";
                                                        span.innerText = "₽";
                                                        return span;
                                                    })());
                                                    return div;
                                                })());
                                                span.appendChild((() => {
                                                    let div = document.createElement("div");
                                                    div.className = "param count";
                                                    div.appendChild((() => {
                                                        let span = document.createElement("span");
                                                        span.className = "name";
                                                        span.innerText = "Кол-во:";
                                                        return span;
                                                    })());
                                                    div.appendChild((() => {
                                                        let span = document.createElement("span");
                                                        span.className = "value";
                                                        span.innerText = `${count} шт.`;
                                                        return span;
                                                    })());
                                                    return div;
                                                })());
                                                return span;
                                            })());
                                            return div;
                                        })());
                                    return div;
                                })());
                                return div;
                            })());
                            div.appendChild((() => {
                                let div = document.createElement("div");
                                div.className = "param";
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    span.className = "name title";
                                    span.innerText = "Итого:";
                                    return span;
                                })());
                                div.appendChild((() => {
                                    let span = document.createElement("span");
                                    span.className = "value";
                                    span.appendChild((() => {
                                        let span = document.createElement("span");
                                        span.className = "price";
                                        span.appendChild(document.createTextNode(priceFormatter.format(products.total)));
                                        span.appendChild((() => {
                                            let span = document.createElement("span");
                                            span.className = "currency";
                                            span.innerText = "₽";
                                            return span;
                                        })());
                                        return span;
                                    })());
                                    span.appendChild(document.createTextNode("."));
                                    return span;
                                })());
                                return div;
                            })());
                            (() => {
                                let statusView = null;
                                let offer = null;
                                let statusSelect = null;
                                let updateStatusViewAndOffer = () => {
                                    let statusIndex = order.status;
                                    let status = this.orderStatuses[statusIndex];
                                    statusView.innerText = status;
                                    offer.style.display = statusIndex === 0 ? "" : "none";
                                }
                                let update = () => {
                                    updateStatusViewAndOffer();
                                    for(let option of statusSelect.options) {
                                        let statusIndex = order.status;
                                        option.selected = Number(option.value) === statusIndex;
                                    }
                                }
                                let onStatusSelect = () => {
                                    order.status = Number(statusSelect.options[statusSelect.selectedIndex].value);
                                    updateStatusViewAndOffer();
                                }
                                let onAccept = () => {
                                    order.status = 3;
                                    update();
                                }
                                let onReject = () => {
                                    order.status = 2;
                                    update();
                                }
                                div.appendChild((() => {
                                    let div = document.createElement("div");
                                    div.className = "param";
                                    div.appendChild((() => {
                                        let span = document.createElement("span");
                                        span.className = "name title";
                                        span.innerText = "Статус:";
                                        return span;
                                    })());
                                    div.appendChild((() => {
                                        let span = document.createElement("div");
                                        span.className = "value select";
                                        span.appendChild((() => {
                                            let select = (statusSelect = document.createElement("select"));
                                            select.addEventListener("change", onStatusSelect);
                                            for(let index = 0; index < this.orderStatuses.length; index++) {
                                                let status = this.orderStatuses[index];
                                                select.appendChild((() => {
                                                    let option = document.createElement("option");
                                                    option.value = index;
                                                    if(index === statusIndex)
                                                        option.selected = true;
                                                    option.innerText = status;
                                                    return option;
                                                })());
                                            }
                                            return select;
                                        })());
                                        span.appendChild((() => {
                                            let span = (statusView = document.createElement("span"));
                                            span.className = "view";
                                            span.innerText = this.orderStatuses[statusIndex];
                                            return span;
                                        })());
                                        span.appendChild(document.createTextNode("."));
                                        return span;
                                    })());
                                    return div;
                                })());
                                div.appendChild((() => {
                                    let div = (offer = document.createElement("div"));
                                    div.className = "offer h-buttons";
                                    if(statusIndex !== 0)
                                        div.style.display = "none";
                                    div.appendChild((() => {
                                        let button = document.createElement("button");
                                        button.className = "accept button type-1";
                                        button.addEventListener("click", onAccept);
                                        button.appendChild((() => {
                                            let img = new Image;
                                            img.src = "./images/order-accept.png";
                                            return img;
                                        })());
                                        button.appendChild(document.createTextNode("Принять"));
                                        return button;
                                    })());
                                    div.appendChild((() => {
                                        let button = document.createElement("button");
                                        button.className = "reject button type-2";
                                        button.addEventListener("click", onReject);
                                        button.appendChild((() => {
                                            let img = new Image;
                                            img.src = "./images/order-reject.png";
                                            return img;
                                        })());
                                        button.appendChild(document.createTextNode("Отклонить"));
                                        return button;
                                    })());
                                    return div;
                                })());
                            })();
                            return div;
                        })());
                        return div;
                    })());
                }
                return div;
            })());
            return main;
        }
    }
    Main.User = class User {
        constructor({id, name, surname, photoUrl} = {}) {
            this.id = id ?? -1;
            this.name = name ?? "<имя>";
            this.surname = surname ?? "<фамилия>";
            this.photoUrl = photoUrl ?? "./images/user-photo-default.png";
        }
    }
    Main.Order = class Order {
        constructor({id, customer, dateCreated, products, status} = {}) {
            this.id = id ?? -1;
            this.customer = customer ?? new User;
            this.dateCreated = dateCreated ?? new Date(1621439156457);
            this.products = products ?? [];
            this.status = status ?? 0;
        }
    }
    Main.Product = class Product {
        constructor({id, name, photoUrl, color, size, price, count} = {}) {
            this.id = id ?? -1;
            this.name = name ?? "<имя>";
            this.photoUrl = photoUrl ?? "./images/product-photo-default.png";
            this.color = color ?? "#ffffff";
            this.size = size ?? null;
            this.price = price ?? 0;
            this.count = count ?? 0;
        }
    }
    Main.Products = class Products extends Array {
        get total() {
            let total = 0;
            for(let {price, count} of this)
                total += price * count;
            return total;
        }
    }
    return Main;
})();