
import { Product, Testimonial, Category } from './types.ts';

export const CATEGORIES: Category[] = [
  { id: '1', label: 'All', value: 'all' },
  { id: '2', label: 'Cakes', value: 'cakes' },
  { id: '3', label: 'Doughnuts', value: 'doughnuts' },
  { id: '4', label: 'Bread', value: 'bread' },
  { id: '5', label: 'Croissant', value: 'pastry' },
  { id: '6', label: 'Cookies', value: 'cookies' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Artisanal Sourdough',
    price: 1200,
    category: 'bread',
    description: 'Slow-fermented for 24 hours with locally sourced flour.',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 'p2',
    name: 'Gourmet Choc-Chip Cookies',
    price: 1500,
    category: 'cookies',
    description: 'Box of 6. Crispy edges, chewy center with premium dark chocolate chunks.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 'p3',
    name: 'Strawberry Shortcake',
    price: 2500,
    category: 'cakes',
    description: 'Light sponge with fresh organic berries and velvet cream.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 'p4',
    name: 'Cinnamon Roll Cakes',
    price: 1800,
    category: 'cakes',
    description: 'Our signature weekend special with vanilla glaze.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 'p5',
    name: 'White Flour Bread',
    price: 450,
    category: 'bread',
    description: 'Classic soft crust bread, perfect for family sandwiches.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 'p6',
    name: 'Golden Croissants',
    price: 1350,
    category: 'pastry',
    description: 'Pack of 3. Multi-layered buttery goodness from high-grade butter.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    rating: 5.0,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ayesha Khan',
    role: 'Islamabad Resident',
    content: 'The best home bakery in Sector I-10! The sourdough is consistently perfect every single time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  }
];
