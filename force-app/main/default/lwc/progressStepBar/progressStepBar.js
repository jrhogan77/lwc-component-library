import { LightningElement, api } from 'lwc';

export default class ProgressStepBar extends LightningElement {
    @api stepLabels  = '';
    @api currentStep = 1;

    get steps() {
        const labels  = this.stepLabels ? this.stepLabels.split(',').map(s => s.trim()) : [];
        const current = Number(this.currentStep) || 1;
        return labels.map((label, index) => {
            const stepNum   = index + 1;
            const isComplete = stepNum < current;
            const isActive   = stepNum === current;
            return {
                label,
                isComplete,
                cssClass: [
                    'slds-progress__item',
                    isComplete ? 'slds-is-completed' : '',
                    isActive   ? 'slds-is-active'    : ''
                ].filter(Boolean).join(' ')
            };
        });
    }

    get progressPercent() {
        const total   = this.steps.length;
        const current = Number(this.currentStep) || 1;
        if (total === 0) return 0;
        return Math.min(Math.round(((current - 1) / total) * 100), 100);
    }

    get progressStyle() {
        return 'width:' + this.progressPercent + '%';
    }
}
