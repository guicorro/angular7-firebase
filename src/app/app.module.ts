import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]

})
export class AppModule { }
