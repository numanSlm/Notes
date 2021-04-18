//Array methods 
//These Methods are non-destructive i.e. They do not alter OG Object


//1: filter
// find pro user
const users=[
    {user:'Kill',pro:true},
    {user:'Bill',pro:false},
    {user:'Jill',pro:true}, 
    {user:'Will',pro:false},
    {user:'Pill',pro:true}
];
const filterArray =users.filter(ele=>ele.pro);
FilDis=()=>console.log("FilterMethod",filterArray);
document.getElementById("arr-filter").addEventListener("click",FilDis);

//2.Map method
//aply discount on select items
const inventory=[
    {Product:'Wheat', Price :90},
    {Product:'Rice', Price :25},
    {Product:'Sugar', Price :41},
    {Product:'Oil', Price :100},
    {Product:'Salt', Price :9}
];

const setDiscount=inventory.map(item=>{
    if(item.Price >25){
        return {ProducName:item.Product,ItemCost:item.Price/2};

    }
    else{
        return item;
    }
})

MapDis=()=>console.log("MapMethod",setDiscount);
document.getElementById("arr-map").addEventListener('click',MapDis)



//3:Reduce
//get a players total
const scores=[
    {player:'Luffy',point:90},
    {player:'Zoro',point:60},
    {player:'Luffy',point:60},
    {player:'Sanji',point:40},
    {player:'Nami',point:80},
    {player:'Zoro',point:10},
];

const TotalBerry=scores.reduce((acc,curr)=>{
    if (curr.player==='Luffy'){
        acc+=curr.point;
    }

    return acc;
},0);

ReduDis=()=>console.log("ReduceMethod ->",TotalBerry);
document.getElementById('arr-reduce').addEventListener('click',ReduDis)



//4:Find
//find 1st ele that passes test
 
const data=[10,35,5,0,30,90,70,60]

const FindMe=data.find(ele=>{
    return ele>50
})
console.log("FindME",FindMe)


//5:Sort
//in-place sorting(destructive)
//checks first letter of ele
const names=['numa','kuma','zuma','ryuma'];
console.log(names.reverse())//180degree
console.log(names.sort())//sort
console.log(names.reverse())//rev


const champions=[
    {player:'Luffy',point:90},
    {player:'Zoro',point:60},
    {player:'Luffy',point:60},
    {player:'Sanji',point:40},
    {player:'Nami',point:80},
    {player:'Zoro',point:10},
];
//sorting wrt to points
//ascending
champions.sort((a,b)=>a.player-b.player)
//champions.sort((a,b)=> a.point-b.point)//here a is 1st obj and b is 2nd Obj


//descend
//champions.sort((a,b)=>b.point-a.point)
console.log(champions)


//6: Chaining methods

//eg use filter to weed out , then apply func

//normal method
const items=[
    {product:'Barbell',price:100},
    {product:'Dumbbell',price:70},
    {product:'Rope',price:15},
    {product:'Ball',price:50},
    {product:'Rod',price:10},
    {product:'Stretcher',price:60},
];

const filtered=items.filter(i=>i.price>50)
const promos=filtered.map(ele=>`The Produc ${ele.product} is on sale for ${ele.price /2}`)
console.log("Normal Method->",promos)

//chain method

const saleOffer=items
                .filter(i=>i.price>50)
                .map((ele=>`The Produc ${ele.product} is on sale for ${ele.price /2}`))

console.log("Chain Method->",saleOffer)