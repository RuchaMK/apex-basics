import { LightningElement } from 'lwc';

export default class Lds extends LightningElement {
    hanldeError(){
        alert('Error');
    }
    handleSuccess(){
        alert('Success');
    }
    handleSubmit(){
        alert('Submit');
    }
}