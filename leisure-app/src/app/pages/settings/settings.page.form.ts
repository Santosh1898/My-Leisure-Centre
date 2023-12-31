import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class SettingsPageForm {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
}