let array = [
    {
        name: `Лыжи беговые взрослые SABLE`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_1.jpg`,
        cost: `5400`,
        noun: 0,
        add: 0,
        kolvo: 100
    },
    {
        name: `Лыжи беговые взрослые NORDWAY`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_2.jpg`,
        cost: `7400`,
        noun: 0,
        add: 0,
        kolvo: 100
    },
    {
        name: `Лыжи беговые взрослые FISHER`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_3.jpg`,
        cost: `38000`,
        noun: 0,
        add: 0,
        kolvo: 100
    },

    {
        name: `Лыжи детские`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_дет_2.png`,
        cost: `6000`,
        noun: 0,
        add: 1,
        kolvo: 100
    },
    {
        name: `Лыжи беговые взрослые ATOMIC`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_4.jpg`,
        cost: `45500`,
        noun: 0,
        add: 0,
        kolvo: 0
    },
    {
        name: `Лыжи горные Rossignol`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `горные_лыжи_1.png`,
        cost: `70000`,
        noun: 0,
        add: 0,
        kolvo: 100
    },
    {
        name: `Лыжи горные FISHER`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `горные_лыжи_2.jpg`,
        cost: `55000`,
        noun: 0,
        add: 0,
        kolvo: 100
    },
    {
        name: `Лыжи горные ATOMIC`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `горные_лыжи_3.png`,
        cost: `60000`,
        noun: 0,
        add: 1,
        kolvo: 100
    },
    {
        name: `Лыжи горные Volki`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_горные_4.jpg`,
        cost: `68000`,
        noun: 0,
        add: 0,
        kolvo: 100
    },
    {
        name: `Лыжи детские`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `лыжи_дет_1.jpg`,
        cost: `6000`,
        noun: 0,
        add: 0,
        kolvo: 0
    },
    {
        name: `Палки`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `палки_1.jpg`,
        cost: `1500`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Палки`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `палки_2.jpg`,
        cost: `3500`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Палки FISHER`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `палки_3.jpg`,
        cost: `6000`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Смазка SWIX`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `смазка_1.jpg`,
        cost: `600`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Смазка SWIX`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `смазка_2.png`,
        cost: `600`,
        noun: 1,
        add: 1,
        kolvo: 100
    },
    {
        name: `Смазка SWIX`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `смазка_3.jpg`,
        cost: `600`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Смазка SWIX`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `смазка_4.jpg`,
        cost: `600`,
        noun: 1,
        add: 0,
        kolvo: 100
    },
    {
        name: `Смазка SWIX`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `смазка_5.jpg`,
        cost: `600`,
        noun: 1,
        add: 0,
        kolvo: 0
    },
    {
        name: `Шлем защитный со светофильтром`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `шлем_1.jpeg`,
        cost: `15000`,
        noun: 1,
        add: 0,
        kolvo: 50
    },
    {
        name: `Шлем защитный`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium cupiditate commodi sint distinctio quasi.`,
        src: `шлем_2.jpg`,
        cost: `5000`,
        noun: 1,
        add: 0,
        kolvo: 150
    }
];

let cart=[];

let kolvo=[];
for(let u = 0 ; u < array.length ;u++ ){
    kolvo.push(0);
}
