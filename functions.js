let image = "Новый товар.jpg"
let names = ["Яблоки", "Помидоры", "Ананасы"];
let prices = [100, 50, 200];
let counts = [12,7,9];
let images = ["Яблоко.jpg", "Помидор.jpg", "Ананас.jpg"];
let tovars = [];
let selection = document.getElementById('select_sort');
let container_my = document.getElementById('container');

container_my.style.display = "flex";
container_my.style.flexWrap = "wrap";
container_my.style.justifyContent = "space-evenly";

for (var i = 0; i < names.length; i++) {
    tovars.push(makeTovar(names[i], prices[i], counts[i], images[i]));
}


function makeTovar(name, price, count, src) {
    return {
        "Тип товара": name,
        "Цена товара": price,
        "Количество": count,
        "image": src,
    };
}


function render() {
    let divs = document.getElementsByClassName('tovar');

    for (var i = 0; i < tovars.length; i++) {
        container.innerHTML += "<div class='tovar'>";
        container.innerHTML += "</div>";
    }

    for (var i = 0; i < tovars.length; i++) {
        for (let key in tovars[i]) {
            if (key != "image") {
                divs[i].innerHTML += "<p>" + key + ": " + tovars[i][key] + "</p>";
            }
            else {
                divs[i].innerHTML += "<img src='img/"+tovars[i][key]+"'>";
            }
        }
    }
}
render();


function sort_by_price() {
    tovars = tovars.sort(function(a,b){
    return a["Цена товара"] - b["Цена товара"];
    });
}

function sort_by_count() {
    tovars = tovars.sort(function(a,b){
    return a["Количество"] - b["Количество"];
    });
}

function sort_by_type() {
    tovars = tovars.sort(function(a,b){
        if (a["Тип товара"][0] > b["Тип товара"][0]) {
            return 1;
        }
        if (a["Тип товара"][0] < b["Тип товара"][0]) {
            return -1;
        }
        return 0;
    });
} 


function change_container_on_flex() {
    container_my.style.display = "flex";
    container_my.style.flexWrap = "wrap";
    container_my.style.justifyContent = "space-evenly";
    alert("Вывести товары плиткой?");
}

function change_container_on_list() {
    container_my.style.display = "";
    alert("Вывести товары списком?");
}


select_view.addEventListener('change', function() {
    let x = select_view.selectedIndex;
    if (x == 1) {
        change_container_on_flex();
    } else {
        change_container_on_list();
    }
});


sort_button.onclick = function(){
    let sort_type = selection.options[selection.selectedIndex].value;
    if (sort_type == "Тип товара") {sort_by_type();}
    if (sort_type == "Цена (по возрастанию)") {sort_by_price();}
    if (sort_type == "Количество (по возрастанию)") {sort_by_count();}

    container.innerHTML = "";
    render();
}


add_tovar.onclick = function() {
    name_tovar.value != 0 ? names.push(name_tovar.value) : names.push("не задан");
    price_tovar.value != 0 ? prices.push(price_tovar.value) : prices.push(0);
    count_tovar.value != 0 ? counts.push(count_tovar.value) : counts.push(0);
    paint_tovar.value != 0 ? images.push(paint_tovar.value) : images.push(image);

    let count = tovars.length;
    tovars.push(makeTovar(names[count], prices[count], counts[count], images[count]));
    container.innerHTML = "";
    
    render();
}
