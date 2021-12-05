import {Component, OnInit} from '@angular/core';
import {Products} from "../../../core/models/products.model";
import {ProductsService} from "../../../core/services/products.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tutorial: Products = new Products();
  submitted = false;

  constructor(private tutorialService: ProductsService) {
  }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Products();
  }
}
