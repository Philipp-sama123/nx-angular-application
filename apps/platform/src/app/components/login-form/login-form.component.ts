import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@platform/api-interfaces';
import { FormGroup, FormControl }  from '@angular/forms';



@Component({
  selector: 'platform-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() error!: string | null;
  @Output() submitEM = new EventEmitter();
  
  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
    hello$ = this.http.get<Message>('/api/hello');
    constructor(private http: HttpClient) {}

  
    submit() {
      if (this.form.valid) {
        this.submitEM.emit(this.form.value);
      }
  }
}
