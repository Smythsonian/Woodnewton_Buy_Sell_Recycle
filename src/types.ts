export interface Item {
  id: string;
  title: string;
  description: string;
  price: number | 'Free';
  image: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
}