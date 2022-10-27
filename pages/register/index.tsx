import Link from "next/link"
import { getNextPageLink, PageName, registrationFlow } from "@/config/flow"
import { Button } from "@chakra-ui/react"

export default function Page() {
  const pageDetails = registrationFlow[PageName.Intro]
  const nextPageLink = getNextPageLink(pageDetails.nextPage[0])

  return (
    <div>
      <div>Welcome To Waave</div>
      <Link href={nextPageLink}>
        <Button>
          Sign up
        </Button>
      </Link>
    </div>
  )
}
