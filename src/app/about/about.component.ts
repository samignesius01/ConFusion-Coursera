import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/lead';
import {LeaderService} from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
  lead:Leader[]
  selectedLeader:Leader

  constructor(private leaderService:LeaderService) { }


  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.lead=leaders);
  }

}
