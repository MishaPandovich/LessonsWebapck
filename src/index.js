import AppService from './moduls/app.service.js';
import {config} from './moduls/consig.js';
import './moduls/header.component.js';

import './css/index.css';
import './scss/index.scss';

console.log(css);

console.log('Config key:', config.key);

const service = new AppService('Hello world!');

const pop = "1223";
