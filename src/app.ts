import './assets/scss/index.scss';
import { simpleFunc } from './js/simple';

const greetings = (greeting: string): string => {
    console.log(greeting);
    return simpleFunc();
};

greetings('Enter TypeScript');

export { greetings };
