import React from 'react'
const QA = () => {

  return (
  <div>
  <section className="text-gray-700">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Estas son las preguntas más frecuentes sobre cómo funciona nuestro proyecto y en que forma podemos ayudar.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="w-full lg:w-1/2 px-4 py-2">
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              ¿Qué es radi?
            </summary>

            <span>
              Radi es una plataforma creada para unificar las demas paginas que existen de adopcion, ademas agregamos funciones como albergues y mascotas que se han perdido.Es una plataforma sin fines de lucro.
              destinada a poder ayudar de corazón a las mascotas.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
              ¿Tiene costo adoptar un perro?
            </summary>

            <span>
              No, el adoptar un perro no tiene ningun costo, sin embargo el usuario puede hacer un donativo si lo desea para que el proyecto siga creciendo.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              ¿En que me puede ayudar la plataforma?
            </summary>

            <span>
              Laboris qui labore cillum culpa in sunt quis sint veniam.
              Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
              minim velit nostrud pariatur culpa magna in aute.
            </span>
          </details>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-2">
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              ¿Puedo registrar mi mascota sin darla en adopción?
            </summary>

            <span className="px-4 py-2">
              Laboris qui labore cillum culpa in sunt quis sint veniam.
              Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
              minim velit nostrud pariatur culpa magna in aute.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              ¿Como funciona el registro del albergue?
            </summary>

            <span className="px-4 py-2">
              Laboris qui labore cillum culpa in sunt quis sint veniam.
              Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
              minim velit nostrud pariatur culpa magna in aute.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              ¿Como ayudar si encontre o creo encontrar a un perro perdido?
            </summary>

            <span className="px-4 py-2">
              Laboris qui labore cillum culpa in sunt quis sint veniam.
              Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
              minim velit nostrud pariatur culpa magna in aute.
            </span>
          </details>
        </div>
      </div>
  <p className="text-center"><span className="font-bold">¿Tienes dudas?</span> no hay problema, <a href="/contactanos" className="text-purple-700 font-bold" >mándanos  un mensaje</a>, te lo resolvemos lo más pronto posible.</p>
    </div>
  </section>
</div>
)
  }

export default QA