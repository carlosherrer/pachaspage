import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { dripChevronUp, dripChevronDown } from '@ng-icons/dripicons';
import { UbicationComponent } from '../Components/ubication/ubication.component';
@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent,
    EventosComponent,
    ContactoComponent,
    UbicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ dripChevronUp, dripChevronDown }),
  ],
  exports: [
    HomeComponent,
    UbicationComponent
  ]
})
export class PagesModuleModule { }
