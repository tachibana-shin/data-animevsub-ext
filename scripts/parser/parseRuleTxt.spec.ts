import { describe, test, expect } from "vitest"
import { parseRuleTxt } from "./parseRuleTxt"

describe("parseRuleTxt", () => {
  test("no type", () => {
    expect(parseRuleTxt(`||www.google.com/*`)).toEqual([
      {
        condition: {
          urlFilter: "||www.google.com/*",
          resourceTypes: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other"
          ]
        },
        priority: 1
      }
    ])
  })
  test("type all", () => {
    expect(parseRuleTxt(`||www.google.com/*^$all`)).toEqual([
      {
        condition: {
          urlFilter: "||www.google.com/*",
          resourceTypes: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other"
          ]
        },
        priority: 1
      }
    ])
  })
  test("type scoop", () => {
    expect(parseRuleTxt(`||www.google.com/*^$script,stylesheet`)).toEqual([
      {
        condition: {
          urlFilter: "||www.google.com/*",
          resourceTypes: ["script", "stylesheet"]
        },
        priority: 1
      }
    ])
  })
  test("type unknown", () => {
    expect(() => parseRuleTxt(`||www.google.com/*^$script,unknown`)).toThrow()
  })
})
