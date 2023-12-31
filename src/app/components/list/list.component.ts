import { Component, Input } from '@angular/core';
import { IParticipant } from './../../interfaces/participant.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() participantItem!: IParticipant;
}