const body = document.querySelector('body');
const header = document.createElement('header');
body.appendChild(header)
const h1 = document.querySelector('h1');
h1.id = 'principalTitle';
const imgLogo = document.createElement('img');
imgLogo.id = 'logo';
const h3Section = document.createElement('section');
h3Section.id = 'h3Section';
const h3 = document.createElement('h3');
h3.id = 'subTitle';
h3.textContent = '"Bienvenidos a Acevedo & Co. El epicentro del lujo relojero donde las leyendas como Audemars Piguet, Cartier, Hublot, Jacob & Co., Richard Mille y Rolex cobran vida. Sumérgete en un mundo de elegancia extrema, innovación pura y estilo que grita poder, perfecto para los que saben que el tiempo es arte y prestigio en cada tic-tac."'
imgLogo.src = 'assets/Logo_Relojeria.png';
header.appendChild(imgLogo);
header.appendChild(h1);
header.appendChild(h3Section);
h3Section.appendChild(h3);



const principalSection = document.querySelector('section');
principalSection.id = 'contanier';
body.appendChild(principalSection);

const filterSection = document.createElement('section');
filterSection.id = 'filterSection';
principalSection.appendChild(filterSection);

const productsWrapper = document.createElement('div');
productsWrapper.id = 'productsWrapper';
principalSection.appendChild(productsWrapper);


const input = document.createElement('input');
input.type = 'checkbox';
const label = document.createElement('label');
label.textContent = 'Todas las marcas';
filterSection.appendChild(label);
filterSection.appendChild(input);
const marcas = ['Audemars Piguet', 'Cartier', 'Hublot', 'Jacob And Co', 'Richard Mille', 'Rolex' ];
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
        category: "Audemars Piguet Royal Oak"
    },
    {
        name: "Audemars Piguet Royal Oak Concept Spiderman",
        price: "$180,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Concept_spiderman.png",
        category: "Audemars Piguet Royal Oak"
    },
    {
        name: "Audemars Piguet Royal Oak Concept",
        price: "$175,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Concept.png",
        category: "Audemars Piguet Royal Oak"
    },
    {
        name: "Audemars Piguet Royal Oak Black Panther White Gold",
        price: "$250,000",
        image: "assets/Watches/AP/audemars-piguet-Royal-Black-Panther-white-gold.jpg",
        category: "Audemars Piguet Royal Oak"
    },
    {
        name : "AAudemars Piguet Royal Oak Double Balance Wheel Openworked",
        price: "$150,000",
        image: "assets/Watches/AP/Audemars_Piguet_Royal_Oak_Double_Balance_Wheel_Openworked.png",
        category : "Audemars Piguet Royal Oak"
    },

    // --- Cartier ---
    {
        name: "Cartier Santos Aftermarket Diamonds",
        price: "$95,000",
        image: "assets/Watches/Cartier/Cartier_santos_Aftermarket_Diamonds.png",
        category: "Cartier"
    },
    {
        name: "Cartier Santos Circones Negro Tablero Dorado",
        price: "$90,000",
        image: "assets/Watches/Cartier/Cartier_Santos_Circones_Negro_Tablero_Dorado.png",
        category: "Cartier"
    },
    {
        name: "Cartier Santos Circones Negros",
        price: "$85,000",
        image: "assets/Watches/Cartier/cartier_santos_circones_negros.png",
        category: "Cartier"
    },

    // --- Hublot ---
    {
        name: "Hublot Big Bang Ferrari",
        price: "$130,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Ferrari.png",
        category: "Hublot"
    },
    {
        name: "Hublot Big Bang Meca-10",
        price: "$140,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Meca_10.png",
        category: "Hublot"
    },
    {
        name: "Hublot Big Bang Unico",
        price: "$135,000",
        image: "assets/Watches/Hublot/Hublot_Big_Bang_Unico.png",
        category: "Hublot"
    },
    {
        name: "Hublot Classic Fusion Chronograph",
        price: "$125,000",
        image: "assets/Watches/Hublot/Hublot_Classic_Fusion_Chronograph.png",
        category: "Hublot"
    },

    // --- Jacob & Co ---
    {
        name: "Jacob & Co Skull Double Tourbillion Gold",
        price: "$270,000",
        image: "assets/Watches/Jacob_And_Co/Skull_Double_Tourbillion_Gold.png",
        category: "Jacon And Co"
    },
    {
        name : "Billionaire III Limited Edition",
        price: "$1,000,000",
        image: "assets/Watches/Jacob_And_Co/Billionaire_III_Limited_Edition.png",
        category: "Jacon And Co"
    },
    {
        name : "Bugatti Chiron Tourbillon Blue",
        price: "$1,300,000",
        image: "assets/Watches/Jacob_And_Co/Bugatti_Chiron_Tourbillon_Blue.png",
        category: "Jacon And Co"
    },
    {
        name : "CR7 Rose Gold Limited Edition (2024)",
        price: "$650,000",
        image: "assets/Watches/Jacob_And_Co/CR7_Rose_Gold_Limited_Edition_(2024).png",
        category: "Jacon And Co"
    },
    {
        name : "Full Set Skeleton 44mm Titanium Sky Blue",
        price: "$550,000",
        image: "assets/Watches/Jacob_And_Co/Full_Set_Skeleton_44mm_Titanium_Sky_Blue.png",
        category: "Jacon And Co"
    },

    // --- Richard Mille ---
    {
        name: "RM11 03 Ultimate Edition",
        price: "$320,000",
        image: "assets/Watches/Richard_Mille/RM11_03_Ultimate_Edition.png",
        category: "Richard Mille"
    },
    {
        name: "Rm Factory Baguette Diamonds",
        price: "$315,000",
        image: "assets/Watches/Richard_Mille/Rm_Factory_Baguette_Diamonds.png",
        category: "Richard Mille"
    },
    {
        name: "Richard Mille RM 035",
        price: "$400,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_RM_035.png",
        category: "Richard Mille"
    },
    {
        name: "Richard Mille Bebé Azul Cerámica",
        price: "$380,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_RM_Bebé_Azul_Cerámica.png",
        category: "Richard Mille"
    },
    {
        name: "Richard Mille Tourbillon Rafael Nadal",
        price: "$450,000",
        image: "assets/Watches/Richard_Mille/Richard_Mille_Tourbillon_Rafael_Nadal.png",
        category: "Richard Mille"
    },

    // --- Rolex ---
    {
        name: "Rolex Datejust Chocolate",
        price: "$14,500",
        image: "assets/Watches/Rolex/Rolex_datejust_chocolate.png",
        category: "Rolex"
    },
    {
        name: "Rolex Datejust Limited",
        price: "$17,000",
        image: "assets/Watches/Rolex/Rolex_datejust_limited.png",
        category: "Rolex"
    },
    {
        name: "Rolex Daytona New Service",
        price: "$36,000",
        image: "assets/Watches/Rolex/Rolex_Daytona_New_Service.png",
        category: "Rolex"
    },
    {
        name: "Rolex Daytona Platinum Ice Blue",
        price: "$28,000",
        image: "assets/Watches/Rolex/Rolex_Daytona_Platinum_Ice_Blue.png",
        category: "Rolex"
    },
    {
        name: "Rolex GMT Master II Yellow Gold",
        price: "$55,000",
        image: "assets/Watches/Rolex/Rolex_GMT_Master_II_Yellow_Gold.png",
        category: "Rolex"
    },
    {
        name: "Rolex GMT Master II",
        price: "$45,000",
        image: "assets/Watches/Rolex/Rolex_GMT_Master_II.png",
        category: "Rolex"
    },
    {
        name: "Rolex Submariner Date",
        price: "$50,000",
        image: "assets/Watches/Rolex/Rolex_Submariner_Date.png",
        category: "Rolex"
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
    pButton = document.createElement('button');
    pButton.id = 'productsButton';
    pButton.textContent = "Buy Now";
    productsWrapper.appendChild(producsSection);
    producsSection.appendChild(image)
    producsSection.appendChild(h3);
    producsSection.appendChild(pPrice)
    producsSection.appendChild(pCategory)
    producsSection.appendChild(pButton);
}

const footer = document.createElement('footer');
const pFooter = document.createElement('p');
pFooter.id= 'pFooter';
footer.appendChild(pFooter);
body.appendChild(footer);

const Button = (icon, text, link) => {
  const button = document.createElement("button");
  button.className = "my-btn";
  
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  
  const img = document.createElement("img");
  img.src = icon;
  img.alt = `${text} icon`;
  
  const h4 = document.createElement("h4");
  h4.textContent = text;
  
  anchor.appendChild(img);
  anchor.appendChild(h4);
  button.appendChild(anchor);
  
  return button;
};

const Footer = () => {
  const footer = document.createElement("footer");
  
  const h2 = document.createElement("h2");
  h2.textContent = "Contact";
  
  const div = document.createElement("div");
  
  div.appendChild(Button(
    "./assets/icons/WhatsApp.png",
    "WhatsApp",
    "https://wa.me/34613159996"
  ));
  div.appendChild(Button(
    "./assets/icons/github.png",
    "GitHub",
    "https://github.com/sebas-1106"
  ));
  div.appendChild(Button(
    "./assets/icons/linkedin.png",
    "LinkedIn",
    "https://www.linkedin.com/in/sebastian-acevedo-ben%C3%ADtez-a3752732a/"
  ));
  div.appendChild(Button(
    "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    "Instagram",
    "https://www.instagram.com/sebas_ace1106/"
  ));
  
  const pFooter = document.createElement("p");
  pFooter.id = "pFooter";
  pFooter.textContent = "Copyright 2025. All rights reserved. Developed by Sebastian Acevedo Benítez.";
  
  footer.appendChild(h2);
  footer.appendChild(div);
  footer.appendChild(pFooter);
  
  return footer;
};
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(Footer());
});