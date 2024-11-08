import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-res-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './res-card.component.html',
    styleUrls: ['./res-card.component.css']
  })

  export class ResCardComponent {
    @Input() resId!: string;
    @Input() resName!: string;
    @Input() resCuisine!: string;
    @Input() resAddress!: string;
    @Input() resRating!: number;
    @Input() resCity!: string;

    constructor (private route: Router){}

    navigate(){
        this.route.navigate(['/restaurant', this.resId]);
    }
}