export interface Deck {
    deck_id: String,
    remaining: Number,
    shuffled: Boolean,
    success: Boolean
}

export interface Cards {
    success: Boolean,
    cards: [
        {
            image: String,
            value: String,
            suit: String,
            code: String
        }
    ],
    deck_id: String,
    remaining: Number
}