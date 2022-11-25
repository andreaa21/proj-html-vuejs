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

    // MainFeatures

});