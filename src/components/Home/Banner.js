import React from 'react'

const Banner = () => (
  <>
    <div className="py-16">
    <div className="container m-auto px-6 mt-10">
   
     <div className="lg:flex justify-between items-center">
   
          <div className="lg:w-5/12 ">
            <img data-aos="fade-right" src="https://i.ibb.co/PWqDb43/Whats-App-Image-2021-02-09-at-10-30-53-AM.jpg"
            style={{width:'500px'}} alt="" className="rounded" />
          </div>
   
         <div className="lg:w-6/12 lg:p-0 p-7">
            <h1 data-aos="zoom-out-up" className="text-4xl font-bold leading-tight mb-5 "> ¿Cuál es la función de Radi? </h1>
   
            <p className="text-xl">Creemos que la mejor forma de combatir un problema es juntarnos, la plataforma se creó con el propósito de unir fuerzas con organizaciones, voluntariados, personas como tú y yo para hacer un cambio sin fin de lucro.
            </p>
   
            <div className="py-5">
                 <a href="#" className="text-black rounded-full py-2 mx-1 my-2 px-5 text-lg font-semibold  inline-block border hover:bg-white hover:text-black">¿Cómo funciona?</a>
                 <a href="/login" className="text-white rounded-full mx-1 my-2 py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Ingresar</a>
            </div>
   
          </div>
   
      </div>
   
    </div>
   </div>
 
   <div>
   <div class="m-10 mx-auto p-2 sm:p-6 lg:p-48 bg-gray-200">
    
    <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{"min-height": '19rem'}}>
      <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{"min-height": '19rem'}}>
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co/7p6q41D/oceanican.jpg" alt=""/>
        <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
        </div>
      </div>
      <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div class="hidden p-12 md:pr-24 md:pl-16 md:py-12">
          <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
          <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Learn more about our users</span>
            <span class="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <div class=" p-12 md:pr-24 md:pl-16 md:py-12">
          <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
          <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Learn more about our users</span>
            <span class="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      {/* <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
        <span class="block" style={{'transform': 'scale(-1)'}} >&#x279c;</span>
      </button>
      <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
        <span class="block" style={{'transform': 'scale(1)'}} >&#x279c;</span>
      </button> */}
    </div>
    
    <div class="flex items-center pt-5 justify-between">
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{'max-height': '200px'}} /></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{'max-height': '200px'}} /></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{'max-height': '200px'}} /></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{'max-height': '200px'}} /></button>
      <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{'max-height': '200px'}} /></button>
    </div>
    
  </div>

    <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center -mt-10">
        <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style={{ 'background-image' : "url('https://images.unsplash.com/photo-1531263939119-4022c6cf273b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80')" }}></div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                <h2 class="text-3xl text-gray-800 font-bold">Encuentra perros <span class="text-indigo-600">Perdidos</span></h2>
                <p class="mt-4 text-gray-600">Podras ver donde queda el albergue más cercano a ti,podras visitarlos y apoyarlos lorem1dsa d asd asd as das d as das d asd as dad asdasd asdasd adasdasdasdasd dsadasdasd dada</p>
                <div class="mt-8">
                    <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Descubrir</a>
                </div>
            </div>
        </div>
    </div> 
</div>

 </>
   
)

export default Banner


 