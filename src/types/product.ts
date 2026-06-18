export interface Product {
  id: string;
  name: string;
  category: 'Licor' | 'Conserva' | 'Mermelada' | 'Temporada';
  price: string | null;   // null → mostrar "Consultá por precio"
  volume: string;
  description: string;
  image: string;          // ruta relativa a /public, ej: '/licor cafe.webp'
}
