import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

interface PageProps {
  params: {
    fileid: string
  }
}

const Page = async ({ params }: PageProps)  => {

  const {fileid} = params

  const {getUser} = getKindeServerSession()
  const user = await getUser()

  if(!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)


  return (
    <div>
      {fileid}
    </div>
  )

}

export default Page