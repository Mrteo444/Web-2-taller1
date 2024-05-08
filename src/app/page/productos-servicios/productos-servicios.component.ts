import { Component, inject } from '@angular/core';
import { XxxService } from '../../services/xxx.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos-servicios.component.html',
  styleUrl: './productos-servicios.component.css'
})
export class ProductosServiciosComponent {
  servicio = inject(XxxService)
  personas : any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }

}
