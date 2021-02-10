import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
  declarations: [],
  imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase_config), AngularFireAuthModule],
  exports: [BrowserModule, IonicModule],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class CoreModule {}
