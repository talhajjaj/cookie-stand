'use strict';
// let  h=[1,3,5,7,9,11,13]
// let min = Math.min(1,3,5,7);
// let max = Math.max(9,11,13);
// console.log( `Min value: ${min}, max value: ${max}` );
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let seattle = {
Location: 'seattle',
  Min: 23,
  Max: 65,
  Avg: 6.3,
  randomCustperh : [],
  salesperh: [],
  totalperh: 0,
  randomCustNumber: function () {
  
    for (let hour = 0; hour < hours.length; hour++) {
          this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}

    },


salesCookies: function () {
  this.randomCustNumber();
    for (let i = 0; i < hours.length; i++) {
    
        this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
        this.totalperh += this.salesperh[i];
      
    }  
console.log(this.salesperh);
console.log(this.randomCustperh);
  },

  // randomCustNumber: function () {
  //   for (let hour = 0; hour < hours.length; hours++) {

  //   this.randomCustperh.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min));}
     
  //   },

  // salesCookies: function () {
  //   for (let i = 0; i < hours.length; i++) {
  //     this.salesperh.push(Math.ceil(this.randomCustPerh[i] * this.avgCustsCookies));
  //     this.totalperh += this.salesperh[i];

  //   }
  //   // {this.salesperh.push(math.floor(math.random()*(this.max - this.min+1)+this.min));}
  // },
  render: function () {
    this.salesCookies();
    let container = document.getElementById('contain');
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.Location;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let hour = 0; hour < hours.length; hour++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[hour]}:${this.salesperh[hour]} cookies`
    }
    let totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.totalperh} cookies`

}

}
seattle.render();

let Tokyo = {
    Location: 'Tokyo',
    Min: 3,
    Max: 24,
    Avg: 1.2,
    randomCustperh: [],
    salesperh: [],
    totalperh: 0,
    
    randomCustNumber: function () {
  
      for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}
  
      },
  
      
      salesCookies: function () {
        this.randomCustNumber();
          for (let i = 0; i < hours.length; i++) {
          
              this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
              this.totalperh += this.salesperh[i];
            
          }  
      console.log(this.salesperh);
      console.log(this.randomCustperh);
        },
        render: function () {
          this.salesCookies();
          let container = document.getElementById('contain');
          let h2El = document.createElement('h2');
          container.appendChild(h2El);
          h2El.textContent = this.Location;
          let ulEl = document.createElement('ul');
          container.appendChild(ulEl);
          for (let hour = 0; hour < hours.length; hour++) {
              let liEl = document.createElement('li');
              ulEl.appendChild(liEl);
              liEl.textContent = `${hours[hour]}:${this.salesperh[hour]} cookies`
          }
          let totalLi = document.createElement('li');
          ulEl.appendChild(totalLi);
          totalLi.textContent = `Total: ${this.totalperh} cookies`
      
      }
      
      }

      Tokyo.render();
      
//   render: function () {
//     let container = document.getElementById('contain');
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.Location;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let hour = 0; hour < hours.length; hour++); {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent=`${this.hours[hour]}:${this.salesperh[hour]}cookies`
//       // liEl.textContent = `Hello`;

//     }

//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.totalPerh} cookies`

//   }
// }
// seattle.randomCustNumber();
// seattle.salesCookies();
// seattle.render();

// console.log(seattle)

let Dubai = {
    Location: 'Dubai',
    Min: 11,
    Max: 35,
    Avg: 3.7,
  randomCustperh: [],
  salesperh: [],
  totalperh: 0,
  
  randomCustNumber: function () {

    for (let hour = 0; hour < hours.length; hour++) {
          this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}

    },

    
    salesCookies: function () {
      this.randomCustNumber();
        for (let i = 0; i < hours.length; i++) {
        
            this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
            this.totalperh += this.salesperh[i];
          
        }  
    console.log(this.salesperh);
    console.log(this.randomCustperh);
      },
      render: function () {
        this.salesCookies();
        let container = document.getElementById('contain');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.Location;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesperh[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalperh} cookies`
    
    }
    
    }
    Dubai.render();

// let Tokyo = {
//   Location: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   randomcustperh: [],
//   salesperh: [],
//   totalperh: 0,
//   randomcust: function () {
//     for (let h = 0; h < hours.length; h++) {
//       this.randomcustperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

//     }
//   },
//   salesCookies: function () {
//     for (let i = 0; i < hours.length; i++) { this.salesperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min)); }
//   },


//   render: function () {
//     let container = document.getElementById('sales')
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.Location;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let h = 0; h < hours.length; h++); {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[hour]}:${this.salesperh[hour]}`
//     }
//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.totalPerh} cookies`

//   }
// }

// Tokyo.randomcust();
// Tokyo.salesCookies();
// Tokyo.render();


// let Dubai = {
//   Location: 'Dubai',
//   Min: 11,
//   Max: 35,
//   Avg: 3.7,
//   randomcustperh: [],
//   salesperh: [],
//   totalperh: [],
//   randomcust: function () {
//     for (let h = 0; h < hours.length; h++) {
//       this.randomcustperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   salesCookies: function () {
//     for (let i = 0; i < hours.length; i++) { this.salesperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min)); }
//   },

//   render: function () {
//     let container = document.getElementById('sales')
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.Location;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let h = 0; h < hours.length; h++); {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[hour]}:${this.salesperh[hour]}`
//     }
//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.totalPerh} cookies`

//   }
// }
// Dubai.randomcust();
// Dubai.salesCookies();
// Dubai.render();

let Paris = {
    Location: 'paris',
    Min: 20,
    Max: 38,
    Avg: 2.3,
randomCustperh: [],
salesperh: [],
totalperh: 0,

randomCustNumber: function () {

  for (let hour = 0; hour < hours.length; hour++) {
        this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}

  },

  
  salesCookies: function () {
    this.randomCustNumber();
      for (let i = 0; i < hours.length; i++) {
      
          this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
          this.totalperh += this.salesperh[i];
        
      }  
  console.log(this.salesperh);
  console.log(this.randomCustperh);
    },
    render: function () {
      this.salesCookies();
      let container = document.getElementById('contain');
      let h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.Location;
      let ulEl = document.createElement('ul');
      container.appendChild(ulEl);
      for (let hour = 0; hour < hours.length; hour++) {
          let liEl = document.createElement('li');
          ulEl.appendChild(liEl);
          liEl.textContent = `${hours[hour]}:${this.salesperh[hour]} cookies`
      }
      let totalLi = document.createElement('li');
      ulEl.appendChild(totalLi);
      totalLi.textContent = `Total: ${this.totalperh} cookies`
  
  }
  
  }
  Paris.render();
// let paris = {
//   Location: 'paris',
//   Min: 20,
//   Max: 38,
//   Avg: 2.3,
//   randomcustperh: [],
//   salesperh: [],
//   totalperh: [],
//   randomcust: function () {
//     for (let h = 0; h < hours.length; h++) {
//       this.randomcustperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   salesCookies: function () {
//     for (let i = 0; i < hours.length; i++) { this.salesperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min)); }
//   },

//   render: function () {
//     let container = document.getElementById('sales')
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.Location;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let h = 0; h < hours.length; h++); {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[hour]}:${this.salesperh[hour]}`
//     }
//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.totalPerh} cookies`

//   }
// }
// paris.randomcust();
// paris.salesCookies();
// paris.render();

let Lima = {
    Location: 'Lima',
    Min: 2,
    Max: 16,
    Avg: 4.6,
randomCustperh: [],
salesperh: [],
totalperh: 0,

randomCustNumber: function () {

for (let hour = 0; hour < hours.length; hour++) {
      this.randomCustperh.push(Math.floor(Math.random()*(this.Max-this.Min+1)+this.Min));}

},


salesCookies: function () {
  this.randomCustNumber();
    for (let i = 0; i < hours.length; i++) {
    
        this.salesperh.push(Math.ceil(Math.random()*(this.randomCustperh[i] * this.Avg)));
        this.totalperh += this.salesperh[i];
      
    }  
console.log(this.salesperh);
console.log(this.randomCustperh);
  },
  render: function () {
    this.salesCookies();
    let container = document.getElementById('contain');
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.Location;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let hour = 0; hour < hours.length; hour++) {
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${hours[hour]}:${this.salesperh[hour]} cookies`
    }
    let totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = `Total: ${this.totalperh} cookies`

}

}
Lima.render();
// let Lima = {
//   Location: 'Lima',
//   Min: 2,
//   Max: 16,
//   Avg: 4.6,
//   randomcustperh: [],
//   salesperh: [],
//   totalperh: [],
//   randomcust: function () {
//     for (let h = 0; h < hours.length; h++) {
//       this.randomcustperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   salesCookies: function () {
//     for (let i = 0; i < hours.length; i++) { this.salesperh.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min)); }
//   },

//   render: function () {
//     let container = document.getElementById('sales')
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.Location;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let h = 0; h < hours.length; h++); {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[hour]}:${this.salesperh[hour]}`
//     }
//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.totalPerh} cookies`

//   }
// }
// Lima.randomcust();
// Lima.salesCookies();
// Lima.render();
