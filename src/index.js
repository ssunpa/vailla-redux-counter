import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';
const RESET = 'RESET';
number.innerText = 0;

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        case RESET:
            return (count = 0);
        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

const handelReset = () => {
    countStore.dispatch({ type: RESET });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
reset.addEventListener('click', handelReset);
