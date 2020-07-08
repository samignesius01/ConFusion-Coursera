import { Injectable } from '@angular/core';
import {Leader} from '../shared/lead';
import {LEADER} from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leader[]
  {
    return LEADER;
  }

  getLeader(id:string):Leader{
    return LEADER.filter((leader) =>(leader.id===id))[0];
  }

  getFeaturedLeader():Leader{
    return LEADER.filter((leader)=>leader.featured)[0]; 
  }
}
