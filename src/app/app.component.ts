import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeonlightMouseDirective as MouseEffect } from '../../submodules/@rhythmCore/directives/neon-light-mouse/neonlight-mouse.directive';
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      MouseEffect,
      ProfileCardComponent
    ]
})
export class AppComponent {
  title = 'exequielgualtieri.com';
}
