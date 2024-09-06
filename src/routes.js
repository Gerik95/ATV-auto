import { v4 as uuidv4 } from 'uuid';
import logo from "./logo.png";

export const routes = [

    {
        id: uuidv4(),
        title: 'VIN-подбор',
        route: '/shop',
        class: 'shops-link'
    },
    {
        id: uuidv4(),
        class: '',
        img: logo
    },
    {
        id: uuidv4(),
        title: 'Главная',
        route: '/',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'О нас',
        route: '/about',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'Контакты',
        route: '/contacts',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'Сотрудничество',
        route: '/cooperation',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'Шиномонтаж',
        route: '/tirefit',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'Автомойка',
        route: '/carwash',
        class: ''
    },
    {
        id: uuidv4(),
        title: 'Мотоборды',
        route: '/motoboard',
        class: 'motoboard-link'
    },
] 