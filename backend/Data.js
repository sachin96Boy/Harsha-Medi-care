import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const bcrypt = require('bcrypt');
const saltRounds = 10;

const prodData = {
    users:[
        {
            username:'sachin',
            email:'sachin@gmail.com',
            password: bcrypt.hashSync('Asdf1234', saltRounds),
            isAdmin:false
        },
        {
            username:'Dinoj',
            email:'dinoj@gmail.com',
            password: bcrypt.hashSync('dinoj1996', saltRounds),
            isAdmin:true
        }
    ],
    products:[
        {
            
            name: "Accu-Chek Active Test Strips 50's",
            category: 'Diabetics',
            image: 'https://i.ibb.co/sHN5cGc/accu-chek-active-test-strips-50s-0-1.png',
            price: 150,
            countInStock: 10,
            brand: 'ACCU-CHECK',
            rating: 4.5,
            numReviews: 10,
            description: 'Accu-Chek Active strip is a hassle-free easy to use the product. Not require any kind of manual coding. Determination of glucose in fresh capillary blood by reflectance photometry technology'
        },

        {
            
            name: "Onetouch Select Test Strip 50's",
            category: 'Diabetics-wellness',
            image: 'https://i.ibb.co/y4LpS16/onetouch-select-test-strip-50s-0-4.png',
            price: 160,
            countInStock: 20,
            brand: 'ONETOUCH',
            rating: 4.4,
            numReviews: 11,
            description: 'These test strips from OneTouch are used for testing blood glucose. The test strips are used with the blood glucose monitoring system for measuring the level of sugar in the capillary blood vessels.'
        },

        {
            
            name: "Dabur Glycodab Tablet 60's",
            category: 'diabetics-medicine-tablets',
            image: 'https://i.ibb.co/8NXGPC7/dabur-glycodab-tablet-60-s-0.jpg',
            price: 175,
            countInStock: 0,
            brand: 'DABUR',
            rating: 4.9,
            numReviews: 56,
            description: 'Dabur Glycodab has been developed taking extracts of AYUSH 82 herbs and formulated in tablet as a convenient dosage form. It is 100 percent ayurvedic which helps to manage healthy living. It is an ayurvedic medicine for controlling and regulating blood glucose levels.'
        },

        {
            
            name: "Nestle Resource Diabetic Powder - Vanilla Flavour 400 gm (Pet Jar)",
            category: 'dIABETICS-WELLNESS-POWDER',
            image: 'https://i.ibb.co/YfwV7cM/nestle-resource-diabetic-powder-vanilla-flavour-400-gm-pet-jar-0-1.png',
            price: 170,
            countInStock: 15,
            brand: 'NESTLE',
            rating: 4.4,
            numReviews: 14,
            description: 'Resource Diabetic is a low GI formula intended for the dietary management of individuals with Diabetes.'
        },

        {
            
            name: "Sri Sri Tattva Flaxseed Oil Veg Capsule 30's",
            category: 'diabetics-wellness-capsues',
            image: 'https://i.ibb.co/HCZhbNF/sri-sri-tattva-flaxseed-oil-veg-capsule-30-s-0.jpg',
            price: 110,
            countInStock: 14,
            brand: 'SRISRI',
            rating: 3.5,
            numReviews: 16,
            description: "Flaxseeds or Atasi are one of nature's richest source of Omega 3,6&9 fatty acids, highly beneficial for overall well being of the body. Unlike other sources of Omega 3,6&9, our product is 100% Vegetarian."
        },

        {
            
            name: "Hepa Pro Mixed Fruit Powder 200 gm",
            category: 'stomache',
            image: 'https://i.ibb.co/xzPgt4L/hepa-pro-mixed-fruit-powder-200-gm-0.jpg',
            price: 450,
            countInStock: 45,
            brand: 'BRITISH BIOLOGICALS',
            rating: 3.8,
            numReviews: 14,
            description: 'Hepa Pro is a scientifically formulated well balanced nutritional supplement for liver disorders. Hepa Pro provides Liver-specific nutrients like S-Adenosyl methionine (SAMe), Choline, Taurine, etc. Hepa Pro improves liver functions and liver cell regeneration, detoxification, and lipotropic action. It also improves bile flow and prevents muscle protein catabolism in liver disorder patients. The macronutrients in Hepa Pro offer high energy to help meet energy demands.'
        }
    ]
}

export default prodData;