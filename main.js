const body = document.querySelector('body');
const header = document.createElement('header');
body.appendChild(header)
const h1 = document.querySelector('h1');
h1.id = 'principalTitle';
const imgLogo = document.createElement('img');
imgLogo.id = 'logo';
imgLogo.src = 'assets/Logo_Relojeria.png';
header.appendChild(imgLogo);
header.appendChild(h1)



const principalSection = document.querySelector('section');
principalSection.id = 'contanier';
body.appendChild(principalSection);

const filterSection = document.createElement('section');
filterSection.id = 'filterSection';
principalSection.appendChild(filterSection);

const productsWrapper = document.createElement('div');
productsWrapper.id = 'productsWrapper';
principalSection.appendChild(productsWrapper);

const marcas = ['Audemars Piguet', 'Cartier', 'Hublot', 'Jacob And Co', 'Richard_Mille', 'Rolex' ];
for (const element of marcas) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = element
    filterSection.appendChild(label);
    filterSection.appendChild(input);
}

const products = [
  // --- Audemars Piguet (AP) ---
    {
        name: "Audemars Piguet Royal Oak Chronograph",
        price: "$150,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Chronograph.png",
        category: "Watches"
    },
    {
        name: "Audemars Piguet Royal Oak Concept Spiderman",
        price: "$180,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Concept_spiderman.png",
        category: "Watches"
    },
    {
        name: "Audemars Piguet Royal Oak Concept",
        price: "$175,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Concept.png",
        category: "Watches"
    },
    {
        name: "Audemars Piguet Royal Oak Black Panther White Gold",
        price: "$250,000",
        image: "assets/Watches/AP/audemars-piguet-Royal-Black-Panther-white-gold.jpg",
        category: "Watches"
    },

    // --- Cartier ---
    {
        name: "Cartier Santos Aftermarket Diamonds",
        price: "$95,000",
        image: "assets/Watches/Cartier/Cartier_santos_Aftermarket_Diamonds.png",
        category: "Watches"
    },
    {
        name: "Cartier Santos Circones Negro Tablero Dorado",
        price: "$90,000",
        image: "assets/Watches/Cartier/Cartier_Santos_Circones_Negro_Tablero_Dorado.png",
        category: "Watches"
    },
    {
        name: "Cartier Santos Circones Negros",
        price: "$85,000",
        image: "assets/Watches/Cartier/cartier_santos_circones_negros.png",
        category: "Watches"
    },

    // --- Hublot ---
    {
        name: "Hublot Big Bang Ferrari",
        price: "$130,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Ferrari.png",
        category: "Watches"
    },
    {
        name: "Hublot Big Bang Meca-10",
        price: "$140,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Meca_10.png",
        category: "Watches"
    },
    {
        name: "Hublot Big Bang Unico",
        price: "$135,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Unico.png",
        category: "Watches"
    },
    {
        name: "Hublot Classic Fusion Chronograph",
        price: "$125,000",
        image: "assets/Watches/Hublot/Hublot_Classic_Fusion_Chronograph.png",
        category: "Watches"
    },

    // --- Jacob & Co ---
    {
        name: "Jacob & Co Skull Double Tourbillion Gold",
        price: "$270,000",
        image: "assets/Watches/Jacob_And_Co/Skull_Double_Tourbillion_Gold.webp",
        category: "Watches"
    },

    // --- Richard Mille ---
    {
        name: "Richard Mille Dragón Circones Negro Tablero Dorado",
        price: "$320,000",
        image: "assets/Watches/Richard_Mille/Richar_Mille_Dragón_Circones_Negro_Tablero_Dorado.png",
        category: "Watches"
    },
    {
        name: "Richard Mille Dragón Circones Blanco Tablero Dorado",
        price: "$315,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_Dragón_Circones_Blanco_Tablero_Dorado.png",
        category: "Watches"
    },
    {
        name: "Richard Mille RM 035",
        price: "$400,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_RM_035.png",
        category: "Watches"
    },
    {
        name: "Richard Mille Bebé Azul Cerámica",
        price: "$380,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_RM_Bebé_Azul_Cerámica.png",
        category: "Watches"
    },
    {
        name: "Richard Mille Tourbillon Rafael Nadal",
        price: "$450,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_Tourbillon_Rafael_Nadal.png",
        category: "Watches"
    },

    // --- Rolex ---
    {
        name: "Rolex Datejust Chocolate",
        price: "$70,000",
        image: "assets/Watches/Rolex/Rolex_datejust_chocolate.png",
        category: "Watches"
    },
    {
        name: "Rolex Datejust Limited",
        price: "$80,000",
        image: "assets/Watches/Rolex/Rolex_datejust_limited.png",
        category: "Watches"
    },
    {
        name: "Rolex Daytona New Service",
        price: "$110,000",
        image: "assets/Watches/Rolex/Rolex_Daytona_New_Service.png",
        category: "Watches"
    },
    {
        name: "Rolex Daytona Platinum Ice Blue",
        price: "$150,000",
        image: "assets/Watches/Rolex/Rolex_Daytona_Platinum_Ice_Blue.png",
        category: "Watches"
    },
    {
        name: "Rolex GMT Master II Yellow Gold",
        price: "$135,000",
        image: "assets/Watches/Rolex/Rolex_GMT_Master_II_Yellow_Gold.png",
        category: "Watches"
    },
    {
        name: "Rolex GMT Master II",
        price: "$132,000",
        image: "assets/Watches/Rolex/Rolex_GMT_Master_II.png",
        category: "Watches"
    },
    {
        name: "Rolex Submariner Date",
        price: "$120,000",
        image: "assets/Watches/Rolex/Rolex_Submariner_Date.png",
        category: "Watches"
    }
];
for (const product of products) {
    
        
    const producsSection = document.createElement('section');
    producsSection.className = 'productsSection';
    const h3 = document.createElement('h3');
    h3.textContent = product.name;
    h3.id = 'title';   
    const pPrice = document.createElement('p');
    pPrice.textContent = product.price;
    pPrice.id = 'price';
    const image = document.createElement('img');
    image.src = product.image;
    const pCategory = document.createElement('p');
    pCategory.textContent = product.category;
    pCategory.id = 'category';
    productsWrapper.appendChild(producsSection);
    producsSection.appendChild(image)
    producsSection.appendChild(h3);
    producsSection.appendChild(pPrice)
    
    producsSection.appendChild(pCategory)
}
