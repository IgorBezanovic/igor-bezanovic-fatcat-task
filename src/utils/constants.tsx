import ContactsOutlined from '@ant-design/icons/lib/icons/ContactsOutlined';
import MailOutlined from '@ant-design/icons/lib/icons/MailOutlined';
import NumberOutlined from '@ant-design/icons/lib/icons/NumberOutlined';
import PhoneOutlined from '@ant-design/icons/lib/icons/PhoneOutlined';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';

declare const __CWD__: string;
export const vscodeProjectLink = `vscode://file/${__CWD__}`;

export const cards = [
    {
        title: 'Transfer the project to TypeScript',
        text: 'Your first task involves transitioning this project from JavaScript to TypeScript.',
        link: vscodeProjectLink,
    },
    {
        title: 'Create a scalable List Component',
        text: 'Build a scalable React component to fetch and display key information (id, name, username, email, and phone) from an API in a list format.',
        link: vscodeProjectLink,
    },
    {
        title: 'Create a Form Generator Component',
        text: 'Build a versatile React component with validation, API hook, and form rendering capabilities. ',
        link: vscodeProjectLink,
    },
    {
        title: 'Create a Page Generator Component',
        text: 'Create a versatile React component for dynamic webpage construction, adapting to various layouts and components through received props.',
        link: vscodeProjectLink,
    },
];

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
        title: 'Gen page 1',
        route: '/page-generator-one',
    },
    {
        id: 5,
        title: 'Gen page 2',
        route: '/page-generator-two',
    },
];

export const userDetails = [
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

export const images = [
    'media/cats/cat_1.png',
    'media/cats/cat_2.png',
    'media/cats/cat_3.png',
    'media/cats/cat_4.png',
    'media/cats/cat_5.png',
    'media/cats/cat_6.png',
    'media/cats/cat_7.png',
    'media/cats/cat_8.png',
    'media/cats/cat_9.png',
    'media/cats/cat_10.png',
];

export const hiringWorldwideItems = [
    {
        id: 1,
        amount: '5',
        sign: '+',
        description: 'Years in the market',
    },
    {
        id: 2,
        amount: '50',
        sign: '+',
        description: 'Launched products',
    },
    {
        id: 3,
        amount: '150',
        sign: '+',
        description: 'Hired candidates',
    },
    {
        id: 4,
        amount: '20K',
        sign: '+',
        description: 'Candidates in the pool',
    },
];
