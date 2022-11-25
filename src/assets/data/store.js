import { reactive } from 'vue';

export const store = reactive({
    // Header
    openHours: 'Mon-Sat-9:00-18:00',
    phoneNumber: '+39 123456775',
    email: 'hello@example.com',

    // Jumbotron
    jumboOptions: [
        {
            text: 'home',
            href: '#',
            isActive: false
        },
        {
            text: 'about',
            href: '#',
            isActive: false
        },
        {
            text: 'projects',
            href: '#',
            isActive: false
        },
        {
            text: 'process',
            href: '#',
            isActive: true
        },
        {
            text: 'testimonials',
            href: '#',
            isActive: false
        },
    ],
    jumboText: {
        smallTitle: 'human resources',
        bigTitle: 'get more productivity',
        par: 'Planning, recruitment and selection process and performance evaluation of employees.'
    },

    // MainFeatures Component

    cards: [
        {

            icon: 'icona',
            cardTitle: 'human capital',
            cardText: "Humanizing business: Harness the power of technology to improve the way way people work.",
        },
        {

            icon: 'icona',
            cardTitle: 'core business',
            cardText: "It takes innovative approaches to transform, modernize, and run existing platforms.",
        },
        {

            icon: 'icona',
            cardTitle: 'performance',
            cardText: "Achieving maximum impact and value from investments in finance and supply chain."
        }
    ],


    // MainCompany

    MainCompanyText: {
        mcSmallTitle: 'about the network',
        mcBigTitle: 'the company',
        mcPar: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, possimus!'
    }
});






