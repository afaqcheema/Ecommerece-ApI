let user = [
  {
    "name": "Afaq Ahmed Cheema",
    "mobNumber": "03225707434",
    "age": 25,
    "dob": "08-05-1999",
    "email": "afaq742@gmail.com",
    "password": "12345",
    "address": {
      "address1": "Ward no 7 House no 1171",
      "address2": "Cantt",
      "city": "Sialkot",
      "state": "Punjab",
      "zipCode": "15013"
    },
    "language": [
      "English",
      "Urdu",
      "Spanish"
    ],
    "gender": "Male",
    "aboutYou": "I am a Developer...",
    "uploadPhoto": "afaq.png",
    "agreetc": true,
    "role": "buyer",
    "id": "1"
  },
  {
    "name": "Afaq Ahmed Cheema",
    "mobNumber": "03225707434",
    "age": 25,
    "dob": "08-05-1999",
    "email": "ahmed742@gmail.com",
    "password": "12345",
    "address": {
      "address1": "Ward no 7 House no 1171",
      "address2": "Cantt",
      "city": "Sialkot",
      "state": "Punjab",
      "zipCode": "15013"
    },
    "language": [
      "English",
      "German",
      "Spanish"
    ],
    "gender": "Male",
    "aboutYou": "I am a Developer...",
    "uploadPhoto": "afaq.png",
    "agreetc": true,
    "role": "seller",
    "id": "2"
  },
  {
    "name": "Afaq Ahmed Cheema",
    "mobNumber": "03225707434",
    "age": 25,
    "dob": "08-05-1999",
    "email": "afaqahmed742@gmail.com",
    "password": "12345",
    "address": {
      "address1": "Ward no 7 House no 1171",
      "address2": "Cantt",
      "city": "Sialkot",
      "state": "Punjab",
      "zipCode": "15013"
    },
    "language": [
      "English",
      "German",
      "Spanish"
    ],
    "gender": "Male",
    "aboutYou": "I am a Developer...",
    "uploadPhoto": "afaq.png",
    "agreetc": true,
    "role": "admin",
    "id": "3"
  }
];

let products = [
    {
      "id": 1,
      "name": "Rolex",
      "uploadPhoto": "../assets/pexels-antony-trivet-9982020.jpg",
      "productDesc": "The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.",
      "mrp": "$1000",
      "dp": "$499",
      "status": "publish"
    },
    {
      "id": 2,
      "name": "Air-King",
      "uploadPhoto": "../assets/pexels-fernando-arcos-190819.jpg",
      "productDesc": "The Air King features a distinctive black dial with a combination of large 3, 6 and 9 numerals marking the hours and a prominent minutes scale for navigational time readings. It bears the name “Air King” since the watch's launch in lettering that makes the model easily identifiable.",
      "mrp": "$9000",
      "dp": "$599",
      "status": "publish"
    },
    {
      "id": 3,
      "name": "Cartier",
      "uploadPhoto": "../assets/pexels-jatin-anand-128206.jpg",
      "productDesc": "Cartier is a French luxury goods brand that designs and manufactures high-end watches and jewelry. Of all the great fashion and jewelry design houses in the world, few have reached the level of Cartier.",
      "mrp": "$11000",
      "dp": "$799",
      "status": "publish"
    },
    {
      "id": 4,
      "name": "Ballon Bleu",
      "uploadPhoto": "../assets/pexels-luke-miller-14569229.jpg",
      "productDesc": "The Ballon Bleu de Cartier watchWith soft curves reminiscent of a pebble and a case that is rounded on both sides, the style is somewhere between classic and futuristic. The glass magnifies the numbers and distortstime. The Roman numerals, displaced by the winding mechanism, stray from their usual path.",
      "mrp": "$7000",
      "dp": "$899",
      "status": "inactive"
    },
    {
      "id": 5,
      "name": "Philippe",
      "uploadPhoto": "../assets/pexels-mat-brown-1034063.jpg",
      "productDesc": "Patek Philippe SA (French: [paˈtɛk fiˈlip]) is a Swiss luxury watch and clock manufacturer, located in the Canton of Geneva and the Vallée de Joux. Established in 1839, it is named after two of its founders, Antoni Patek and Adrien Philippe.",
      "mrp": "1000",
      "dp": "499",
      "status": "inactive"
    },
    {
      "id": 6,
      "name": "Breitling",
      "uploadPhoto": "../assets/pexels-quang-viet-nguyen-13703305.jpg",
      "productDesc": "Breitling SA (German pronunciation: [ˈbraɪtlɪŋ]) is a Swiss luxury watchmaker founded in 1884 in Saint-Imier, Switzerland, by Léon Breitling. The company is known for its precision-made chronometers designed for aviators and is based in Grenchen, Switzerland.",
      "mrp": "1000",
      "dp": "499",
      "status": "draft"
    }
  ];

  // const secretKey = "secretKey";

  exports.useradd = (req, res) => {
    const newMessage = req.body;
    newMessage.id = user.length + 1;
    user.push(newMessage);
    res.status(201).json(newMessage);
  };

  exports.userget = (req, res) => {
    const {email, password} = req.body;
    const user = user.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Sign in successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

  exports.getMessages = (req, res) => {
    res.json(products);
  };

  exports.getMessage = (req, res) => {
    const id = parseInt(req.params.id);
    const message = products.find(m =>m.id ===id);
    if(message) {
        res.json(message);
    } else {
        res.status(404).json({message: 'Message not found'});
    }
  };

  exports.addMessage = (req, res) => {
    const newMessage = req.body;
    newMessage.id = products.length + 1;
    products.push(newMessage);
    res.status(201).json(newMessage);
  };

  exports.updateMessage = (req, res) => {
    const id = parseInt(req.params.id);
    const updateMessage = req.body;
    const index = products.findIndex(m =>m.id ===id);
    if(index !== -1) {
        products[index] = updateMessage;
        res.json(updateMessage);
    } else {
        res.status(404).json({message: 'Message not found'});
    }
  };

  exports.deleteMessage =(req, res) => {
    const id =parseInt(req.params.id);
    const index = products.findIndex(m =>m.id ===id);
    if (index !== -1) {
        products.splice(index, 1);
        res.json({message: 'Message deleted successfully'});
    } else {
        res.status(404).json({message: 'Message not found'});
    }
  };


  // exports.jwtPost = (req, res) => {
  //   const user = {
  //     id: 1,
  //     username: "afaqG",
  //     email: "afaqG@gmail.com"
  //   }
  //   jwt.sign({user}, secretKey, {expireIn: '300s'}, (err, token) => {
  //     res.json({
  //       token
  //     })
  //   })
  // };