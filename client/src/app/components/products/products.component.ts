import { Component, OnInit } from '@angular/core';
import { faPlus,faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {  faTrashAlt  } from '@fortawesome/free-regular-svg-icons';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faPlus = faPlus; faTrash = faTrashAlt; faPencil = faPencilAlt;

  columns: string[] = ['Nombre', 'Categoría', 'Precio', 'Cantidad', 'Inventario', 'Acción'];

  dataSource = new MatTableDataSource([
    {position: 'Nike', name: 'Hydrogen', weight: 1.0079, symbol: 1},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 2},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 0},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 0},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 1},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 2},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 0},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 2},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 1},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 0},
    
  ]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
