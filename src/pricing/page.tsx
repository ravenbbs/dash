import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Page = () => {
 
  const {getUser} = getKindeServerSession()
  const user = getUser()

  return (
    <>
    <MaxWidthWrapper>
      <div>
        <h1>
          Precios
        </h1>
        <p>
          Puedes mejorar tu plan para acceder a funcionalidad premium de nuestro servicio.
        </p>
      </div>
    </MaxWidthWrapper>
    </>
  )

}