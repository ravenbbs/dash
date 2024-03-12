import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UpgradeButton from "@/components/UpgradeButton";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const pricingItems = [
    {
      plan: "Gratuito",
      tagline: "Para proyectos pequeños o usuarios primerizos.",
      quota: 10,
      features: [
        {
          text: "5 páginas por PDF",
          footnote: "La cantidad máxima de páginas por archivo PDF.",
        },
        {
          text: "4MB limite de tamaño",
          footnote: "El tamaño máximo de un único archivo PDF.",
        },
        {
          text: "Interfaz optimizada para dispositivos móviles",
        },
        {
          text: "Respuestas de mayor calidad",
          footnote: "Algoritmo mejorado para producir mejores respuestas.",
          negative: true,
        },
        {
          text: "Soporte prioritario",
          negative: true,
        },
      ],
    },
    {
      plan: "Premium",
      tagline: "Para proyectos más grandes con mayores necesidades.",
      quota: PLANS.find((p) => p.slug === "premium")!.quota,
      features: [
        {
          text: "25 páginas por PDF",
          footnote: "La cantidad máxima de páginas por archivo PDF.",
        },
        {
          text: "16MB limite de tamaño",
          footnote: "El tamaño máximo de un único archivo PDF.",
        },
        {
          text: "Interfaz optimizada para dispositivos móviles",
        },
        {
          text: "Respuestas de mayor calidad",
          footnote: "Algoritmo mejorado para producir mejores respuestas.",
        },
        {
          text: "Soporte prioritario",
        },
      ],
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">Precios</h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Puedes mejorar tu plan para acceder a funcionalidad premium de
            nuestro servicio.
          </p>
        </div>
        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price =
                PLANS.find((p) => p.slug === plan.toLocaleLowerCase())?.price
                  .amount || 0;
              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl bg-white", {
                    "border-2 border-blue-600 shadow-blue-200":
                      plan === "Premium",
                    "border border-gray-200": plan !== "Premium",
                  })}
                >
                  {plan === "Premium" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      Actualizar plan
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="text-gray-500">{tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      ${price}
                    </p>
                    <p className="text-gray-500">Mensual</p>
                  </div>
                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()} PDFs/m</p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-5 w-5 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Cantidad de PDFs que puedes subir al mes.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-500" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray", {
                                "text-gray-600": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-5 w-5 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray", {
                              "text-gray-600": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    {plan === "Gratuito" ? (
                      <Link
                        href={user ? '/dashboard' : '/sign-in'}
                        className={buttonVariants({
                          className: "w-full",
                          variant: 'secondary'
                        })}
                      >
                        {user ? "Actualizar plan" : "Iniciar sesión"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    ) : user ? (
                      <UpgradeButton/>
                    ) : (
                      <Link
                        href={"/sign-in"}
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {user ? "Actualizar plan" : "Iniciar sesión"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
