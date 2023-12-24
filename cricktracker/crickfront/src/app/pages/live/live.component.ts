import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [JsonPipe,CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {

  liveMatches: any;

  constructor(private _api: ApiCallService) {

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMAtches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
