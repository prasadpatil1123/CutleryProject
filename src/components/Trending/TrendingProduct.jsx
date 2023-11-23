/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Dinner Set',
      href: '#',
      price: '48',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/kvo55zk0/dinner-set/y/d/p/no-stainless-steel-dinner-set-laser-print-limetro-steel-original-imag8gvdkvyd73jh.jpeg?q=70',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
    {
      id: 2,
      name: 'Dinner Set',
      href: '#',
      price: '48',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/kvo55zk0/dinner-set/s/w/s/no-stainless-steel-dinner-set-laser-print-limetro-steel-original-imag8gvdyzzgdq5q.jpeg?q=70',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
    {
      id: 3,
      name: 'Dinner Set',
      href: '#',
      price: '35',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/dinner-set/m/u/s/no-48-iconicssdinnerset48pcs-greenchef-original-imagpfpfsqyggnsf.jpeg?q=70',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 4,
      name: 'Dinner Set',
      href: '#',
      price: '89',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/kvo55zk0/dinner-set/k/b/4/no-stainless-steel-dinner-set-laser-print-limetro-steel-original-imag8gvdd2c9tuxg.jpeg?q=70',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 5,
      name: 'Dinner Knife',
      href: '#',
      price: '48',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-151655_1_480x480.webp?v=1692697803',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
   
    {
      id: 6,
      name: 'Soup Spoon',
      href: '#',
      price: '89',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-162421_1_480x480.webp?v=1692701940',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 7,
      name: 'cutlery holder',
      href: '#',
      price: '48',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/kz1lle80/cutlery-case/s/z/b/10-wooden-mdf-2-in-1-coco-cutlery-holder-spoon-holder-for-dining-original-imagb5fh3ezgdcw5.jpeg?q=70',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
    {
      id: 8,
      name: 'Serving Spoons',
      href: '#',
      price: '35',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-160158_1_480x480.webp?v=1692700484',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 9,
      name: 'cutlery holder',
      href: '#',
      price: '89',
      imageSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/cutlery-case/s/l/t/16-rbi05hs011-jaga-5-original-imagn3a6zyc3ebbu.jpeg?q=70',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 10,
      name: 'Dinner Knife',
      href: '#',
      price: '48',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-151655_1_480x480.webp?v=1692697803',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
    {
      id: 11,
      name: 'Serving Spoons',
      href: '#',
      price: '35',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-160158_1_480x480.webp?v=1692700484',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 12,
      name: 'Soup Spoon',
      href: '#',
      price: '89',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-162421_1_480x480.webp?v=1692701940',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
   
    // More products...
  ]
  
  export default function TrendingProduct() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                {/* <h3 className="mt-4 text-sm text-gray-700">{product.description}</h3> */}
                <p className="mt-1 text-lg font-medium text-gray-900">₹ {product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  