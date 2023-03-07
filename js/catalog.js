function add_new_html(i) {
    if (array[i].add == 0) {
        if (array[i].kolvo > 0) {
            main.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i}" style="width: 350px;">
            <img src="assets/${array[i].src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${array[i].name}</h5>
            <p class="card-text">${array[i].description}</p>
            <div class="container">
                <div class = "row">
                    <button class="btn btn-primary col-6">В корзину!</button>
                    <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                </div>
            </div>
            </div>
        </div>`;
        }
        else {
            main.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i}" style="width: 350px;">
            <img src="assets/${array[i].src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${array[i].name}</h5>
            <p class="card-text">${array[i].description}</p>
            <div class="container">
                <div class = "not_in_value row">
                    <button class="not_in_value btn btn-secondary col-6 disabled">нет в наличии</button>
                    <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                </div>
            </div>
            </div>
        </div>`;
        }
    }
    else {
        if (array[i].kolvo > 0) {
            main.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i}" style="width: 350px;background-color:rgba(169, 223, 169, 0.603);">
        <img src="assets/${array[i].src}" class="card-img-top" alt="...">
        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        Хит продаж!
        </span>
        <div class="card-body" >
          <h5 class="card-title">${array[i].name}</h5>
          <p class="card-text">${array[i].description}</p>
          <div class="container">
            <div class = "row">
                <button class="btn btn-primary col-6">В корзину!</button>
                <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                
            </div>
          </div>
        </div>
      </div>
      `;
        }
        else {
            main.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i}" style="width: 350px;">
            <img src="assets/${array[i].src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${array[i].name}</h5>
            <p class="card-text">${array[i].description}</p>
            <div class="container">
                <div class = "not_in_value row">
                    <button class="not_in_value btn btn-secondary col-6">нет в наличии</button>
                    <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                </div>
            </div>
            </div>
        </div>`;
        }
    }
}


let search = new URLSearchParams(window.location.search);

let sort = search.get(`sort`);

let main = document.querySelector(`.main_page`);


if (sort == 0) {
    console.log(`Все товары`);
    for (let i = 0; i < array.length; i++) {
        add_new_html(i);
    }
}
if (sort == 1) {
    console.log(`лыжи`);
    for (let i = 0; i < array.length; i++) {
        if(array[i].noun == 0){
            add_new_html(i);
        }
    }
}
if (sort == 2) {
    console.log(`аксессуары`);
    for (let i = 0; i < array.length; i++) {
        if(array[i].noun == 1){
            add_new_html(i);
        }
    }
}


///////////////////////////


let inputNode = document.querySelector(`#finder`);

inputNode.addEventListener(`input` , function(evt){
    main.innerHTML = ``;
    let input = inputNode.value;
    if (sort == 0) {
        console.log(`Все товары`);
        for (let i = 0; i < array.length; i++) {
            if(array[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1){
                add_new_html(i);
            }
        }
    }
    if (sort == 1) {
        console.log(`лыжи`);
        for (let i = 0; i < array.length; i++) {
            if(array[i].noun == 0){
                if(array[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1){
                    add_new_html(i);
                }
            }
        }
    }
    if (sort == 2) {
        console.log(`аксессуары`);
        for (let i = 0; i < array.length; i++) {
            if(array[i].noun == 1){
                if(array[i].name.toLowerCase().indexOf(input.toLowerCase()) != -1){
                    add_new_html(i);
                }
            }
        }
    }
});


/////////////////

let AllKolvo=0;
main.addEventListener(`click` , function(evt){
    let index = evt.target.closest(`.card`);
    if(index != null){
    if(evt.target.classList[0] == `not_in_value`){console.log(`нет в наличии`);}
    else if(evt.target.classList[0] == `btn`){console.log(`есть в наличии`);
        kolvo[index.classList[3]]++;
        AllKolvo++;
    }
    else{console.log(`не туда тыкнул`);}}
});