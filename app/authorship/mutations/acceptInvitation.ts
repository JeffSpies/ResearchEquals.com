import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async ({ id, suffix }) => {
  await db.authorship.update({
    where: {
      id,
    },
    data: {
      acceptedInvitation: true,
    },
  })

  const module = await db.module.findFirst({
    where: {
      suffix,
    },
    include: {
      authors: {
        include: {
          workspace: true,
        },
      },
    },
  })

  return module!
})
