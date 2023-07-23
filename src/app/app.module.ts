import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';
import { SearchPipe } from './serach.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    CreateProdComponent,
    UpdateProdComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
