import React from 'react'

export default function PromoSections() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cutlery for Every Occasion
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Find the perfect cutlery for any occasion, from everyday meals to special occasions. We offer a wide selection of cutlery sets, individual pieces, and accessories to suit your every need. Shop our cutlery online today!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://media.istockphoto.com/id/171151122/photo/elegant-dinner-table-setting-with-shallow-depth-of-field.jpg?s=2048x2048&w=is&k=20&c=vrauxaJA2MiOxqr8eYI1RQLu5QEHFPAGLvNsRxNdzm0="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/508935749/photo/cultery.jpg?s=612x612&w=0&k=20&c=m0thcli-v3uIpqg7jEigd_C0AQeNtU_mgNsZS9jGOs4="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1328715582/photo/top-view-of-christmas-table-setting-on-the-black-plate-on-the-dark-background.jpg?s=612x612&w=0&k=20&c=35d4eGli1EY8MG6cPIhjzdQh1CxearVvqev9Y_uSpgY="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1308512016/photo/modern-cutlery-on-stone-background.jpg?s=612x612&w=0&k=20&c=nTy8GIvLEGqJU8PXojHegtPVudtb3mxanmJFNw0gRIk="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1183811829/photo/cutlery-rustic-used-for-eating-or-serving-food-food-background-copy-space-top-view.jpg?s=612x612&w=0&k=20&c=7HgPaBZY_PtiSp2YD3hE3oE-_3v4ofys_UnOtldhXO0="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/844316088/photo/vintage-kitchen-utensils-on-rustic-wood-background-closeup-of-fork-spoon-and-knife-beautiful.jpg?s=612x612&w=0&k=20&c=uhH_VK0IcmAZPDLsGZKBiiZbpBCn4JoWb7vR6ZAFo-w="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/871749226/photo/top-view-of-christmas-menu-table.jpg?s=612x612&w=0&k=20&c=tk7GM-dv0s9knswdZn5j0spMD2D40CmzDIVwY7l2OcA="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
