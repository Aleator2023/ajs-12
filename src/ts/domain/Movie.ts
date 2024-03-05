export default class Movie {
    picture: string;
    titleRU: string;
    titleEN: string;
    year: number;
    country: string;
    slogan: string;
    genre: string;
    duration: string;

    constructor(picture: string, titleRU: string, titleEN: string, year: number, country: string, slogan: string, genre: string, duration: string) {
        this.picture = picture;
        this.titleRU = titleRU;
        this.titleEN = titleEN;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
    }
    
    addToCart(cart: Movie[]): void {
        cart.push(this);
        console.log(`${this.titleRU} добавлен в корзину.`);
    }
}

// Пример использования класса Movie
const moviesCart: Movie[] = [];

const movieExample = new Movie(
    "url_to_image.jpg", // картинка
    "Название на русском", // название на русском
    "Title in English", // название на английском
    2020, // год выпуска
    "Страна", // страна
    "Слоган фильма", // слоган
    "Жанр", // жанр
    "120 мин" // время
);

// Добавление фильма в корзину
movieExample.addToCart(moviesCart);
