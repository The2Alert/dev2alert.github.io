const Footer = (function() {
    return class Footer {
        render() {
            let footer = document.createElement("footer");
            footer.appendChild(document.createTextNode("by"));
            footer.appendChild((() => {
                let a = document.createElement("a");
                a.className = "link";
                a.href = "https://github.com/dev2alert";
                a.target = "_blank";
                a.appendChild((() => {
                    let img = new Image;
                    img.className = "icon";
                    img.src = "./images/github.png";
                    return img;
                })());
                a.appendChild(document.createTextNode("Dev2alert"));
                return a;
            })());
            return footer;
        }
    }
})();