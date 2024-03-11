import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./basic-pages/home/home.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from "./basic-pages/top-bar/top-bar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ReactiveFormsModule, FormsModule, TopBarComponent]
})
export class AppComponent {
  title = 'University';
}
