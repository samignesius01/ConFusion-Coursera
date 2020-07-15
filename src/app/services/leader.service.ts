import { Injectable } from '@angular/core';
import {Leader} from '../shared/lead';
import {LEADER} from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Promise<Leader[]>
  {
    return Promise.resolve(LEADER);
  }

  getLeader(id:string):Promise<Leader>{
    return Promise.resolve(LEADER.filter((leader) =>(leader.id===id))[0]);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADER.filter((leader)=>leader.featured)[0]); 
  }
}
