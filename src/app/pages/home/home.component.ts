import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/restaurant.service";
import { ResCardComponent } from "../../components/res-card/res-card.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ResCardComponent,FormsModule,CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
    restaurants: any = [];
    constructor(private resService : RestaurantService) {}

    ngOnInit(): void {
        this.restaurants = this.resService.getRestaurant();        
    }
}