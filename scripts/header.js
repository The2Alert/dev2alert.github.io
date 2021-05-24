const Header = (function() {
    return class Header {
        constructor({navigation = {links: []}}) {
            this.navigation = navigation;
        }

        render() {
            let header = document.createElement("header");
            header.appendChild((() => {
                let div = document.createElement("div");
                div.className = "left";
                div.appendChild((() => {
                    let span = document.createElement("span");
                    span.className = "logo";
                    return span;
                })());
                div.appendChild((() => {
                    let nav = document.createElement("nav");
                    let {links} = this.navigation;
                    for(let {url, content} of links)
                        nav.appendChild((() => {
                            let a = document.createElement("a");
                            a.href = url;
                            a.innerText = content;
                            return a;
                        })());
                    return nav;
                })());
                return div;
            })());
            header.appendChild((() => {
                let div = document.createElement("div");
                div.className = "right";
                div.appendChild((() => {
                    let nav = document.createElement("nav");
                    nav.appendChild((() => {
                        let a = document.createElement("a");
                        a.className = "signup";
                        a.href = "#signup";
                        a.innerText = "Регистрация";
                        return a;
                    })());
                    nav.appendChild((() => {
                        let a = document.createElement("a");
                        a.className = "signin";
                        a.href = "#signin";
                        a.innerText = "Войти";
                        return a;
                    })());
                    return nav;
                })());
                return div;
            })());
            return header;
        }
    }
})();