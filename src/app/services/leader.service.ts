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
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER),2000);
    });
  }

  getLeader(id:string):Promise<Leader>{
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader) =>(leader.id===id))[0]),2000);
    });
  }

  getFeaturedLeader():Promise<Leader>{
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader)=>leader.featured)[0]),2000);
    });
  }
}
