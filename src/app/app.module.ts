import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';
import {MatGridListModule} from '@angular/material/grid-list';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionService} from './services/promotion.service';
import { DishService } from './services/dish.service';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component';

import { MatDialogModule  } from '@angular/material/dialog';
import { from } from 'rxjs';
import {MatSliderModule} from '@angular/material/slider';

import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';

import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule
   
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    {provide:'BaseURL',useValue:baseURL}
    
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
