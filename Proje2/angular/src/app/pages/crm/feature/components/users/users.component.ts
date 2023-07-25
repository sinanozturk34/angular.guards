import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Input=bu componente özellik gecmemızı saglayan yapılar olarak ınput degeri kullanılır
  @Input() bgColor:string | undefined;


  users:any[] = [{
    name:'ali',
    surname:'tan'
  },
  {
    name:'Ayse',
    surname:'Can'
  },
  {
    name:'Kadir',
    surname:'Han'
  }
]

}
