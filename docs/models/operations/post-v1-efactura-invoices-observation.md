# PostV1EfacturaInvoicesObservation

## Example Usage

```typescript
import { PostV1EfacturaInvoicesObservation } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesObservation = {
  watchFrom: new Date("2024-12-01T17:35:00.328Z"),
  until: new Date("2025-11-13T08:37:19.501Z"),
  checks: 609590,
  inconclusive: 267994,
  lastCheckAt: new Date("2024-07-16T15:08:18.256Z"),
  lastReason: null,
  lastConclusiveAt: new Date("2025-01-03T00:11:09.374Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `watchFrom`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checks`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inconclusive`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastCheckAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastReason`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastConclusiveAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |