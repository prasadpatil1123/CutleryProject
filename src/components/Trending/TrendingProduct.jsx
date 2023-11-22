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
      name: 'Dinner Knife',
      href: '#',
      price: '48',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-151655_1_480x480.webp?v=1692697803',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      // description:'A dinner fork is a regular type of silverware used for everyday dinners. This is also bigger as to eat smaller portions of the food, like veggies. It is often there in everyone’s table cutlery because of its essentiality.',
    },
    {
      id: 2,
      name: 'Serving Spoons',
      href: '#',
      price: '35',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-160158_1_480x480.webp?v=1692700484',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Soup Spoon',
      href: '#',
      price: '89',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0486/7712/6297/files/Screenshot-2023-08-22-162421_1_480x480.webp?v=1692701940',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'The Royal Crown Blue Ceramic Dinner/ Full Plates Set Of Four',
      href: '#',
      price: '35',
      imageSrc: 'https://myborosil.com/products/hydra-spill-proof-travel-mug-coffee-mate-set-of-2-300ml-his-her',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
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
  