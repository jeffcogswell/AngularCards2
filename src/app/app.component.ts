import { Component } from '@angular/core';
import { CardApiService } from './card-api.service';
import { Cards, Deck } from './deck';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AngularCards';
	deck?: Deck; // The question mark overrides the requirement that it must be initialized
	cards?: Cards; // Another question mark -- doesn't need to be initialized

	constructor(private cardapi: CardApiService) { }

	getDeck() {
		this.cardapi.getDeck(
			(result: Deck) => this.deck = result
		);
	}

	getCards() {
		if (this.deck) {
			this.cardapi.getCards(this.deck.deck_id, 
				(result: Cards) => this.cards = result
			);
		}
	}
}
