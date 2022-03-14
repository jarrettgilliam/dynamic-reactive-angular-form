import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { JsonFormControls } from '../../interfaces/json-form-controls';

export interface JsonFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormComponent implements OnInit {
  @Input() jsonFormData: JsonFormData | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
