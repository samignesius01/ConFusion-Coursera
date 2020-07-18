import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';


import {Leader} from '../shared/lead';
import {LEADER} from '../shared/leader';
import {LeaderService} from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  lead:Leader;
  promotion:Promotion;
  
  constructor(private dishService:DishService,
    private leaderService:LeaderService,
    private promotionService:PromotionService) { }

  ngOnInit(): void {
   this.dishService.getFeaturedDish()
      .subscribe(dish=>this.dish=dish);
   this.leaderService.getFeaturedLeader()
      .subscribe(lead=>this.lead=lead);
   this.promotionService.getFeaturedPromotion()
      .subscribe(promotion=>this.promotion=promotion);
  }

}
