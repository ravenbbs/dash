import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

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
        <div className="pt-12 grid grid-cols-1 pag-10 lg:grid-cols-2"></div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page