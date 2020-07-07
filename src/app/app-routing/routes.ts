import { Routes } from '@angular/router';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Component } from '@angular/core';


export const routes: Routes=[
    {
       path:'home',
       component:HomeComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'dishdetail/:id',
        component:DishdetailComponent
    },
    {
         path:'',
         redirectTo:'/home',
         pathMatch:'full'
    },
    {
        path:'contactus',
        component:ContactComponent
    }
];