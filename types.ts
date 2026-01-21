
export enum Page {
  Home = 'home',
  About = 'about',
  Products = 'products',
  Reviews = 'reviews',
  Contact = 'contact'
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Parts' | 'Gear' | 'Merch';
  description: string;
  image: string;
}
