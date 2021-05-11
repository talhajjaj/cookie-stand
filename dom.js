'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let stores=[];
function Store (Location, Min, Max, Avg) {

  this.Location = Location;
  
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.randomCustperh= [],
  this.salesperh=[],
  this.totalperh= 0,
stores.push(this);}

Store.prototype.randomCustNumber= function(){

for (let hour = 0; hour < hours.length; hour++) {
  this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}

// {console.log(`store name is${this.Location}`);
}

Store.prototype.salesCookies= function(){
  for (let i = 0; i < hours.length; i++) {
    
    this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
    this.totalperh += this.salesperh[i];
  
}  
// console.log(`how many cookeis do we sell per hour${this.Avg}`)
}
let container= document.getElementById('container');
let table =document.createElement('table');
container.appendChild(table);
Store.prototype.render=function(){
  // console.log(this.salesperh);
let LocationRow=document.createElement('tr');
table.appendChild(LocationRow);
let nametd= document.createElement('td');
LocationRow.appendChild(nametd);
nametd.textContent=this.Location

for(let ind=0; ind<hours.length;ind++){
  let random=document.createElement('td');
  LocationRow.appendChild(random);
  random.textContent=this.salesperh[ind];
}
}

  // let random=document.createElement('td');
  // total.appendChild(random);
  // random.textContent=total;


// }let total=function(){
//   let final=document.createElement('tr');
//   let th1=document.createElement('th');
//   tr1.appendChild(th1);
//   th1.textContent='total'

//   for(let ind=0; ind<hours.length;ind++)
//   {
//     let  total=0 ;
//     for(let i=0;i<hours.length; i++){
//       total+=hours.length[hour]
//     }
  
// }
// {this.salesCookies();
//   let container = document.getElementById('contain');
//   let h2El = document.createElement('h2');
//   container.appendChild(h2El);
//   h2El.textContent = this.Location;
//   let ulEl = document.createElement('ul');
//   container.appendChild(ulEl);
//   for (let h = 0; h < hours.length; h++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[h]}:${this.salesperh[h]} cookies`
//   }
//   let totalLi = document.createElement('li');
//   ulEl.appendChild(totalLi);
//   totalLi.textContent = `Total: ${this.totalperh} cookies`

//   {console.log(`many hours${hours}`)}  
// }
  

// stores.prototype.randomCustNumber= function(){
    // console.log(this.Location)}
  

let seattle =new Store('seattle', 23,65,6.3);
let Tokyo=  new Store('Tokyo',3, 24, 1.2);
let Dubai= new Store('Dubai',11,35,3.7);
let Paris = new Store('paris', 20, 38,2.3);
let Lima = new Store( 'Lima',2,16, 4.6);



let tr1=document.createElement('tr');
table.appendChild(tr1);
let th1=document.createElement('th');
tr1.appendChild(th1);
th1.textContent='location/hour';

{
for(let i=0;i<hours.length; i++){
let th2=document.createElement('th');
tr1.appendChild(th2);
th2.textContent=hours[i];

}
}
  
let storeform=document.getElementById('storeform');
  storeform.addEventListener('submit', addStore);
   function addStore(event) {
    event.preventDefault();

let storeName=event.target.storeName.value;
let Min=event.target.MinNumber.value;
let Max=event.target.MaxNumber.value;
let Avg=event.target.AvgNumber.value;

let newStore=new Store(storeName , Min,Max,Avg)
newStore.randomCustNumber();
newStore.salesCookies();

newStore.render(); 
   }
// for(let ind=0; ind<stores.length;ind++){
//   let random=document.createElement('td');
//   nametd.appendChild(random);
//   random.textContent=(stores[ind].salesperh);
// }


seattle.randomCustNumber();
seattle.salesCookies();
seattle.render();

Tokyo.randomCustNumber();
Tokyo.salesCookies();
Tokyo.render();

Dubai.randomCustNumber();
Dubai.salesCookies();
Dubai.render();

Paris.randomCustNumber();
Paris.salesCookies();
Paris.render();

Lima.randomCustNumber();
Lima.salesCookies();
Lima.render();


let total=document.createElement('tr');
table.appendChild(total);
let nametd=document.createElement('td');
total.appendChild(nametd);
nametd.textContent='total' 

for(let ind=0; ind<hours.length;ind++){
  let total2= 0 
  for(let i=0;i<stores.length; i++){
    total2+= stores[i].salesperh[ind]
  }
  let final=document.createElement('td');
  total.appendChild(final);
  final.textContent=total2

  }



  

//   let storeform=document.getElementById('storeform');
//   storeform.addEventListener('submit', addStore);
//    function addStore(event) {
//     event.preventDefault();

// let storeName=event.target.storeName.value;
// let Min=event.target.MinNumber.value;
// let Max=event.target.MaxNumber.value;
// let Avg=event.target.AvgNumber.value;

// let newStore=new Store(storeName , Min,Max,Avg)
// newStore.randomCustNumber();
// newStore.salesCookies();

// newStore.render(); 
//    }
// console.log(newStore);
  

