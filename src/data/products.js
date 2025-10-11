import bokChoy from '../assets/bok-choy.jpg';
import broccoli from '../assets/broccoli.jpg';
import cucumber from '../assets/cucumber.jpg';
import kangkong from '../assets/kangkong.jpg';
import spinach from '../assets/spinach.jpg';
import choySum from '../assets/choySum.jpg';
import kale from '../assets/kale.jpg';
import greenCapsicum from '../assets/green-capsicum.jpg';


export const products = [
  {
    id: 1,
    name: 'Broccoli',
    href: '#',
    imageSrc: broccoli,
    imageAlt: 'Fresh green broccoli florets on a wooden table.',
    variants: [
      { size: 500, price: 'RM 3.20' },
      { size: 1000, price: 'RM 5.80' },
    ],
  },
  
  {
    id: 2,
    name: 'Spinach',
    href: '#',
    imageSrc: spinach,
    imageAlt: 'Fresh baby spinach leaves in a bowl.',
    variants: [
      { size: 250, price: 'RM 2.80' },
      { size: 500, price: 'RM 4.50' },
    ],
  },
  {
    id: 3,
    name: 'Cucumber',
    href: '#',
    imageSrc: cucumber,
    imageAlt: 'Fresh cucumbers arranged on a cutting board.',
    variants: [
      { size: 250, price: 'RM 2.50' },
      { size: 500, price: 'RM 4.20' },
    ],
  },
  {
    id: 4,
    name: 'Kale',
    href: '#',
    imageSrc: kale,
    imageAlt: 'Crisp curly kale leaves with rich green texture.',
    variants: [
      { size: 300, price: 'RM 3.00' },
      { size: 600, price: 'RM 5.50' },
    ],
  },
  {
    id: 5,
    name: 'Bok Choy',
    href: '#',
    imageSrc: bokChoy,
    imageAlt: 'Fresh bok choy on a wooden cutting board.',
    variants: [
      { size: 400, price: 'RM 2.90' },
      { size: 800, price: 'RM 5.20' },
    ],
  },
  {
    id: 6,
    name: 'Green Capsicum',
    href: '#',
    imageSrc: greenCapsicum,
    imageAlt: 'Crisp green bell pepper placed on a rustic surface.',
    variants:[
      { size: 300, price: 'RM 3.50' },
      { size: 600, price: 'RM 6.00' },
    ]
  },
  {
    id: 7,
    name: 'Kangkong (Water Spinach)',
    href: '#',
    imageSrc: kangkong,
    imageAlt: 'Bundle of fresh water spinach stalks and leaves.',
    variants: [
      { size: 300, price: 'RM 2.70' },
      { size: 600, price: 'RM 4.80' },
    ]
  },
  {
    id: 8,
    name: 'Choy Sum',
    href: '#',
    imageSrc: choySum,
    imageAlt: 'Fresh choy sum vegetables ready for cooking.',
    variants: [
      { size: 300, price: 'RM 2.60' },
      { size: 600, price: 'RM 4.70' },
    ]
  },
];
