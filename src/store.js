import { reactive } from 'vue'

const store = reactive({
    items: [
        {
            name: 'Home',
            hover: true
        },
        {
            name: 'Pages',
            hover: false

        },
        {
            name: 'Courser',
            hover: false

        },
        {
            name: 'Features',
            hover: false

        },
        {
            name: 'Blog',
            hover: false

        },
        {
            name: 'Shop',
            hover: false

        }
    ],
    menuItems: [
        {
            valor: 'Start here'
        },
        {
            valor: 'Success Story'
        }, 
        {
            valor: 'About me'
        }
        , 
        {
            valor: 'About us 01'
        }
    ],
    address:[
        {
            position:'382 NE 191st St # 87394 Miami, FL 33179-3899'
        },
        {
            cell:'+1(305) 547-9909(9am - 5pm EST,Monday - Friday)'
        },
        {
            mail:'support@maxcoach.com'
        }
    ]



});

export default store