export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Sasa',
            child: 'Nabilah Sana Imtinan',
            father: '(Alm.) Mulyadi',
            mother: 'Dahlia',
            image: './src/assets/images/cowo.jpeg'
        },
        P: {
            id: 2,
            name: 'Ramdan',
            child: 'Muhammad Ramdan',
            father: 'Sahlan',
            mother: 'Rohaeti',
            image: './src/assets/images/cewe.jpeg'
        },

        couple: './src/assets/images/3.jpeg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Mei',
            date: '30',
            day: 'Sabtu',
            hours: {
                start: '',
                finish: ''
            }
        },
        reception: {
            year: '',
            month: '',
            date: '',
            day: '',
            hours: {
                start: 'Pada Lokasi',
                finish: 'Berikut:'
            }
        },
        address: 'Kp. Cisasawi, RT 002/ RW 006, Kec.Parongpong, Kab.Bandung Barat, Jawa Barat'
    },

    link: {
        calendar: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MHVtNWpsa2VlMXJkM2QzNnFjaWYyZmZmazQgYWx3YXNpQHVwaS5lZHU&tmsrc=alwasi%40upi.edu',
        map: 'https://maps.app.goo.gl/iGE1ZqefF1jPdAwp6?g_st=aw',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpeg'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Muhammad Ramdan',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Muhammad Ramdan',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwLktTSD2T7dHylob50B2PatjeWR9OMiwZRrQ3-SRTqHtXMmFXNbL7K4aoBBR4Cq0T_/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
