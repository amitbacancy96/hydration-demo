import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    }, {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    }
  ]
}
