import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TopBarComponent]
})
export class HomeComponent {

}
