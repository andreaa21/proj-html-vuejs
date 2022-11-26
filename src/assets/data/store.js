import { reactive } from 'vue';

export const store = reactive({
    // Info
    openHours: 'Mon-Sat-9:00-18:00',
    phoneNumber: '+39 123456775',
    email: 'hello@example.com',
    address: 'Main Avenue, 987',

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

            icon: 'user-group',
            cardTitle: 'human capital',
            cardText: "Humanizing business: Harness the power of technology to improve the way way people work.",
        },
        {

            icon: 'pie-chart',
            cardTitle: 'core business',
            cardText: "It takes innovative approaches to transform, modernize, and run existing platforms.",
        },
        {

            icon: 'gauge-high',
            cardTitle: 'performance',
            cardText: "Achieving maximum impact and value from investments in finance and supply chain."
        }
    ],


    // MainCompany

    Mini_Cards: [
        {
            mini_number: '0',
            mini_title: 'employees',
            mini_text: 'Lorem ipsum, dolor sit amet'
        },
        {
            mini_number: '0',
            mini_title: 'Partners',
            mini_text: 'Lorem ipsum, dolor sit amet'
        },
        {
            mini_number: '0',
            mini_title: 'Customers',
            mini_text: 'Lorem ipsum, dolor sit amet'
        }
    ],

    // MainActions

    actionText: {
        actionSmallTitle: 'we do more for everyone',
        actionBigTitle: 'actions & projects'
    },

    actionList: [
        {
            text: 'all',
            href: '#',
            isActive: true
        },
        {
            text: 'institutional',
            href: '#',
            isActive: false
        },
        {
            text: 'social',
            href: '#',
            isActive: false
        },
        {
            text: 'events',
            href: '#',
            isActive: false
        },
        {
            text: 'innovation',
            href: '#',
            isActive: false
        },
        {
            text: 'environment',
            href: '#',
            isActive: false
        },
        {
            text: 'technology',
            href: '#',
            isActive: false
        }
    ],

    actionCards: [
        {
            action_text: 'Academic professional program in social media',
            action_bg: 'project-1.jpg'
        },
        {
            action_text: "President'\s speech at the annual meeting",
            action_bg: 'project-2.jpg'
        },
        {
            action_text: 'International business trip in Shanghai',
            action_bg: 'project-3.jpg'
        },
        {
            action_text: 'Technology workshop with education theme',
            action_bg: 'project-4.jpg'
        },
        {
            action_text: 'Donation of clothes and food to the partner NGO',
            action_bg: 'project-5.jpg'
        },
        {
            action_text: 'Confraternization of the procurement team',
            action_bg: 'project-6.jpg'
        }
    ],


    // MainFeedback

    FeedbackCards: [
        {
            img: 'logo-1.png',
            longText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi quo voluptatem distinctio unde est! Tenetur, illo.',
            shortText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            img: 'logo-2.png',
            longText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi quo voluptatem distinctio unde est! Tenetur, illo.',
            shortText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            img: 'logo-3.png',
            longText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eligendi quo voluptatem distinctio unde est! Tenetur, illo.',
            shortText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ],


    // FeatureItem

    ProcessItems: [
        {
            F_number: '01',
            F_Title: 'Collection of information',
            F_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            F_number: '02',
            F_Title: 'Strategic planning',
            F_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            F_number: '03',
            F_Title: 'Assignement of responsibilities',
            F_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            F_number: '04',
            F_Title: 'Formatting process',
            F_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            F_number: '05',
            F_Title: 'Continuity formalization',
            F_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ]
});






