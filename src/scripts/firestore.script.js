const { addDoc, collection } = require("firebase/firestore");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyC5P9ELcL_0qeH5OCdLGQtOjehtAIAFhPA",
  authDomain: "my-store-5ee5e.firebaseapp.com",
  projectId: "my-store-5ee5e",
  storageBucket: "my-store-5ee5e.appspot.com",
  messagingSenderId: "63106791527",
  appId: "1:63106791527:web:1328c5d158265f43cf7cc2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  {
    id: "6228fc5cb7e6cb904bbe014b",
    name: "dresses",
    displayName: "Vestidos",
    imageUrl:
      "https://images.pexels.com/photos/4843661/pexels-photo-4843661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: "6228fc8bb7e6cb904bbe014e",
        name: "Vestido Azul",
        price: 150,
        imageUrl:
          "https://images.pexels.com/photos/9585272/pexels-photo-9585272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fcb9b7e6cb904bbe0152",
        name: "Vestido verde nude",
        price: 250,
        imageUrl:
          "https://images.pexels.com/photos/6966216/pexels-photo-6966216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fce4b7e6cb904bbe0154",
        name: "Vestido rosa nude",
        price: 500,
        imageUrl:
          "https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fd19b7e6cb904bbe0157",
        name: "Vestido preto",
        price: 250,
        imageUrl:
          "https://images.pexels.com/photos/12894130/pexels-photo-12894130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fd3bb7e6cb904bbe015a",
        name: "Vertido vermelho",
        price: 300,
        imageUrl:
          "https://images.pexels.com/photos/1377451/pexels-photo-1377451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fda4b7e6cb904bbe015f",
        name: "Vertido preto longo",
        price: 250,
        imageUrl:
          "https://images.pexels.com/photos/1792089/pexels-photo-1792089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fca3b7e6cb904bbe0150",
        name: "Vestido branco",
        price: 300,
        imageUrl:
          "https://images.pexels.com/photos/15157772/pexels-photo-15157772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fd63b7e6cb904bbe015c",
        name: "Vestido nude",
        price: 400,
        imageUrl:
          "https://images.pexels.com/photos/15097496/pexels-photo-15097496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: "6228f760b7e6cb904bbe012e",
    name: "shoes",
    displayName: "Sapatos",
    imageUrl:
      "https://images.pexels.com/photos/1302320/pexels-photo-1302320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: "6228f7a3b7e6cb904bbe0134",
        name: "Converse",
        price: 350,
        imageUrl:
          "https://images.pexels.com/photos/3488036/pexels-photo-3488036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f93db7e6cb904bbe0140",
        name: "The north face",
        price: 900,
        imageUrl:
          "https://images.pexels.com/photos/13696790/pexels-photo-13696790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f8c7b7e6cb904bbe013b",
        name: "Slipers",
        price: 200,
        imageUrl:
          "https://images.pexels.com/photos/14706995/pexels-photo-14706995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f96bb7e6cb904bbe0142",
        name: "Adidas",
        price: 500,
        imageUrl:
          "https://images.pexels.com/photos/4498570/pexels-photo-4498570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f7f1b7e6cb904bbe0136",
        name: "Salto preto",
        price: 600,
        imageUrl:
          "https://images.pexels.com/photos/12161966/pexels-photo-12161966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f8afb7e6cb904bbe0139",
        name: "Salto transparente",
        price: 1000,
        imageUrl:
          "https://images.pexels.com/photos/1040384/pexels-photo-1040384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f986b7e6cb904bbe0145",
        name: "Salto vermelho",
        price: 1500,
        imageUrl:
          "https://images.pexels.com/photos/3682292/pexels-photo-3682292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f8f9b7e6cb904bbe013d",
        name: "Salto prateado",
        price: 280,
        imageUrl:
          "https://images.pexels.com/photos/3602449/pexels-photo-3602449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: "623064ee22376f1e6b869471",
    name: "accessories",
    displayName: "Acessorios",
    imageUrl:
      "https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: "6230655f22376f1e6b869473",
        name: "Oculos de sol",
        price: 200,
        imageUrl:
          "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "623065f422376f1e6b869488",
        name: "Oculos de grau",
        price: 300,
        imageUrl:
          "https://images.pexels.com/photos/2095953/pexels-photo-2095953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6230662e22376f1e6b86948e",
        name: "Baton",
        price: 350,
        imageUrl:
          "https://images.pexels.com/photos/90297/pexels-photo-90297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6230661122376f1e6b86948a",
        name: "Pinceis",
        price: 400,
        imageUrl:
          "https://images.pexels.com/photos/205923/pexels-photo-205923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6230661f22376f1e6b86948c",
        name: "Granpo",
        price: 300,
        imageUrl:
          "https://images.pexels.com/photos/1676126/pexels-photo-1676126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6230658322376f1e6b86947b",
        name: "Bracelete",
        price: 100,
        imageUrl:
          "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "623065b022376f1e6b869480",
        name: "Relogio",
        price: 200,
        imageUrl:
          "https://images.pexels.com/photos/15210883/pexels-photo-15210883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: "6228fdd8b7e6cb904bbe0162",
    name: "jeans",
    displayName: "Jeans",
    imageUrl:
      "https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    products: [
      {
        id: "6228fe63b7e6cb904bbe0165",
        name: "Calça Jeans",
        price: 150,
        imageUrl:
          "https://images.pexels.com/photos/1957154/pexels-photo-1957154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fec7b7e6cb904bbe016f",
        name: "Jaqueta Jeans",
        price: 150,
        imageUrl:
          "https://images.pexels.com/photos/7206287/pexels-photo-7206287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228ff71b7e6cb904bbe0175",
        name: "Shorts Jeans",
        price: 200,
        imageUrl:
          "https://images.pexels.com/photos/7121519/pexels-photo-7121519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228ff93b7e6cb904bbe0177",
        name: "Saia Jeans",
        price: 250,
        imageUrl:
          "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228fe80b7e6cb904bbe0168",
        name: "Jaqueta jeans cinza",
        price: 300,
        imageUrl:
          "https://images.pexels.com/photos/2116157/pexels-photo-2116157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228ff31b7e6cb904bbe0172",
        name: "Calça jeans escura",
        price: 200,
        imageUrl:
          "https://images.pexels.com/photos/10219553/pexels-photo-10219553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "62290014b7e6cb904bbe017c",
        name: "Calça Jeans Azul",
        price: 200,
        imageUrl:
          "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      },
      {
        id: "6228ffa5b7e6cb904bbe017a",
        name: "Calça jeans preta",
        price: 250,
        imageUrl:
          "https://images.pexels.com/photos/993874/pexels-photo-993874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: "6228f52eb7e6cb904bbe0111",
    name: "hats",
    displayName: "Chapéus",
    imageUrl:
      "https://images.unsplash.com/photo-1511231115599-3edad51208c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    products: [
      {
        id: "6228f5beb7e6cb904bbe0119",
        name: "Chapéu preto",
        price: 60,
        imageUrl:
          "https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f60bb7e6cb904bbe011f",
        name: "Chapéu Pôr do Sol",
        price: 100,
        imageUrl:
          "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "6228f6c8b7e6cb904bbe012c",
        name: "Gorro Vermelho",
        price: 90,
        imageUrl:
          "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
      },
      {
        id: "6228f5e8b7e6cb904bbe011d",
        name: "Chapéu Rock",
        price: 75,
        imageUrl:
          "https://images.pexels.com/photos/15160321/pexels-photo-15160321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f68eb7e6cb904bbe0125",
        name: "Chapéu Meia Noite",
        price: 110,
        imageUrl:
          "https://images.unsplash.com/photo-1514326005837-fb4791d25e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "6228f591b7e6cb904bbe0115",
        name: "Chapéu branco",
        price: 60,
        imageUrl:
          "https://images.pexels.com/photos/15054238/pexels-photo-15054238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: "6228f625b7e6cb904bbe0121",
        name: "Chapéu Vermelho Vibrante",
        price: 120,
        imageUrl:
          "https://images.unsplash.com/photo-1593476087123-36d1de271f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "6228f648b7e6cb904bbe0123",
        name: "Boné Cinza",
        price: 65,
        imageUrl:
          "https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    ],
  },
];

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, "categories"), category);
    })
  );
};

main().then(() => process.exit());
