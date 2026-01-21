
import React from 'react';
import { Review, Product } from './types';

export const BUSINESS_INFO = {
  name: "Mav's Motorsports",
  phone: "(760) 382-9231",
  address: "1120 W Ward Ave, Suite C, Ridgecrest, CA 93555",
  rating: 5.0,
  reviewCount: 18,
  facebook: "https://facebook.com",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM, Sun: Closed"
};

export const REVIEWS: Review[] = [
  {
    author: "James D.",
    rating: 5,
    text: "Great prices, variety of merchandise, and friendly staff with lots of knowledge.",
    date: "2 months ago"
  },
  {
    author: "Sarah L.",
    rating: 5,
    text: "Wonderful place, awesome people, and amazing atmosphere.",
    date: "1 month ago"
  },
  {
    author: "Mike R.",
    rating: 5,
    text: "Highly recommend this place! They helped me find the perfect helmet and some hard-to-find parts for my cruiser.",
    date: "3 weeks ago"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Performance Exhaust Systems',
    category: 'Parts',
    description: 'High-flow exhaust systems for various makes and models.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Premium Leather Jackets',
    category: 'Gear',
    description: 'Durable, stylish protection for the modern rider.',
    image: 'https://images.unsplash.com/photo-1536766768598-e09213fdcf22?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Custom Mav’s Tees',
    category: 'Merch',
    description: 'Exclusive shop apparel to show your support.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
  }
];
