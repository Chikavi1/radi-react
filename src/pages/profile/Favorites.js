import React from 'react'

const Favorites = () => (
  <div class="flex flex-wrap mt-12 justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        <div class="col-span-2 sm:col-span-1 xl:col-span-1">
          <img
            alt="..."
            src="https://source.unsplash.com/gUBJ9vSlky0"
            class="h-24 w-24 rounded  mx-auto"
          />
        </div>
        <div class="col-span-2  xl:col-span-4">
          <h3 class="font-semibold text-black">Veggie</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 italic ">$22</div>
 
        <div class="col-span-2 sm:col-span-1 xl:col-span-1">
          <img
            alt="..."
            src="https://source.unsplash.com/UxRhrU8fPHQ"
            class="h-24 w-24 rounded  mx-auto"
          />
        </div>
        <div class="col-span-2  xl:col-span-4">
          <h3 class="font-semibold text-black">Festival</h3>
          <p>
          Nam ac ligula in metus feugiat pulvinar vel ac augue.
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 italic ">$16</div>
 
        <div class="col-span-2 sm:col-span-1 xl:col-span-1">
          <img
            alt="..."
            src="https://source.unsplash.com/uU0Anw-8Vsg"
            class="h-24 w-24 rounded  mx-auto"
          />
        </div>
        <div class="col-span-2  xl:col-span-4">
          <h3 class="font-semibold text-black">Pepperoni</h3>
          <p>
           Suspendisse pharetra lacus in ipsum porta rutrum.
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 italic ">$18</div>
      </div>
      </div>


  
)

export default Favorites