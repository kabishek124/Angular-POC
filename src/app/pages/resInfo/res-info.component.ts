import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "../../services/restaurant.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-res-info',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './res-info.component.html',
    styleUrl: './res-info.component.css'
})
export class ResInfoComponent implements OnInit{
    restaurant: any;

    constructor(private activatedRoute: ActivatedRoute, private resService: RestaurantService){}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.restaurant = this.resService.getRestaurantById(id);
        }
    }

    calculateDiscountedPrice(price: number): number {
        return Math.round((price * 82) * 0.2);
    }
}