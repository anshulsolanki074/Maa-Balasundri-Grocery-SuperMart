import type { ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fresh-fruits',
    name: 'Fresh Fruits',
    hindiName: 'ताज़े फल',
    description: 'Crisp, seasonal, and farm-fresh fruits hand-selected for natural sweetness and everyday nutrition.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Apples, Bananas, Oranges, Pomegranates & Seasonal Fruits',
    popularItems: ['Shimla Apples', 'Robusta Bananas', 'Nagpur Oranges', 'Fresh Pomegranates', 'Seasonal Papaya', 'Grapes & Guavas'],
    featuredBrands: ['Farm Fresh Daily', 'Selected Local Orchards'],
    badge: 'Farm Fresh'
  },
  {
    id: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    hindiName: 'हरी व ताज़ी सब्जियाँ',
    description: 'Daily garden vegetables, root crops, leafy greens, and cooking essentials restocked regularly.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Potatoes, Onions, Tomatoes, Greens & Seasonal Sabzi',
    popularItems: ['Pahadi Potatoes', 'Nashik Red Onions', 'Hybrid Tomatoes', 'Ginger & Garlic', 'Green Chillies & Coriander', 'Fresh Cauliflower & Peas'],
    featuredBrands: ['Daily Fresh Harvest'],
    badge: 'Daily Restock'
  },
  {
    id: 'dairy-products',
    name: 'Dairy Products',
    hindiName: 'डेयरी उत्पाद व दूध',
    description: 'Fresh milk pouches, paneer, curd, rich butter, ghee, and dairy delights stored in optimal cold storage.',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Milk, Curd, Fresh Paneer, Pure Desi Ghee & Butter',
    popularItems: ['Amul Taaza & Gold Milk', 'Fresh Malai Paneer', 'Amul Salted & Unsalted Butter', 'Mother Dairy Curd', 'Pure Cow & Buffalo Ghee', 'Cheese Slices & Cubes'],
    featuredBrands: ['Amul', 'Mother Dairy', 'Verka', 'Vita'],
    badge: 'Chilled & Pure'
  },
  {
    id: 'snacks-namkeen',
    name: 'Snacks & Namkeen',
    hindiName: 'नमकीन, बिस्कुट व स्नैक्स',
    description: 'An extensive variety of crunchy namkeen, savory bhujia, premium biscuits, chips, and tea-time snacks.',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Chips, Bhujia, Cream Biscuits, Cookies & Rusks',
    popularItems: ['Bingo Tedhe Medhe', 'Haldiram Aloo Bhujia', 'Parle-G & Monaco', 'Britannia Good Day & Bourbon', 'Bikaji Navratna Mix', 'Bakery Rusks & Toast'],
    featuredBrands: ['Haldirams', 'Bikaji', 'Bingo', 'Parle', 'Britannia'],
    badge: 'Best Seller'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    hindiName: 'कोल्ड ड्रिंक्स, जूस व चाय',
    description: 'Chilled soft drinks, fruit juices, flavored syrups, energy drinks, and premium tea and coffee blends.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Cold Drinks, Fruit Juices, Mineral Water & Tea/Coffee',
    popularItems: ['Sprite & Coca-Cola Chilled', 'Frooti & Maaza Mango Drink', 'Real Fruit Power Juices', 'Tata Tea Premium & Gold', 'Nescafe Classic Coffee', 'Bisleri & Kinley Mineral Water'],
    featuredBrands: ['Coca-Cola', 'Sprite', 'Frooti', 'Tata Tea', 'Nescafe'],
    badge: 'Chilled Shelf'
  },
  {
    id: 'rice-dal-pulses',
    name: 'Rice, Dal & Pulses',
    hindiName: 'चावल, दाल व दलहन',
    description: 'High-purity whole dals, polished & unpolished pulses, long-grain basmati rice, and everyday varieties.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Basmati Rice, Toor Dal, Moong, Chana & Rajma',
    popularItems: ['India Gate Basmati Rice', 'Pundir Special Basmati Rice', 'Yellow Arhar / Toor Dal', 'Moong Dhuli & Chilka Dal', 'Dehraduni Rajma', 'Kabuli & Kala Chana'],
    featuredBrands: ['India Gate', 'Fortune', 'Tata Sampann', 'Loose Store Packets'],
    badge: 'Pure & Unpolished'
  },
  {
    id: 'atta-flour',
    name: 'Atta & Flour',
    hindiName: 'आटा, मैदा व सूजी',
    description: '100% whole wheat chakki fresh atta, multi-grain varieties, maida, sooji, besan, and traditional grains.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Chakki Fresh Atta, Multigrain, Besan, Sooji & Maida',
    popularItems: ['Aashirvaad Shudh Chakki Atta', 'Fortune Chakki Fresh Atta', 'Rajdhani Besan & Sooji', 'Silver Coin Maida', 'Makki & Jowar Seasonal Atta', 'Poha & Dalia'],
    featuredBrands: ['Aashirvaad', 'Fortune', 'Rajdhani', 'Nature Fresh'],
    badge: '100% Whole Grain'
  },
  {
    id: 'spices-masala',
    name: 'Spices & Masala',
    hindiName: 'मसाले व तड़का सामग्री',
    description: 'Aromatic whole spices, pure powdered masalas, recipe blends, and tadka essentials for rich home meals.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Turmeric, Red Chilli, Garam Masala & Whole Khada Masala',
    popularItems: ['Catch Turmeric & Red Chilli Powder', 'MDH Garam & Chana Masala', 'Everest Sabji & Kitchen King', 'Tata Sampann Coriander Powder', 'Whole Cardamom, Cloves & Cinnamon', 'Cumin (Jeera) & Mustard Seeds'],
    featuredBrands: ['Catch', 'MDH', 'Everest', 'Tata Sampann'],
    badge: 'Aromatic'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    hindiName: 'पर्सनल केयर व स्वच्छता',
    description: 'Trusted personal hygiene products, soaps, shampoos, toothpastes, skincare lotions, and grooming items.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Soaps, Shampoos, Oral Care, Skin Lotions & Creams',
    popularItems: ['Dettol & Lifebuoy Soaps', 'Lux & Dove Beauty Bars', 'Colgate & Sensodyne Toothpaste', 'Head & Shoulders / Clinic Plus Shampoo', 'Nivea & Vaseline Body Lotions', 'Gillette Shaving Essentials'],
    featuredBrands: ['Dettol', 'Lux', 'Dove', 'Colgate', 'P&G', 'Hindustan Unilever'],
    badge: 'Trusted Brands'
  },
  {
    id: 'household-essentials',
    name: 'Household Essentials',
    hindiName: 'घरेलू सफाई व उपयोग सामग्री',
    description: 'Detergents, floor cleaners, dishwashing soaps, trash bags, mosquito repellents, and cleaning aids.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Detergents, Dishwash, Floor Cleaners & Disinfectants',
    popularItems: ['Surf Excel & Ariel Detergents', 'Vim Dishwash Bar & Gel', 'Lizol Floor Disinfectant', 'Harpic Toilet Cleaner', 'All Out & Good Knight Refills', 'Brooms, Mops & Cleaning Cloths'],
    featuredBrands: ['Surf Excel', 'Lizol', 'Vim', 'Harpic', 'Ariel'],
    badge: 'Clean Home'
  },
  {
    id: 'packaged-foods',
    name: 'Packaged Foods',
    hindiName: 'पैकेज्ड व इंस्टेंट फूड्स',
    description: 'Instant noodles, ketchups, spreads, jams, ready-to-cook mixes, pasta, breakfast cereals, and soups.',
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Maggi Noodles, Ketchups, Jams, Cornflakes & Pasta',
    popularItems: ['Maggi 2-Minute Noodles', 'Kissan Fresh Tomato Ketchup', 'Kissan Mixed Fruit Jam', "Kellogg's Corn Flakes & Chocos", 'Del Monte / Bambino Pasta & Vermicelli', 'Nutella & Peanut Butter'],
    featuredBrands: ['Nestlé', 'Kissan', 'Kellogg’s', 'Bambino', 'Del Monte'],
    badge: 'Quick & Tasty'
  },
  {
    id: 'daily-needs',
    name: 'Daily Needs',
    hindiName: 'दैनिक जरूरतें व पूजा सामग्री',
    description: 'Sugar, salt, edible oils, pooja essentials, matchboxes, batteries, foil rolls, and miscellaneous daily items.',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    itemCountDesc: 'Cooking Oils, Sugar, Salt, Pooja Items & Kitchen Wraps',
    popularItems: ['Fortune Mustard Oil & Refined Oil', 'Tata Salt Vacuum Evaporated', 'Refined Crystal Sugar (Khand / Cheeni)', 'Pure Ghee Diyas & Agarbatti', 'Freshwrap Aluminium Foil', 'Matchboxes, Candles & Batteries'],
    featuredBrands: ['Fortune', 'Tata Salt', 'Dhara', 'Mangaldeep', 'Cycle Pure'],
    badge: 'Daily Must-Have'
  }
];
