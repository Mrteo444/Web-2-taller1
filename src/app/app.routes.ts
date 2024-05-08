import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactosComponent } from './page/contactos/contactos.component';
import { FormularioSuscriptorComponent } from './page/formulario-suscriptor/formulario-suscriptor.component';
import { ProductosServiciosComponent } from './page/productos-servicios/productos-servicios.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { InfoproductosComponent } from './page/infoproductos/infoproductos.component';
import { Error404Component } from './page/error404/error404.component';

export const routes: Routes = [
    {path : "home", component:HomeComponent},
    {path : "contactos", component:ContactosComponent},
    {path : "formulario", component:FormularioSuscriptorComponent},
    {path : "productos", component:ProductosServiciosComponent},
    {path : "nosotros", component:NosotrosComponent},

    {path : 'info/:idProducto',component:InfoproductosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
