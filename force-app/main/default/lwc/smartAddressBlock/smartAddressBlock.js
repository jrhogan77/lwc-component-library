import { LightningElement, api } from 'lwc';

export default class SmartAddressBlock extends LightningElement {
    @api label    = 'Address';

    _required   = false;
    _street     = '';
    _city       = '';
    _state      = '';
    _postalCode = '';
    _country    = '';
    errorMessage = '';

    @api get required()    { return this._required; }
    set required(val)      { this._required = (val === true || val === 'true'); }

    @api get street()      { return this._street; }
    set street(val)        { this._street = val || ''; }

    @api get city()        { return this._city; }
    set city(val)          { this._city = val || ''; }

    @api get state()       { return this._state; }
    set state(val)         { this._state = val || ''; }

    @api get postalCode()  { return this._postalCode; }
    set postalCode(val)    { this._postalCode = val || ''; }

    @api get country()     { return this._country; }
    set country(val)       { this._country = val || ''; }

    get hasError() { return !!this.errorMessage; }

    handleChange(event) {
        const field = event.target.dataset.field;
        this['_' + field] = event.target.value;
        this.errorMessage = '';
        this.dispatchEvent(new CustomEvent('addresschange', {
            detail: {
                street:     this._street,
                city:       this._city,
                state:      this._state,
                postalCode: this._postalCode,
                country:    this._country
            }
        }));
    }

    @api validate() {
        if (this._required && !this._street) {
            this.errorMessage = 'Street address is required.';
            return false;
        }
        this.errorMessage = '';
        return true;
    }
}
