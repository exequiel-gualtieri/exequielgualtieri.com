import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeonlightMouseDirective as MouseEffect } from '../../submodules/@rhythmCore/directives/neon-light-mouse/neonlight-mouse.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MouseEffect, FontAwesomeModule]
})
export class AppComponent {
  title = 'exequielgualtieri.com';
}
