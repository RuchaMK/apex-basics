import { LightningElement } from 'lwc';

export default class FirstLwcAPD extends LightningElement {
    msg='Please fill above details';
    inputCompanyName='';

    handlePreview(event){
        this.inputCompanyName = event.target.value;
        window.console.log(event.target);
    }
    handleSave(event){
        alert('**Saved**');
    }
}