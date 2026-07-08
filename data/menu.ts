export type Category = {
  slug: string;
  name: string;
  startingPrice?: number;
  tint: string; // bg tint for the pill/card
  image?: string;
};

export type Restaurant = {
  id: string;
  name: string;
  tags: string[];
  rating: number;
  delivery: string;
  time: string;
  image?: string;
};

export type Food = {
  id: string;
  name: string;
  restaurant: string;
  restaurantId: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  sizes?: number[];
  image?: string;
};

/** Real avatar photo by index (1-12). */
export const avatar = (i: number) => `/avatars/a${((i - 1) % 12) + 1}.jpg`;

/** Assorted real dish photos for generic grids/banners. */
export const dishPhotos = [
  "/food/beef1.jpg",
  "/food/chicken1.jpg",
  "/food/pasta1.jpg",
  "/food/sea1.jpg",
  "/food/beef2.jpg",
  "/food/chicken2.jpg",
  "/food/dessert1.jpg",
  "/food/breakfast1.jpg",
];

export const categories: Category[] = [
  { slug: "all", name: "All", tint: "#FFD27A", image: "/food/burger.jpg" },
  { slug: "hot-dog", name: "Hot Dog", startingPrice: 30, tint: "#F0F5FA", image: "/food/sandwich.jpg" },
  { slug: "burger", name: "Burger", startingPrice: 50, tint: "#F0F5FA", image: "/food/burger.jpg" },
  { slug: "pizza", name: "Pizza", startingPrice: 70, tint: "#F0F5FA", image: "/food/pizza.jpg" },
  { slug: "sandwich", name: "Sandwich", startingPrice: 40, tint: "#F0F5FA", image: "/food/sandwich.jpg" },
  { slug: "salad", name: "Salad", startingPrice: 25, tint: "#F0F5FA", image: "/food/salad.jpg" },
];

export const restaurants: Restaurant[] = [
  {
    id: "rose-garden",
    name: "Rose Garden Restaurant",
    tags: ["Burger", "Chiken", "Riche", "Wings"],
    rating: 4.7,
    delivery: "Free",
    time: "20 min",
    image: "/food/beef1.jpg",
  },
  {
    id: "sn-quick",
    name: "Sn. Quick Restaurant",
    tags: ["Burger", "Chiken", "Wings"],
    rating: 4.7,
    delivery: "Free",
    time: "20 min",
    image: "/food/chicken1.jpg",
  },
  {
    id: "uttora",
    name: "Uttora Coffe House",
    tags: ["Burger", "Chiken", "Riche", "Wings"],
    rating: 4.7,
    delivery: "Free",
    time: "20 min",
    image: "/food/pasta1.jpg",
  },
];

export const foods: Food[] = [
  {
    id: "pizza-calzone-european",
    name: "Pizza Calzone European",
    restaurant: "Uttora Coffe House",
    restaurantId: "uttora",
    category: "pizza",
    price: 32,
    rating: 4.7,
    description:
      "Prosciutto e funghi is a pizza variety that is topped with tomato sauce.",
    sizes: [10, 14, 16],
    image: "/food/pizza.jpg",
  },
  {
    id: "burger-bistro",
    name: "Burger Bistro",
    restaurant: "Rose Garden",
    restaurantId: "rose-garden",
    category: "burger",
    price: 40,
    rating: 4.7,
    description:
      "A classic beef burger stacked with cheese, lettuce and house sauce.",
    sizes: [10, 14, 16],
    image: "/food/burger.jpg",
  },
  {
    id: "smokin-burger",
    name: "Smokin' Burger",
    restaurant: "Cafenio Restaurant",
    restaurantId: "sn-quick",
    category: "burger",
    price: 60,
    rating: 4.7,
    description: "Smoked beef patty with caramelised onions and BBQ glaze.",
    sizes: [10, 14, 16],
    image: "/food/beef2.jpg",
  },
  {
    id: "buffalo-burger",
    name: "Buffalo Burgers",
    restaurant: "Kaji Firm Kitchen",
    restaurantId: "sn-quick",
    category: "burger",
    price: 75,
    rating: 4.7,
    description: "Spicy buffalo chicken burger with blue-cheese dressing.",
    sizes: [10, 14, 16],
    image: "/food/chicken2.jpg",
  },
  {
    id: "bullseye-burger",
    name: "Bullseye Burgers",
    restaurant: "Kabab Restaurant",
    restaurantId: "rose-garden",
    category: "burger",
    price: 94,
    rating: 4.7,
    description: "Double patty burger with a bullseye fried egg on top.",
    sizes: [10, 14, 16],
    image: "/food/beef3.jpg",
  },
];

export const bestSellers = foods.slice(0, 5);

export function getFood(id: string) {
  return foods.find((f) => f.id === id);
}

export function getRestaurant(id: string) {
  return restaurants.find((r) => r.id === id);
}

export const ingredients = ["Salt", "Chicken", "Onion", "Garlic", "Peppers"];
