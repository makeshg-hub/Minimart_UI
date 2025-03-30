import cinthol from "../assets/pictures/bath/cinthol.jpg";
import dettol from "../assets/pictures/bath/dettol.jpg";
import doveShampoo from "../assets/pictures/bath/dove shampoo.jpg";
import doveSoap from "../assets/pictures/bath/dove.jpg";
import himalayaFW from "../assets/pictures/bath/face1.jpg";
import fw2 from "../assets/pictures/bath/face2.jpg";
import fw3 from "../assets/pictures/bath/face3.png";
import hamam from "../assets/pictures/bath/hamam.jpg";
import himalayaSoap from "../assets/pictures/bath/himalaya soap.jpg";
 import hsShampoo from "../assets/pictures/bath/hs shampoo.jpg";
 import karShampoo from "../assets/pictures/bath/kar shampoo.jpg";
 import pears from "../assets/pictures/bath/pears.jpg ";
 import sunsilk from "../assets/pictures/bath/sunsilk.jpg";



export const groceryData = [
  {
    category: "Fruits & Vegetables",
    products: [
      { name: "Apple (1kg)", price: 180, id: 1, img: cinthol },
      { name: "Banana (Dozen)", price: 60, id: 2 },
      { name: "Tomato (1kg)", price: 40, id: 3 },
      { name: "Potato (1kg)", price: 30, id: 4 },
      { name: "Onion (1kg)", price: 35, id: 5 },
      { name: "Carrot (1kg)", price: 50, id: 6 },
      { name: "Cabbage (1 piece)", price: 40, id: 7 },
      { name: "Cauliflower (1 piece)", price: 50, id: 8 },
      { name: "Mango (1kg)", price: 120, id: 9 },
      { name: "Pomegranate (1kg)", price: 200, id: 10 }
    ]
  },
  {
    category: "Dairy & Eggs",
    products: [
      { name: "Milk (1L)", price: 60, id: 11 },
      { name: "Eggs (12 pack)", price: 85, id: 12 },
      { name: "Butter (500g)", price: 270, id: 13 },
      { name: "Cheese (200g)", price: 130, id: 14 },
      { name: "Paneer (500g)", price: 180, id: 15 },
      { name: "Curd (500g)", price: 45, id: 16 },
      { name: "Ghee (1L)", price: 550, id: 17 }
    ]
  },
  {
    category: "Meat & Seafood",
    products: [
      { name: "Chicken (1kg)", price: 250, id: 18 },
      { name: "Mutton (1kg)", price: 750, id: 19 },
      { name: "Fish (1kg)", price: 400, id: 20 },
      { name: "Prawns (500g)", price: 450, id: 21 },
      { name: "Eggs (30 pack)", price: 200, id: 22 }
    ]
  },
  {
    category: "Bakery",
    products: [
      { name: "Bread (400g)", price: 50, id: 23 },
      { name: "Whole Wheat Bread (400g)", price: 60, id: 24 },
      { name: "Croissant (Pack of 2)", price: 120, id: 25 },
      { name: "Pav (6 pieces)", price: 40, id: 26 },
      { name: "Muffin (Pack of 2)", price: 100, id: 27 }
    ]
  },
  {
    category: "Beverages",
    products: [
      { name: "Tea (500g)", price: 260, id: 28 },
      { name: "Coffee (200g)", price: 400, id: 29 },
      { name: "Orange Juice (1L)", price: 120, id: 30 },
      { name: "Soft Drink (750ml)", price: 40, id: 31 },
      { name: "Coconut Water (1L)", price: 90, id: 32 }
    ]
  },
  {
    category: "Snacks & Frozen",
    products: [
      { name: "Chips (200g)", price: 50, id: 33 },
      { name: "Namkeen (500g)", price: 120, id: 34 },
      { name: "Chocolate (100g)", price: 150, id: 35 },
      { name: "Biscuits (Pack of 5)", price: 80, id: 36 },
      { name: "Popcorn (100g)", price: 70, id: 37 },
      { name: "Frozen Peas (1kg)", price: 150, id: 38 },
      { name: "Frozen French Fries (1kg)", price: 180, id: 39 },
      { name: "Frozen Paratha (Pack of 5)", price: 120, id: 40 },
      { name: "Frozen Chicken Nuggets (500g)", price: 220, id: 41 },
      { name: "Ice Cream (500ml)", price: 180, id: 42 }
    ]
  },
  {
    category: "Pantry Staples",
    products: [
      { name: "Rice (5kg)", price: 350, id: 43 },
      { name: "Wheat Flour (5kg)", price: 220, id: 44 },
      { name: "Pulses (1kg)", price: 140, id: 45 },
      { name: "Sugar (1kg)", price: 45, id: 46 },
      { name: "Salt (1kg)", price: 20, id: 47 },
      { name: "Cooking Oil (1L)", price: 180, id: 48 },
      { name: "Soy Sauce (250ml)", price: 60, id: 49 },
      { name: "Ketchup (500g)", price: 80, id: 50 },
      { name: "Mustard Sauce (250ml)", price: 75, id: 51 },
      { name: "Mayonnaise (500g)", price: 120, id: 52 }
    ]
  },
  {
    category:"Soap & Bath",
    products:[
        {name:"Cinthol Soap", price:60,id:53, img:cinthol},
        {name:"Dettol Soap",price:50,id:54, img:dettol},
        {name:"Dove Soap",price:65,id:55, img:doveShampoo},
        {name:"Himalaya Facewash",price:120,id:56 ,img:himalayaFW},
        {name:"Cetaphil Facewash",price:190,id:57, img:fw2},
        {name:"Clean&clear Facewash",price:235,id:58,img:fw3},
        {name:"Hamam Soap", price:50,id:59,img:hamam},
        {name:"Himalaya Soap", price:55,id:60, img:himalayaSoap},
        {name:"Head & Shoulder Shampoo", price:99,id:61, img:hsShampoo},
        {name:"Karthika Shampoo", price:125,id:62,img:karShampoo},
        {name:"Pears Soap", price:70,id:63,img:pears},
        {name:"Sunsilk Shampoo Soap", price:112,id:64,img:sunsilk}      
    ]
  },
  {
    category:"Beverages",
    products:[
      {name:"7up 600ml",price:48,id:65},
      {name:"Bru 10rs",price:10,id:66},
      {name:"Sunrise 20rs",price:20,id:67},
      {name:"Narasu's 50g",price:65,id:68},
      {name:"Soda",price:25,id:69},      
      {name:"Coke",price:47,id:70},
      {name:"Mala's Strawberry mix",price:189,id:71},
      {name:"Orange Mix",price:35,id:72},
      {name:"Maza 600ml",price:45,id:73},
      {name:"Minute-Maid",price:25,id:74},
      {name:"Red Label",price:179,id:75},
      {name:"Tetley Green Tea",price:219,id:76},
      {name:"Kanan Devan ",price:120,id:77},
      {name:"Lipton Green Tea",price:140,id:78},
      {name:"7up",price:48,id:79},
    ]
  },
  {
    category:"Essential",
    products:[
      {name:"Fortune Atta",price:65,id:80,},
      {name:"Eastern chilli Powder",price:30,id:81},
      {name:"Maida 500g",price:30,id:82},
      {name:"Toor Dhall",price:160,id:83},
      {name:"Moong Dhall",price:135,id:84},
      {name:"Orid Dhall",price:175,id:85},
      {name:"sugar 1kg",price:52,id:86},
      {name:"Parrry's Sugar",price:65,id:87},
      {name:"Fortune oil 1L",price:152,id:88},
      {name:"Saffola Gold 1L",price:183,id:89},
      {name:"Ground Nut oil",price:220,id:90},
      {name:"Bamati rice 5kg",price:720,id:91},
      {name:"Boiled Rice 26kg",price:1660,id:92},
      {name:"Naga Rava 500g",price:48,id:93},
      {name:"Pink Salt",price:90,id:94},
      {name:"Rock Salt",price:38,id:95},

    ]
  },
  {
    category:"Grooming",
    products:[
      {name:"Axe Body Spray", price:180,id:96},
      {name:"Axe Signature",price:215,id:97},
      {name:"Axe Pocket",price:40,id:98},
      {name:"Flora Women",price:249,id:99},
      {name:"Fogg Black",price:299,id:100},
      {name:"Neud Perfume",price:199,id:101},
      {name:"Noor Perfume",price:320,id:102},
      {name:"Parachute Hair Oil",price:99,id:103},
      {name:"Dabur Amla oil",price:135,id:104},
      {name:"Gillette Razor",price:89,id:105},
      {name:"Venus Razor",price:119,id:106},
      {name:"Nivea Soft",price:265,id:107}

    ]
  }


];
