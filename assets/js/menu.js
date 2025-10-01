// Data Menu Sumbut Catering
const menuData = [
    // Menu Karyawan
    {
        id: 1,
        name: "Paket Karyawan A",
        category: "karyawan",
        categoryLabel: "Menu Karyawan",
        description: "Nasi putih, ayam goreng, tempe orek, sayur asem, sambal",
        price: "Rp 25.000",
        icon: "🍱",
        gradient: "from-pink-400 to-pink-600",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 2,
        name: "Paket Karyawan B",
        category: "karyawan",
        categoryLabel: "Menu Karyawan",
        description: "Nasi putih, rendang daging, tahu bacem, sayur lodeh, kerupuk",
        price: "Rp 28.000",
        icon: "🍱",
        gradient: "from-pink-400 to-pink-600",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 3,
        name: "Paket Karyawan C",
        category: "karyawan",
        categoryLabel: "Menu Karyawan",
        description: "Nasi putih, ikan goreng, perkedel, capcay, sambal",
        price: "Rp 26.000",
        icon: "🍱",
        gradient: "from-pink-400 to-pink-600",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 4,
        name: "Paket Karyawan D",
        category: "karyawan",
        categoryLabel: "Menu Karyawan",
        description: "Nasi putih, ayam bakar, telur balado, tumis kangkung, kerupuk",
        price: "Rp 27.000",
        icon: "🍱",
        gradient: "from-pink-400 to-pink-600",
        badgeColor: "pink",
        priceColor: "pink"
    },

    // Nasi Kotak
    {
        id: 5,
        name: "Nasi Kotak Premium A",
        category: "nasi-kotak",
        categoryLabel: "Nasi Kotak",
        description: "Nasi kuning, ayam goreng kremes, sambal goreng kentang, acar",
        price: "Rp 35.000",
        icon: "🍽️",
        gradient: "from-orange-400 to-orange-600",
        badgeColor: "orange",
        priceColor: "orange"
    },
    {
        id: 6,
        name: "Nasi Kotak Premium B",
        category: "nasi-kotak",
        categoryLabel: "Nasi Kotak",
        description: "Nasi putih, beef teriyaki, brokoli crispy, fruit salad",
        price: "Rp 40.000",
        icon: "🍽️",
        gradient: "from-orange-400 to-orange-600",
        badgeColor: "orange",
        priceColor: "orange"
    },
    {
        id: 7,
        name: "Nasi Kotak Tradisional",
        category: "nasi-kotak",
        categoryLabel: "Nasi Kotak",
        description: "Nasi liwet, ayam goreng lengkuas, sambal, lalapan, kerupuk",
        price: "Rp 32.000",
        icon: "🍽️",
        gradient: "from-orange-400 to-orange-600",
        badgeColor: "orange",
        priceColor: "orange"
    },
    {
        id: 8,
        name: "Nasi Kotak Spesial",
        category: "nasi-kotak",
        categoryLabel: "Nasi Kotak",
        description: "Nasi kebuli, ayam bumbu kecap, telur pindang, acar timun",
        price: "Rp 38.000",
        icon: "🍽️",
        gradient: "from-orange-400 to-orange-600",
        badgeColor: "orange",
        priceColor: "orange"
    },

    // Lunch Box
    {
        id: 9,
        name: "Lunch Box Praktis A",
        category: "lunch-box",
        categoryLabel: "Lunch Box",
        description: "Nasi putih, chicken katsu, salad, buah potong, air mineral",
        price: "Rp 30.000",
        icon: "🥡",
        gradient: "from-yellow-400 to-yellow-600",
        badgeColor: "yellow",
        priceColor: "yellow"
    },
    {
        id: 10,
        name: "Lunch Box Praktis B",
        category: "lunch-box",
        categoryLabel: "Lunch Box",
        description: "Nasi goreng spesial, ayam suwir, telur mata sapi, kerupuk",
        price: "Rp 28.000",
        icon: "🥡",
        gradient: "from-yellow-400 to-yellow-600",
        badgeColor: "yellow",
        priceColor: "yellow"
    },
    {
        id: 11,
        name: "Lunch Box Sehat",
        category: "lunch-box",
        categoryLabel: "Lunch Box",
        description: "Nasi merah, dada ayam panggang, sayur steam, buah segar",
        price: "Rp 35.000",
        icon: "🥡",
        gradient: "from-yellow-400 to-yellow-600",
        badgeColor: "yellow",
        priceColor: "yellow"
    },
    {
        id: 12,
        name: "Lunch Box Kids",
        category: "lunch-box",
        categoryLabel: "Lunch Box",
        description: "Nasi putih, nugget ayam, sosis, kentang goreng, jus buah",
        price: "Rp 25.000",
        icon: "🥡",
        gradient: "from-yellow-400 to-yellow-600",
        badgeColor: "yellow",
        priceColor: "yellow"
    },

    // Event
    {
        id: 13,
        name: "Paket Prasmanan 50 Pax",
        category: "event",
        categoryLabel: "Event",
        description: "5 menu utama, 3 sayur, 2 sambal, buah, minuman. Cocok untuk acara kantor",
        price: "Rp 150.000/pax",
        icon: "🎉",
        gradient: "from-pink-500 to-orange-500",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 14,
        name: "Paket Buffet Wedding",
        category: "event",
        categoryLabel: "Event",
        description: "Menu lengkap pernikahan, 8 menu utama, soup, dessert, welcome drink",
        price: "Rp 200.000/pax",
        icon: "🎉",
        gradient: "from-pink-500 to-orange-500",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 15,
        name: "Paket Syukuran",
        category: "event",
        categoryLabel: "Event",
        description: "Nasi tumpeng komplit, lauk pauk lengkap, minimum 30 porsi",
        price: "Rp 2.500.000",
        icon: "🎉",
        gradient: "from-pink-500 to-orange-500",
        badgeColor: "pink",
        priceColor: "pink"
    },
    {
        id: 16,
        name: "Paket Seminar/Rapat",
        category: "event",
        categoryLabel: "Event",
        description: "Snack box, coffee break, lunch box. Paket lengkap acara formal",
        price: "Rp 80.000/pax",
        icon: "🎉",
        gradient: "from-pink-500 to-orange-500",
        badgeColor: "pink",
        priceColor: "pink"
    }
];