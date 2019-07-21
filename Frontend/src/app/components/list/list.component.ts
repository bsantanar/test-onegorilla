import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  values = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getValues().subscribe(
      res => {
        this.values = res['values'];
      },
      err => {
        console.log(err);
      }
    );
  }
  
  addValue() {
    this.router.navigate(['/new']);
  }

}
