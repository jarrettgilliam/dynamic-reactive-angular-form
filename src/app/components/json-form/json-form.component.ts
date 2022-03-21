import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface JsonFormData {
    controls: FormlyFieldConfig[] | undefined;
}

@Component({
    selector: 'app-json-form',
    templateUrl: './json-form.component.html',
    styleUrls: ['./json-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormComponent implements OnChanges {
    @Input() jsonFormData: JsonFormData | undefined;

    public myForm: FormGroup = this.fb.group({});

    constructor(private fb: FormBuilder) {
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    onSubmit() {
        console.log('Form valid: ', this.myForm.valid);
        console.log('Form values: ', this.myForm.value);
    }

}
