import { reactive } from 'vue';

export const store = reactive({
    openHours: 'Mon-Sat-9:00-18:00',
    phoneNumber: '+39 123456775',
    email: 'hello@example.com',
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
    ]
});