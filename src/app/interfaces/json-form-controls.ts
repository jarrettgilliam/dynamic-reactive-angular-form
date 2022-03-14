import { JsonFormControlOptions } from './json-form-control-options';
import { JsonFormValidators } from './json-form-validators';

export interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}
