import { Component } from '@angular/core';
import { IParticipant } from './interfaces/participant.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  participantData: IParticipant[] = [];
  baseProbability = 0.7;
  winnerExists = false;

  addParticipant(): void {
    const id = this.participantData.length + 1;
    const name = `Participant - ${id}`;
    const isWin = this.defineWinner();
    this.participantData.push({id, name, isWin});
  }

  defineWinner(): boolean {
    if (this.winnerExists) {
      return false;
    }
    const probability = this.getProbability();
    const randomNumber = Math.random();
    if (probability > randomNumber) {
      this.winnerExists = true;
      return true;
    }
    return false;
  }

  getProbability(): number {
    return this.baseProbability / (this.participantData.length + 1);
  }
}
