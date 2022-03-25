var products = [
    {
        pid: 100,
    p_name: "samsungA52",
    band: "5g",
    price: 30000,
    display: "amoled"
    },
    {
        pid: 101,
    p_name: "samsungf41",
    band: "4g",
    price: 15000,
    display: "amoled"
    },
    {
        pid: 102,
    p_name: "mi10promax",
    band: "4g",
    price: 19000,
    display: "amoled"
    },
    {
        pid: 103,
    p_name: "mi11lite",
    band: "5g",
    price: 22000,
    display: "led"
    },
    {
        pid: 104,
    p_name: "iphone12pro",
    band: "5g",
    price: 80000,
    display: "amoled"
    },
    {
        pid: 105,
    p_name: "realme",
    band: "4g",
    price: 80000,
    display: "amoled"
    }
]

// product names
// var p_name =  products.map(details=>details["p_name"])
// console.log(p_name);

//print all mob details where display = "amoled"
// products.filter(p=>p["display"]=="amoled").forEach(p=>console.log(p))

//print 5g mobile names
// products.filter(p=>p["band"]=="5g").forEach(p=>console.log(p["p_name"]))

// products.filter(p=>p["band"]=="5g").forEach(p=>console.log(p.p_name))

// products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p))

products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).forEach(p=>console.log(p.p_name))
// console.log(costly_mobile);