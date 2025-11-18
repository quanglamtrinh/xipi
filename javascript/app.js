    // BANNER CAROUSEL //

    var carouselwrap = document.getElementsByClassName('carousel__wrapper')[0];
    setTimeout(function(){
        carouselwrap.style.visibility = 'unset';
    }, 50);

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var slide = document.getElementsByClassName('carousel__slide')[0];


 
var carouselimg = document.querySelectorAll('.carousel__slide img');
if (carouselimg.length !== 0){
    var size = carouselimg[1].clientWidth;
}

if (slide){
    var counter = 1;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';  

    next.addEventListener('click', function(e){
        if (counter >= carouselimg.length-1){
            return;
        }
        slide.style.transition = 'all '+ (transitiontime)+ 's' + ' ease-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';  
        slide.style.webkitTransform =  'translateX(' + (-size * counter) + 'px)';
    })
    prev.addEventListener('click', function(e){
        if (counter <= 0){
            return;
        }
        slide.style.transition = 'all '+ (transitiontime)+ 's' + ' ease-out';
        counter--;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        slide.style.webkitTransform =  'translateX(' + (-size * counter) + 'px)';
    })

    slide.addEventListener('transitionend', function(e){
        if (carouselimg[counter].id === 'lastimg'){
            slide.style.transition = "none";
            counter = carouselimg.length - 2;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselimg[counter].id === 'firstimg'){
            slide.style.transition = "none";
            counter = carouselimg.length - counter;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })
}

// BANNER CAROUSEL //

// SET INTERVAL FOR BANNER CAROUSEL //

if (slide){
    setInterval(function(){
        if (counter >= carouselimg.length-1){
            return;
        }
        slide.style.transition = 'all ' + (transitiontime)+ 's' + ' ease-out';
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';  
    }, 6000);
}

// SET INTERVAL FOR BANNER CAROUSEL //



    // CREATE CART BASIC HTML //

    const main = document.getElementById('wrappercart');
    const wrappercart = document.createElement('div');
    wrappercart.classList.add('wrappercart');
    if (main){
        wrappercart.innerHTML = `
        <div id="cart">
        <div class="mycart">
            <div class="mycart__back">
                <i class="fa-solid fa-arrow-left cart__back"></i>
            </div>
            <div class="mycart__title">
                <span>My cart</span>
            </div>
            <div class="mycart__erase">
                <i class="fa-solid fa-trash" id="cart__removeall"></i>
            </div>
        </div>
        <div id="items">
            <div class="items"></div>
        </div>
        <div class="cart__total">
            <div class="div">
                <span>Total:</span>
            <span class = "total__price">0</span>
            </div>
        </div>
        <div class="grayspace"></div>
        <div class="cart__pay">
            <div class="pay__button">
                <span onclick="buyNow()">Buy Now</span>
            </div>
        </div>`;
    }

    // CREATE CART BASIC HTML //

    /******************************************/
    // MODIFY NAV BAR ONSCROLL    
        
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    //         document.getElementById("header__main").style.marginTop = "-40px";
    //     }
    //     else {
    //         document.getElementById("header__main").style.marginTop = "0px";
    //     }
    // }

    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("header__main");
    var togglemenu = document.getElementsByClassName("togglemenu")[0];
    var headermenu = document.getElementsByClassName("header__list")[0];

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    var stickymenu = togglemenu.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            togglemenu.classList.add("stickymenu");
            headermenu.classList.add("stickymenu");
        } else {
            navbar.classList.remove("sticky");
            togglemenu.classList.remove("stickymenu");
            headermenu.classList.remove("stickymenu");
        }
    }

    // function myFunction1(){
        
    //     if (window.pageYOffset - 75 >= stickymenu){
    //         togglemenu.classList.add("stickymenu");
    //     }
    //     else {
    //         togglemenu.classList.remove("stickymenu");
    //     }
    // }

    // MODIFY NAV BAR ONSCROLL    
    /******************************************/


    /******************************************/
    // SHOW NOTIFICATIONS WHEN ADD TO CART

    function toast1({icon, message, type, duration}){
        const main = document.getElementById('toast1');
        const toast1 = document.createElement('div');
        toast1.classList.add('toast1',`toast1--${type}`);
        if (main){
            toast1.innerHTML = `
            <div class="toast1__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast1__body">
                <p> ${message}</p>    
            </div>
            <div class="toast1__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>`;
            main.appendChild(toast1);
            const remove = setTimeout(function(){
                main.removeChild(toast1);
            }, duration + 1000);
            toast1.onclick = function(e){
                if(e.target.closest(".toast1__close")){
                    main.removeChild(toast1);
                    clearTimeout(remove);
                }
            }
        }
        
    }
    function showSuccess(){
        toast1({
            icon: "fa-solid fa-circle-check",
            message: "An item is added successfully. Please check out in your cart",
            type : "success",
            duration: 2000        
        })
    }
    function showError(){
        toast1({
            icon: "fa-solid fa-triangle-exclamation",
            message: "Unfortunately an item is sold out. Please come back later",
            type : "error",
            duration: 5000        
        })
    }

    // SHOW NOTIFICATIONS WHEN ADD TO CART
    /******************************************/


    /******************************************/
    // GET OR CREATE CONTENT VARIABLE

    if (sessionStorage.getItem("content")){
        var content = sessionStorage.getItem("content");
        console.log("ok1");
    }
    else{
        var content = '';
        console.log("ok2");
    }

    // GET OR CREATE CONTENT VARIABLE
    /******************************************/


    /******************************************/
    // ADD EVENT LISTENER TO "ADDTOCART" BUTTON OF PRODUCTS

    const buttonadd = document.getElementsByClassName("layer__title--wrap")
    for (var i = 0; i < buttonadd.length; i++){
        var buttons = buttonadd[i];
        buttons.addEventListener('click', addProduct)
    }

    const itemadd = document.getElementsByClassName("addbutton")[0];
    if (itemadd){
        itemadd.addEventListener('click', addProductItem);
    }

    // ADD EVENT LISTENER TO "ADDTOCART" BUTTON OF PRODUCTS
    /******************************************/
    

    /******************************************/
    // GET INFORMATION OF PRODUCTS WHEN CLICK BUTTON //

    function addProduct(e){
        var button = e.target;
        var product = button.parentElement.parentElement.parentElement.parentElement;
        var img = product.getElementsByClassName("mainpage__product")[0].src;
        var name = product.getElementsByClassName("product__name")[0].innerText;
        var price = product.getElementsByClassName("product__price")[0].innerText;
        addToNewPage(img, name, price);
    }

    function addProductItem(e){
        var button = e.target;
        var productwrap = button.parentElement.parentElement.parentElement;
        console.log(productwrap);
        var img = document.getElementsByClassName("product__image")[0].src;
        var name = productwrap.getElementsByClassName("product__name")[0].innerText;
        var price = productwrap.getElementsByClassName("product__price")[0].innerText;
        console.log(price);
        addToNewPage(img, name, price);
    }

    // GET INFORMATION OF PRODUCTS WHEN CLICK BUTTON //
    /******************************************/

    // ADD INFORMATION OF PRODUCTS TO CONTENT VARIABLE //
    /******************************************/

    function addToNewPage(img, name, price){
        const item = document.getElementsByClassName("items");
        window.content += `
        <div class="cartwrap">
            <div class="cart">
                <div class="cart__icon">
                    <img src="${img}" alt="">
                </div>
                <div class="cart__body">
                    <div class="cart__name"><span class = "cart__name--item">${name}</span></div>
                    <div class="cart__price"><span class = "cart__price--item">${price}</span></div>
                </div>
                <div class="cart__quantity">
                    <div class="cart__minus">
                        <i class="fa-solid fa-circle-minus minus"></i>
                    </div>
                    <div class="cart__number"><input value="1" readonly class="cart__value"></div>
                    <div class="cart__plus">
                        <i class="fa-solid fa-circle-plus add"></i>
                    </div>
                </div>
            </div>
            <div class="cart__close">
                <i class="fa-solid fa-trash cart__remove"></i>
            </div>
        </div>`
        item.innerHTML = `${window.content}`;
        sessionStorage.setItem("content", content);
    }

    // ADD INFORMATION OF PRODUCTS TO CONTENT VARIABLE //
    /******************************************/

    // FUNCTIONS WHEN CLICK CART BUTTON //
    
    function addToCart(){    
        const item = document.getElementsByClassName("items");
        const main = document.getElementById('wrappercart');

        // const child = document.createElement("div");
        // main.appendChild(child);
        // child.classList.toggle("wrappercart");
        
        // wrappercart.style.display = "unset";
        main.appendChild(wrappercart);

        wrappercart.style.display = "block";
        var cart = document.getElementById("cart");
        cart.style.animation = "moveInTop 1s ease-out";
        wrappercart.style.display = "block";
        
        cart.addEventListener("animationend", function(){
            wrappercart.style.display = "block";
            cart.style.animation = "moveInTop 1s ease-out";
            console.log(cart.style.animation)
        })    
        item[0].innerHTML = window.content;
        sessionStorage.setItem("content", content);

        // CHECK DUPLICATED ITEM AND CHANGE QUANTITY //
        
        var dup = true;
        while (dup === true){
            const products = document.getElementsByClassName("cart__name--item");
            var dup = false
            for (var i = 0; i < products.length; i++){
                for (var x = 1; x < products.length; x++){
                    if (x === i){
                    }
                    else if (products[i] == undefined || products[x] == undefined){
                        console.log("x la", x);
                        console.log("i la", i);
                    }
                    else if (products[i].innerText === products[x].innerText){
                        var dup = true;

                        var additem = products[i].parentElement.parentElement.parentElement.getElementsByClassName("cart__value")[0].value;
                        console.log("so luong san pham cua item",i,"la",additem);

                        var numproduct = parseFloat(additem) + 1;
                        products[i].parentElement.parentElement.parentElement.getElementsByClassName("cart__value")[0].value = numproduct;
                        products[i].parentElement.parentElement.parentElement.getElementsByClassName("cart__value")[0].setAttribute('value', numproduct);

                        var cartbody = products[i].parentElement.parentElement.parentElement;
                        var price = cartbody.getElementsByClassName('cart__price--item')[0].innerText;
                        var pricenum = parseFloat(price.replace(/₫/g,'').replace(/\./g,''))/(numproduct-1)*numproduct;
                        var lastprice = pricenum.toLocaleString() + ' ₫';
                        cartbody.getElementsByClassName('cart__price--item')[0].innerText = lastprice;

        
                        products[x].parentElement.parentElement.parentElement.parentElement.remove();
                    }
                }
            }
        }

        // CHECK DUPLICATED ITEM AND CHANGE QUANTITY //

    increaseItem();
    decreaseItem();
    removeItem();
    removeAll();
    totalPrice();

    // CLOSE CART WHEN CLICK //

    const close = document.getElementsByClassName('mycart__back')[0];
    const closebutton = close.getElementsByClassName('cart__back')[0];
    closebutton.addEventListener('click', function(e){
        var closeclicked = e.target;
        var cart = closeclicked.parentElement.parentElement.parentElement;
        cart.style.animation = "moveToTop 1s ease-out";
        cart.addEventListener('animationend', function(){
            console.log('ok')
            cart.style.animation = "moveToTop 1s ease-out";
            var back = closeclicked.parentElement.parentElement.parentElement.parentElement;
            back.style.display = "none"; 
        })  
        // back.style.animation = ""
    })

    // CLOSE CART WHEN CLICK //

    // SAVE CONTENT VARIABLE //

    sessionStorage.setItem("content", content);

    // SAVE CONTENT VARIABLE //
}


// CHANGE PRICE AND QUANTITY WHEN CLICK ADD BUTTON //
function increaseItem(){
    const add = document.getElementsByClassName('cart__plus');
    console.log(add);
    for (var i = 0; i < add.length; i++){
        var addbutton = add[i];
        console.log("addbutton:", addbutton)
        addbutton.addEventListener('click', function(e){
            var buttonclicked = e.target;
            var quantity = buttonclicked.parentElement.parentElement;
            var number = Number(quantity.getElementsByClassName('cart__value')[0].value) + 1;
            quantity.getElementsByClassName('cart__value')[0].value = number;
            quantity.getElementsByClassName('cart__value')[0].setAttribute('value', number);
            
            console.log(quantity.getElementsByClassName('cart__value')[0].value);

            var cart = quantity.parentElement;
            var price = cart.getElementsByClassName('cart__price--item')[0].innerText;
            var pricenum = parseFloat(price.replace(/₫/g,'').replace(/\./g,''))/(number-1)*number;
            var lastprice = pricenum.toLocaleString() + ' ₫';
            cart.getElementsByClassName('cart__price--item')[0].innerText = lastprice;

            totalPrice();
            var items = document.getElementsByClassName("items")[0];
            window.content = items.innerHTML;
            sessionStorage.setItem("content", content);
            console.log(items.innerHTML)
        })
    }
}
// CHANGE PRICE AND QUANTITY WHEN CLICK ADD BUTTON //

// CHANGE PRICE AND QUANTITY WHEN CLICK MINUS BUTTON //
function decreaseItem(){
    const minus = document.getElementsByClassName('cart__minus');
    for (var i = 0; i < minus.length; i++){
        var minusbutton = minus[i];
        minusbutton.addEventListener('click', function(e){
            var buttonclicked = e.target;
            var quantity = buttonclicked.parentElement.parentElement;
            var number = Number(quantity.getElementsByClassName('cart__value')[0].value) - 1;
            
            if (number){
                quantity.getElementsByClassName('cart__value')[0].value = number;
                quantity.getElementsByClassName('cart__value')[0].setAttribute('value', number);
                var cart = quantity.parentElement;
                var price = cart.getElementsByClassName('cart__price--item')[0].innerText;
                var pricenum = parseFloat(price.replace(/₫/g,'').replace(/\./g,''))/(number+1)*number;
                var lastprice = pricenum.toLocaleString() + ' ₫';
                cart.getElementsByClassName('cart__price--item')[0].innerText = lastprice;
            }
            totalPrice();
            var items = document.getElementsByClassName("items")[0];
            window.content = items.innerHTML;
            sessionStorage.setItem("content", content);
        })
    }
}
// CHANGE PRICE AND QUANTITY WHEN CLICK MINUS BUTTON //

// CALCULATE TOTAL PRICE OF CART //
function totalPrice(){
    var prices = document.getElementsByClassName("cart__price--item");
    // var total = document.getElementsByClassName("total__price")[0].innerText;
    var totalnum = 0;
    for (var i = 0; i < prices.length; i++){
        var priceitem = prices[i].innerText;
        console.log("price cua item",i, "la", priceitem);
        var totalpriceitem = parseFloat(priceitem.replace(/₫/g,'').replace(/\./g,''));
        console.log(totalpriceitem);
        // console.log("priceitem la", totalpriceitem);
        totalnum += totalpriceitem;
        // console.log("totalnum la", totalnum);
    }
    console.log("total num la ", totalnum)
    var totalprice = totalnum.toLocaleString()+ ' ₫'
    document.getElementsByClassName("total__price")[0].innerText = totalprice;
}
// CALCULATE TOTAL PRICE OF CART //

// REMOVE ITEM IN CART //
function removeItem(){
    const itemremoved = document.getElementsByClassName("cart__remove")
    for (var i = 0; i < itemremoved.length; i++){
        var removeitems = itemremoved[i];
        removeitems.addEventListener('click', function(e){
            var itemclicked = e.target;
            itemclicked.parentElement.parentElement.remove();
            totalPrice();

            var item = document.getElementsByClassName("items");
            window.content = item[0].innerHTML;
            sessionStorage.setItem("content", content);
            
        })  
    }
}
// REMOVE ITEM IN CART //

// REMOVE ALL ITEMS IN CART //

function removeAll(){
    var remove = document.getElementById("cart__removeall");
    remove.addEventListener('click', function(e){
        
        var items = document.getElementsByClassName("items")[0];
        items.innerHTML = '';
        window.content = items.innerHTML;
        sessionStorage.setItem("content", content);
        totalPrice();
    })
}

// REMOVE ALL ITEMS IN CART //

// CLICK BUYNOW //

function buyNow(){
    var buybutton = document.getElementsByClassName("pay__button")[0];
    buybutton.addEventListener('click', function(e){
        alert("Thank you for your purchase");
    })
}

// CLICK BUYNOW //

// DEFINE ITEMS PER SCREEN //

var transitiontime = 0.6;
var itemsperscreen 
if (window.innerWidth >= 1200){
    itemsperscreen = 4;
}
else if(window.innerWidth >= 768){
    itemsperscreen = 3;
}
else if(window.innerWidth >= 576){
    itemsperscreen = 2;
}
else{
    transitiontime = 1;
    itemsperscreen = 1;
}




// OWL CAROUSEL //

var owlprev = document.getElementById('owlprev');
var owlnext = document.getElementById('owlnext');
var owlslide = document.getElementsByClassName('owlcarousel__slide')[0];
var owlcarouselimg = document.querySelectorAll('.owlcarousel__slide img')

if (owlslide){
    var owlcounter = 4;
    owlslide.style.transform = 'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';   

    owlnext.addEventListener('click', function(e){
        if (owlcounter >= owlcarouselimg.length - 4){
            return;
        }
        owlslide.style.transition = 'all ' + (transitiontime)+ 's' + ' ease-out';
        owlcounter++;
        owlslide.style.transform = 'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';   
        owlslide.style.webkitTransform =  'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
        console.log("counter la", owlcounter); 
    })
    owlprev.addEventListener('click', function(e){
        if (owlcounter <= 0){
            return;
        }
        owlslide.style.transition = 'all ' + (transitiontime)+ 's' + ' ease-out';
        owlcounter--;
        owlslide.style.transform = 'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
        owlslide.style.webkitTransform =  'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
        console.log("counter la", owlcounter); 
    })

    owlslide.addEventListener('transitionend', function(e){
        if (owlcarouselimg[owlcounter].id === 'firsthalf'){
            owlslide.style.transition = "none";
            owlcounter += 8;
            owlslide.style.transform = 'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
            owlslide.style.webkitTransform =  'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
        }
        if (owlcarouselimg[owlcounter].id === 'secondhalf'){
            owlslide.style.transition = "none";
            owlcounter -= 8;
            owlslide.style.transform = 'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
            owlslide.style.webkitTransform =  'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
        }
    })
}

// OWL CAROUSEL //


// SET INTERVAL FOR OWL CAROUSEL //

if(owlslide){
    var owlcounter = 4;
    setInterval(function(){
        if (owlcounter >= owlcarouselimg.length - 4){
            return;
        }
        owlslide.style.transition = 'all 0.6s ease-out';
        owlcounter++;
        owlslide.style.transform = 'translateX(' + (-size * owlcounter)/4 + 'px)';
        owlslide.style.webkitTransform =  'translateX(' + (-size * owlcounter)/itemsperscreen + 'px)';
    }, 6000);

}

// SET INTERVAL FOR OWL CAROUSEL //


// SEARCH FUNCTION // 

var input = document.getElementById("search");
if (input){
    input.addEventListener('input',function(e){
        let textsearch = e.target.value.trim().toLowerCase();
        var names = document.getElementsByClassName("product__name");
        [...names].forEach(name =>{
            if (name.innerText.toLowerCase().includes(textsearch)){
                name.parentElement.parentElement.classList.remove('u-display-none');
            }
            else{
                name.parentElement.parentElement.classList.add('u-display-none');
            }
        })
    })
}

// SEARCH FUNCTION //
var close = false;

var menuicon = document.getElementsByClassName("sidebar__click")[0];
if (menuicon){
    menuicon.addEventListener('click', () =>{
        var menubar = document.getElementsByClassName("sidebar")[0];
        menubar.style.animation = "moveInLeft 1s ease-out";
        var sidebar = document.getElementsByClassName("sidebar__wrapper")[0];
        sidebar.style.display = 'block';
        menubar.addEventListener('animationend', ()=>{
            menubar.style.animation = "moveInLeft 1s ease-out";
            var sidebar = document.getElementsByClassName("sidebar__wrapper")[0];
            sidebar.style.display = 'block'; 
        });
    })
}

var sidebarclose = document.getElementsByClassName("sidebar__close")[0];
if (sidebarclose){
    sidebarclose.addEventListener('click', () => {
        var menubar = document.getElementsByClassName("sidebar")[0];
        menubar.style.animation = "moveBackLeft 1s ease-out";
        menubar.addEventListener('animationend', ()=>{
            menubar.style.animation = "moveBackLeft 1s ease-out";
            var sidebar = document.getElementsByClassName("sidebar__wrapper")[0];
            sidebar.style.display = 'none'; 
        });
   
    })
}

if (window.content){
    sessionStorage.setItem("content", content);
    console.log('saved')
}


