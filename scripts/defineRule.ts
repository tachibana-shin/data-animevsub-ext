export function defineRule(
  rule: Pick<chrome.declarativeNetRequest.Rule, "priority"> & {
    condition: Omit<
      chrome.declarativeNetRequest.RuleCondition,
      "resourceTypes"
    > & {
      resourceTypes: (
        | "main_frame"
        | "sub_frame"
        | "stylesheet"
        | "script"
        | "image"
        | "font"
        | "object"
        | "xmlhttprequest"
        | "ping"
        | "csp_report"
        | "media"
        | "websocket"
        | "other"
      )[];
    };
  }
) {
  return rule;
}
