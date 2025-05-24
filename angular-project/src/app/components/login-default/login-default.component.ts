import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-login-default',
  imports: [],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss'
})
export class LoginDefaultComponent {
  @Input() title: string="";
    @Input() primaryBtnText: string="";
  @Input() secondaryBtnText: string="";


}
