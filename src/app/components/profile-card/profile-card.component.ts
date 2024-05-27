import { Component, Input } from '@angular/core';
import { NeonlightMouseDirective as MouseEffect } from '../../../../submodules/@rhythmCore/directives/neon-light-mouse/neonlight-mouse.directive';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MouseEffect],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  
  @Input() avatar: string = '/assets/img/profile-pic.png';
  @Input() name: string = 'Exequiel Gualtieri';
  @Input() TechnicalField: string = 'Web Developer';
  @Input() downloadIconClass: string = 'fa-solid fa-arrow-down';
  @Input() model: [] = []
  
}
