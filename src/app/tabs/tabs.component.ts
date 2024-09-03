import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoleServiceService} from "../role-service.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  userRole: string | null = null;

  constructor(private roleService:RoleServiceService) {

  }

    ngOnInit(): void {
    this.roleService.getUserRole().subscribe(response =>{
      this.userRole = response.role;
      console.log("Rol recibido del backend: ", this.userRole);
    })

    }

    isAdmin(): boolean {
      return this.userRole ? this.userRole.includes('Administrator') : false;
    }

    isStudent(): boolean {
      return this.userRole ? this.userRole.includes('Student') : false;
    }


}
