import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'licor-mandarina',
    name: 'Licor de Mandarina',
    category: 'Licor',
    price: '$6.000',
    volume: '250 ml',
    description:
      'Elaborado con mandarina, este licor combina dulzor y frescura en una bebida suave, ideal para compartir en reuniones, disfrutar después de una comida o simplemente servir bien frío en cualquier ocasión. Su sabor característico y aroma frutal lo convierten en una alternativa diferente para quienes buscan probar algo casero y hecho con dedicación.',
    image: '/licor-mandarina.webp'
  },
  {
    id: 'dulce-zapallo',
    name: 'Dulce de Zapallo',
    category: 'Conserva',
    price: '$5.000',
    volume: '400 grs',
    description:
      'El sabor de lo casero en cada cucharada. Nuestro dulce de zapallo artesanal conserva esa calidez que recuerda a las tradiciones familiares y a los productos hechos con paciencia y dedicación. Ideal para acompañar tostadas, quesos, postres o simplemente disfrutar solo.',
    image: '/dulce-zapallo.jpg'
  },
  {
    id: 'baileys-1l',
    name: 'Baileys Artesanal',
    category: 'Licor',
    price: '$35.000',   
    volume: '1000 ml',
    description:
      'La opción perfecta para compartir en reuniones, celebraciones o encuentros especiales. Nuestro Baileys artesanal se destaca por su suavidad, cremosidad y sabor equilibrado. Una bebida pensada para disfrutar sin apuro, acompañando buenos momentos y buena compañía.',
    image: '/bailey-1000cc.jpg'
  },
  {
    id: 'baileys-250',
    name: 'Baileys Artesanal',
    category: 'Licor',
    price: '$10.000',
    volume: '250 ml',
    description:
      'Pequeño en tamaño, grande en sabor. Nuestro Baileys artesanal ofrece una textura suave y cremosa, con un perfil dulce y delicado que invita a disfrutar cada sorbo. Ideal para compartir, servir bien frío o darse un gusto en cualquier ocasión.',
    image: '/bailey-250cc.webp'
  },
  {
    id: 'licor-cafe',
    name: 'Licor de Café',
    category: 'Licor',
    price: '$6.000',
    volume: '250 ml',
    description:
      'Un licor con personalidad propia, elaborado artesanalmente para quienes disfrutan de los sabores intensos y auténticos. Su aroma a café y su sabor equilibrado lo convierten en una excelente opción para compartir, regalar o disfrutar en un momento special.',
    image: '/licor-cafe.webp'
  },
];
