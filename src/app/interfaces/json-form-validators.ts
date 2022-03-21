export interface TemplateOptions {
  label: string;
  min?: number;
  max?: number;
  required?: boolean;
  // email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  // nullValidator?: boolean;
  step: string;
}
