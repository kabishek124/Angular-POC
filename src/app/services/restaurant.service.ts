import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RestaurantService{
    // private getResApiUrl = 'https://cors-anywhere.herokuapp.com/https://zomato-express.jayeshhande21.repl.co/restaurant'
    // constructor(private http: HttpClient){ }
    // private headers = new HttpHeaders({
    //     'Content-Type': 'application/json',
    // });
    // getRestaurant() : Observable<any>{
    //     return this.http.get(this.getResApiUrl, { headers: this.headers });
    // }
    private restaurants: any = [
        {
          "_id": "6501685dc3853ff8e44ae0c6",
          "name": "Updated Mexican",
          "cuisine": "Mexican",
          "address": "123 st Main Street",
          "city": "Pune",
          "rating": 4.5,
          "menu": [
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501685dc3853ff8e44ae0c8"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501685dc3853ff8e44ae0c9"
            }
          ],
          "reviews": [
            {
              "text": "Great food and excellent service!",
              "rating": 4.5,
              "_id": "6504ac27c8f411dbc837e4ef"
            }
          ],
          "__v": 2
        },
        {
          "_id": "6501798d05321697155a48de",
          "name": "Veg HUB",
          "cuisine": "Indian",
          "address": "123 st Main Street",
          "city": "Pune",
          "rating": 4.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6501798d05321697155a48df"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501798d05321697155a48e0"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501798d05321697155a48e1"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6501c43b4ed89c170dc2a611",
          "name": "New Restaurant1",
          "cuisine": "Maharastrian",
          "address": "123 st Main Street",
          "city": "Pune",
          "rating": 4.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6501c43b4ed89c170dc2a612"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501c43b4ed89c170dc2a613"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501c43b4ed89c170dc2a614"
            }
          ],
          "reviews": [
            {
              "text": "Superbb",
              "rating": 9.5,
              "_id": "650311f6efa5126beec1e819"
            }
          ],
          "__v": 1
        },
        {
          "_id": "6501c43b4ed89c170dc2a617",
          "name": "New Restaurant2",
          "cuisine": "Italian",
          "address": "123 st Main Street",
          "city": "Itali",
          "rating": 6.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6501c43b4ed89c170dc2a618"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501c43b4ed89c170dc2a619"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501c43b4ed89c170dc2a61a"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6501c43b4ed89c170dc2a61c",
          "name": "New Restaurant3",
          "cuisine": "Gujrati",
          "address": "123 st Main Street",
          "city": "Gujrat",
          "rating": 8.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6501c43b4ed89c170dc2a61d"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501c43b4ed89c170dc2a61e"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501c43b4ed89c170dc2a61f"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6501c43b4ed89c170dc2a621",
          "name": "New Restaurant4",
          "cuisine": "Hydrabadi",
          "address": "123 st Main Street",
          "city": "Hydrabad",
          "rating": 9.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6501c43b4ed89c170dc2a622"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6501c43b4ed89c170dc2a623"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6501c43b4ed89c170dc2a624"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6502cf572cea5fe231acc616",
          "name": "New Restaurant1",
          "cuisine": "Maharastrian",
          "address": "123 st Main Street",
          "city": "Pune",
          "rating": 4.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6502cf572cea5fe231acc617"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6502cf572cea5fe231acc618"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6502cf572cea5fe231acc619"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6502cf582cea5fe231acc61c",
          "name": "New Restaurant2",
          "cuisine": "Italian",
          "address": "123 st Main Street",
          "city": "Itali",
          "rating": 6.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6502cf582cea5fe231acc61d"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6502cf582cea5fe231acc61e"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6502cf582cea5fe231acc61f"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6502cf582cea5fe231acc621",
          "name": "New Restaurant3",
          "cuisine": "Gujrati",
          "address": "123 st Main Street",
          "city": "Gujrat",
          "rating": 8.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6502cf582cea5fe231acc622"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6502cf582cea5fe231acc623"
            },
            {
              "name": "Paratha",
              "price": 3.4,
              "_id": "6502cf582cea5fe231acc624"
            }
          ],
          "reviews": [],
          "__v": 0
        },
        {
          "_id": "6502cf582cea5fe231acc626",
          "name": "New Dish",
          "cuisine": "Hydrabadi",
          "address": "123 st Main Street",
          "city": "Hydrabad",
          "rating": 9.5,
          "menu": [
            {
              "name": "Pizza",
              "price": 12.99,
              "_id": "6502cf582cea5fe231acc627"
            },
            {
              "name": "Pasta",
              "price": 15.99,
              "_id": "6502cf582cea5fe231acc628"
            }
          ],
          "reviews": [],
          "__v": 1
        },
    ]
    getRestaurant() : Observable<any>{
        return this.restaurants;
    }

    getRestaurantById(id: string) : Observable<any>{
        return this.restaurants.find((restaurant: any) => restaurant._id === id);
    }

    searchRestaurant(serachKey : string) : Observable<any>{
        return this.restaurants.filter((restaurant: any) => restaurant.name.toLowerCase().includes(serachKey.toLowerCase()));
    }
}