/* проверка поддержки webp,добавление класса webp или no-webp для html */
export function isWebp(){
    //проверка поддержки webp
    function testWebp(callback){
        let webP = new Image();
        webP.onload = webP.onerror = function(){
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

    }
    //добавление класса _webp или _no-webp для html
    testWebp(function(support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}