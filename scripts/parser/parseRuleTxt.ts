import type { defineRule } from "../defineRule"

const TypesAll: ReturnType<typeof defineRule>["condition"]["resourceTypes"] = [
  "main_frame",
  "sub_frame",
  "stylesheet",
  "script",
  "image",
  "object",
  "xmlhttprequest",
  "other"
]

export function parseRuleTxt(rules: string, filePath?: string) {
  const rulesJs: ReturnType<typeof defineRule>[] = []

  rules.split("\n").forEach((line, lineIndex) => {
    line = line.trim()

    if (!line) return

    if (line.startsWith("!") || line.startsWith("#")) return

    if (line.startsWith("||*")) line = line.slice(2)

    if (line.startsWith("||")) {
      const [urlFilter, types = "all"] = line.split("^$", 2)

      const resourceTypes = types === "all" ? TypesAll : types.split(",")

      if (types !== "all") {
        resourceTypes.some((item) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (!TypesAll.includes(item as unknown as any)) {
            // eslint-disable-next-line functional/no-throw-statement
            throw new Error(
              `[Error]: Rule unkept type "${item}" not allowed \n    at ${filePath}:${
                lineIndex + 1
              }:${line.indexOf(item) + 1}`
            )
          }

          return false
        })
      }

      rulesJs.push({
        condition: {
          urlFilter,
          resourceTypes: resourceTypes as typeof TypesAll
        },
        priority: 1
      })
    }
  })

  return rulesJs
}
