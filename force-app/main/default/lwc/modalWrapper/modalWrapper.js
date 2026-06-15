import { LightningElement, api } from 'lwc';

export default class ModalWrapper extends LightningElement {
    @api title        = 'Confirm';
    @api confirmLabel = 'Confirm';

    _isOpen = false;

    @api get isOpen() { return this._isOpen; }
    set isOpen(val)   { this._isOpen = (val === true || val === 'true'); }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }

    handleConfirm() {
        this.dispatchEvent(new CustomEvent('confirm'));
    }
}
