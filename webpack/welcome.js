"use strict";

export default function(message) {

    if(NODE_ENV == 'development') {
        console.log('1');
    }

    alert(`Welcome ${message}`);

}