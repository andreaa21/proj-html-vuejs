import { reactive } from 'vue';

export const store = reactive({
    openHours: 'Mon-Sat-9:00-18:00',
    phoneNumber: '+39 123456775',
    email: 'hello@example.com',
    socials: [
        {
            icon: '',
            href: '#'
        },
        {
            icon: '<fa-brands fa-twitter-f',
            href: '#'
        },
        {
            icon: '<fa-brands fa-linkedin-in',
            href: '#'
        }
    ]
});