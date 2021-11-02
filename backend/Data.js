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
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 10,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        },

        {
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 20,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        },

        {
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 0,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        },

        {
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 15,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        },

        {
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 14,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        },

        {
            
            name: 'medical Supplies',
            category: 'Medicine_things',
            image: '/images/p_1.png',
            price: 150,
            countInStock: 9,
            brand: 'Moizzeralla',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality and important Medicine for you'
        }
    ]
}

export default prodData;