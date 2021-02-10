import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebase_config), 
    AngularFireAuthModule, 
    AngularFirestoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
