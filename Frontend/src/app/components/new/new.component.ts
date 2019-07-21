import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  valueForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    //Inicializacion del formulario
    this.valueForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')]
        )],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      n: [1, Validators.compose([
        Validators.required,
        Validators.min(1)
      ])],
      m: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  //Transforma el string a arreglo de numeros, reemplazando los string por '0'
  getMValues(){
    let values = this.valueForm.get('m').value;
    values = values.split(',').map((i) => {
      let aux = parseInt(i, 10);
      if(!isNaN(aux)){
        return aux;
      }
      return 0;
    })
    return values;
  }

  //Funcion que verifica si existe la suma esperada de N dentro de M
  checkMValues(n){
    let values = this.getMValues();
    let result = false;
    values.forEach((aux) => {
      let i = values.indexOf(aux);
      for (let j = 0; j < values.length; j++) {
        if(j !== i){
          let sum = values[i] + values[j];
          if(sum === n){
            result = true;
          }
        }
      }
    });
    return result;
  }

  //Creacion del objeto y envio a la API con su debido resultado
  submit(){
    let obj = {};
    obj['email'] = this.valueForm.get('email').value;
    obj['name'] = this.valueForm.get('name').value;
    obj['n'] = this.valueForm.get('n').value;
    obj['m'] = this.getMValues();
    obj['result'] = this.checkMValues(obj['n']);
    //console.log(obj);
    this.userService.newValue(obj).subscribe(
      res => {
        this.router.navigate(['/list']);
      },
      err => {
        console.log(err);
      }
    );

  }

}
