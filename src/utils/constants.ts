import ContactsOutlined from '@ant-design/icons/lib/icons/ContactsOutlined';
import MailOutlined from '@ant-design/icons/lib/icons/MailOutlined';
import NumberOutlined from '@ant-design/icons/lib/icons/NumberOutlined';
import PhoneOutlined from '@ant-design/icons/lib/icons/PhoneOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';

export const navigationItems = [
    {
        id: 1,
        title: 'Landing',
        route: '/',
    },
    {
        id: 2,
        title: 'Users',
        route: '/users',
    },
    {
        id: 3,
        title: 'Form G',
        route: '/form-generator',
    },
    {
        id: 4,
        title: 'Page G',
        route: '/page-generator',
    },
];

export const userDetail = [
    {
        id: 1,
        property: 'id',
        icon: NumberOutlined,
    },
    {
        id: 2,
        property: 'name',
        icon: UserOutlined,
    },
    {
        id: 3,
        property: 'username',
        icon: ContactsOutlined,
    },
    {
        id: 4,
        property: 'email',
        icon: MailOutlined,
    },
    {
        id: 5,
        property: 'phone',
        icon: PhoneOutlined,
    },
];
