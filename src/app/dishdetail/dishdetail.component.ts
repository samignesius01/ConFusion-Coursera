import { Component, OnInit,Input, ViewChild,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../services/dish.service';
import {switchMap} from 'rxjs/operators';
import {FormBuilder,FormGroup,Validators} from  '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {Comment,CommentType} from '../shared/comment';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  commentForm:FormGroup;
  comment:Comment;
  commentType=CommentType;

  dish:Dish;
  dishIds:string[];
  prev:string;
  next:string;

  gridsize:number=5;

  updateSetting(event)
  {
    this.gridsize=event.value;
  }

  formErrors={
    'authorname':'',
    'rating':0,
    'authorcomment':''
  };


  validationMessages={
    'authorname':{
         'required':'Author name is required',
         'minlength':'Author name must be greater than 2 characters',
         'maxlength':'Author name must be less than 25 characters'
    },
    'rating':{
    },
    'authorcomment':{
      'required':'Comment is required'
    }
  }

  @ViewChild('fform') commentFormDirective;

  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private location :Location,
    private cf:FormBuilder,
    @Inject('BaseURL')private BaseURL)
    { 
      this.createForm();
    }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe((dishIds)=>this.dishIds=dishIds);
    this.route.params
      .pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
      .subscribe(dish => {this.dish=dish; this.setPrevNext(dish.id); });
  }

  createForm()
  {
    this.commentForm=this.cf.group({
         authorname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
         rating:[''],
         authorcomment:['',[Validators.required]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();  
  }

  onValueChanged(data?:any)
  {
    if(!this.commentForm)
    {
      return;
    }
    const form=this.commentForm;
    for(const field in this.formErrors)
    {
      if(this.formErrors.hasOwnProperty(field))
      {
        this.formErrors[field]='';
        const control=form.get(field);
        if(control && control.dirty && !control.valid)
        {
          const messages=this.validationMessages[field];
          for(const key in control.errors)
          {
            if(control.errors.hasOwnProperty(key))
            {
              this.formErrors[field]+=messages[key]+'';
            }
          }
        }
      }
    }
  }

  setPrevNext(dishId:string)
  {
      const index=this.dishIds.indexOf(dishId);
      this.prev=this.dishIds[(this.dishIds.length + index-1) % this.dishIds.length];
      this.next=this.dishIds[(this.dishIds.length + index+1) % this.dishIds.length];
  }

  onSubmit()
  {
    this.comment=this.commentForm.value;
    console.log(this.comment);
    this.commentForm.reset({
      authorname:'',
      authorcomment:''
    });
    this.commentFormDirective.resetForm();
  }

  goBack():void
  {
     this.location.back();
  }
}
