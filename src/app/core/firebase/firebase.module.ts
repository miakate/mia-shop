import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from '../../../environments/environment.prod';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // 3. Initialize
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ]
})
export class FirebaseModule {
}
