import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Dash funcionando!!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chatea con tus <span className="text-blue-600">documentos</span> al
          instante.
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Con dash, la lectura se vuelve más fácil y productiva.
          <br />
          Desbloquea el potencial y aprovecha al máximo la información de tus
          documentos.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Empieza ya! <ArrowRight className="ml-2 h-5 w-5 " />
        </Link>
      </MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 31%, 100% 0, 69% 56%, 100% 100%, 49% 60%, 0 100%, 22% 54%, 0 0, 38% 32%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9290ff] to-[#a2f8ed] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
            ></div>
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={"/dashboard-preview.jpg"}
                    alt="Previsualización de el producto"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 31%, 100% 0, 69% 56%, 100% 100%, 49% 60%, 0 100%, 22% 54%, 0 0, 38% 32%)",
              }}
              className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1 rotate-[10deg] bg-gradient-to-tr from-[#9290ff] to-[#a2f8ed] opacity-30 sm:left-[calc(50%-6rem)] sm:w-[72.1875rem] "
            ></div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 px-4">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Empieza a chatear al instante
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              La herramienta perfecta para estudiantes, investigadores y
              profesionales.
            </p>
          </div>
        </div>
        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:apace-x-12 md:space-y-0">
          <li className="md:flex-1 mx-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">
                Paso 1
              </span>
              <span className="text-xl font-semibold">
                Regístrate para obtener una cuenta
              </span>
              <span className="mt-2 text-zinc-700">
                Puedes comenzar con un plan gratuito o un{' '}
                <Link
                href={'/pricing'}
                className="text-blue-700 underline-offset-2"
                >
                  plan pro                
                </Link>
              </span>
            </div>
          </li>
          <li className="md:flex-1 mx-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">
                Paso 2
              </span>
              <span className="text-xl font-semibold">
                Sube tu archivo PDF
              </span>
              <span className="mt-2 text-zinc-700">
              Procesaremos su archivo y lo prepararemos para que pueda chatear con él.
              </span>
            </div>
          </li>
          <li className="md:flex-1 mx-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">
                Paso 3
              </span>
              <span className="text-xl font-semibold">
                Empieza a hacer preguntas
              </span>
              <span className="mt-2 text-zinc-700">
                Es así de simple. Pruebe dash ahora - realmente le llevará menos de un minuto.
              </span>
            </div>
          </li>
        </ol>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={"/file-upload-preview.jpg"}
                    alt="Previsualización de el producto"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  ></Image>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}
