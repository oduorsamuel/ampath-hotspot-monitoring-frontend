import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssetBandwidthComponent } from './asset-bandwidth/asset-bandwidth.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AssetService } from './asset.service';
import { HealthComponent } from './health/health.component';

const appRoutes=[
  { path: '', redirectTo: 'bandwidth', pathMatch: 'full' },
  {
    
    path:'health', component: HealthComponent
  },
  {
    
    path:'bandwidth', component: AssetBandwidthComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AssetBandwidthComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
