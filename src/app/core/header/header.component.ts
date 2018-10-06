import { Component,OnInit} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 

  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService){ }
  onFetchData() {
    this.dataStorageService.getRecipe();
  }
  onSaveData() {
     this.dataStorageService.storeRecipe()
     .subscribe(
       (response: Response) => {
         console.log(response);
       }
     );
  }

  onLogout() {
    this.authService.logout();
  }
}
