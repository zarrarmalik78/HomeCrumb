
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'bread' | 'cookies' | 'cakes' | 'doughnuts' | 'pastry';
  description: string;
  image: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Category {
  id: string;
  label: string;
  value: string;
}
