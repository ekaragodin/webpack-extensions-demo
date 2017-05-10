import {registerExtension} from 'core';

const extension1 = {
    run() {
        console.log('Extension1 is running.')
    }
};

registerExtension(extension1);
