const publication_date = () => {
  const datetime = Date.now()
  const dateObject = new Date(datetime)

  const js = {
    // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#publication_date
    type: "element",
    name: "publication_date",
    attributes: {
      media_type: "online",
    },
    elements: [
      {
        type: "element",
        name: "month",
        elements: [
          {
            type: "text",
            text: dateObject.getUTCDay().toString().padStart(2, "0"),
          },
        ],
      },
      {
        type: "element",
        name: "day",
        elements: [
          {
            type: "text",
            text: dateObject.getUTCMonth().toString().padStart(2, "0"),
          },
        ],
      },
      {
        type: "element",
        name: "year",
        elements: [
          {
            type: "text",
            text: dateObject.getUTCFullYear().toString(),
          },
        ],
      },
    ],
  }

  return js
}
export default publication_date
