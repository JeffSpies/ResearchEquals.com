import db from "db"

export default async function getNodes() {
  const modules = await db.module.findMany({
    where: {
      published: true,
    },
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
    include: {
      type: true,
      parents: {
        include: {
          type: true,
        },
      },
    },
  })

  const nodesData = modules.map((module) => {
    return {
      id: `${module.prefix}/${module.suffix}`,
      data: { label: `${module.prefix}/${module.suffix}`, module },
      position: { x: 250, y: 250 },
    }
  })

  let edgesData = [] as any
  modules.map((module) => {
    if (module.parents.length > 0) {
      module.parents.map((parent) => {
        edgesData.push({
          id: `e${parent.prefix}/${parent.suffix}-${module.prefix}/${module.suffix}}`,
          source: `${parent.prefix}/${parent.suffix}`,
          target: `${module.prefix}/${module.suffix}`,
          animated: true,
        })
      })
    }
  })

  return { nodesData, edgesData }
}
