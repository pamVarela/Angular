import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: Product;
  formAddProduct: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private toastr: ToastrService, 
    private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      materials: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  add() {
    let data = this.formAddProduct.value;
    if (this.formAddProduct.valid) {
      this.productService.create(data)
        .subscribe(
          response => {
            this.toastr.success(`Producto ${data.name} agregado con éxito!`);
            this.ngxLoader.start();
            setTimeout( () => {
              window.location.reload();
              this.ngxLoader.stop();
            }, 2000); 
          },
          error => {
            this.toastr.error(`Error para agregar Producto...`);
          });
    } else {
      this.toastr.error(`Debe completar los campos`);
    }
  }
}
