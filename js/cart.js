let mainn = document.querySelector(`.list`);

function add_html(i) {
    if (array[i].add == 0) {

        mainn.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i}" style="width:300px;">
            <img src="assets/${array[i].src}" class="card-img-top card-cart" alt="...">
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-center" style="width:280px;">${array[i].name}</h5>
            
            <div class="container">
                <div class = "row justify-content-between">
                    <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                    <button class="btn btn-success col-2 ${i}" style="width: 43px;">+</button>
                    <button class="btn btn-primary col-2" style="width: 43px;">${kolvo[i]}</button>
                    <button class="btn btn-danger col-2 ${i}" style="width: 43px;">-</button>
                </div>
            </div>
            </div>
        </div>`;


    }
    else {
        if (array[i].kolvo > 0) {
            mainn.innerHTML += `<div class="card col-lg-3 col-sm-6 ${i} " style="width:300px;background-color:rgba(169, 223, 169, 0.603);">
        <img src="assets/${array[i].src}" class="card-img-top card-cart" alt="...">
        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        Хит продаж!
        </span>
        <div class="card-body" >
          <h5 class="card-title d-flex justify-content-center" style="width:280px;">${array[i].name}</h5>
          <div class="container">
            <div class = "row justify-content-between">

                <p class = "costing col-6" style="margin:0px;"> ${array[i].cost} руб</p>
                <button class="btn btn-success col-2 ${i}"style="width: 43px;" >+</button>
                <button class="btn btn-primary col-2" style="width: 43px;">${kolvo[i]}</button>
                <button class="btn btn-danger col-2 ${i}" style="width: 43px;">-</button>
            </div>
          </div>
        </div>
      </div>
      `;
        }

    }
}


let summ = document.querySelector(`.summ`);
let GET = document.querySelector(`.btn-secondary`);
let cart_package = document.querySelector(`#cart`);

cart_package.addEventListener(`click` , function(evt){
    let butt = evt.target.closest(`.btn-danger`);
    if(butt != null){
        let ind = butt.classList[3];
        kolvo[ind]--;
        AllKolvo--;
    }
    butt=evt.target.closest(`.btn-success`);
    if(butt != null){
        let ind = butt.classList[3];
        kolvo[ind]++;
        AllKolvo ++;
    }
});
document.addEventListener(`click`, function () {
    if (AllKolvo != 0) {
        summ.innerHTML = 0;
        mainn.innerHTML = ``;
        GET.classList.remove(`btn-secondary`);
        GET.classList.remove(`disabled`);
        GET.classList.add(`btn-primary`);
        for (let i = 0; i < array.length; i++) {
            if(kolvo[i] > 0){
                add_html(i);
                summ.innerHTML = Number(summ.innerHTML) + Number(array[i].cost)*kolvo[i];
            }
        }
    }
    else {
        summ.innerHTML = `пока что заказа нет`;
        mainn.innerHTML = `Здесь будут ваши товары...`;
        GET.classList.add(`btn-secondary`);
        GET.classList.add(`disabled`);
        GET.classList.remove(`btn-primary`);
    }
});

////////////

let get = document.querySelector(`.GET`);
let summ_get = document.querySelector(`.summ-get`);
get.addEventListener(`click` , function(){
    
    summ_get.innerHTML = summ.innerHTML;
    summ_get.innerHTML += 'руб';
});

////////
let bank = document.querySelector(`.select-by`);
let dop = document.querySelector(`.dop`);
bank.addEventListener(`input` , function(){
    console.log(bank.value);
    if(bank.value == `Bank`){
        dop.innerHTML = `<input class="form-control" type="text" placeholder = "Номер карты" style = "margin-bottom:10px;"> 
        <input class="form-control" type="text" placeholder = "Пин-код" style = "margin-bottom:10px;"> 
        <input class="form-control" type="text" placeholder = "Владелец карты" style = "margin-bottom:10px;"> `;
    }
    else if(bank.value==`Kredit`){
        dop.innerHTML = `<input class="form-control" type="text" placeholder = "Процент" style = "margin-bottom:10px;background-color:rgb(233, 184, 161);"> 
        <input class="form-control" type="text" placeholder = "Длина оплаты" style = "margin-bottom:10px;background-color:rgb(233, 184, 161);"> 
        <input class="form-control" type="text" placeholder = "Цифровая подпись документа(6 цифр)" style = "margin-bottom:10px;background-color:rgb(233, 184, 161);"> `;
    }
    else if(bank.value == `Nalich`){
        dop.innerHTML = `При получении заказа передадите деньги курьеру`;
    }
});
////
let adress = document.querySelector(`.adress`);
let dost = document.querySelector(`.dost`);
dost.addEventListener(`input` , function(){
    console.log(dost.value);
    if(dost.value == `kurier`){
        adress.innerHTML=`<input class="form-control" type="text" placeholder = "Ваш адрес места жительства(город , улица , дом , подъезд , домофон)" style = "margin-bottom:10px;background-color:rgb(161, 228, 233);">`;
        summ_get.innerHTML = Number(summ.innerHTML)+500;
        summ_get.innerHTML += 'руб';
    }
    else if(dost.value == `self`){
        adress.innerHTML=`Наш адрес смотрете в соц. сетях!`;
        summ_get.innerHTML = summ.innerHTML;
        summ_get.innerHTML += 'руб';
    }
});
////
let GO = document.querySelector(`.GO`);
GO.addEventListener(`click` , function(){
    AllKolvo=0;
    kolvo=[];
    for(let u = 0 ; u < array.length ;u++ ){
        kolvo.push(0);
    }
    let after = document.querySelector(`.after`);
    after.innerHTML =`спасибо за заказ!!`
});