# PostV1EtransportDeclarationsObservation

## Example Usage

```typescript
import { PostV1EtransportDeclarationsObservation } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportDeclarationsObservation = {
  watchFrom: new Date("2026-09-25T13:51:46.162Z"),
  until: new Date("2026-08-02T16:36:05.631Z"),
  checks: 712597,
  inconclusive: 769890,
  lastCheckAt: new Date("2025-12-24T06:14:14.776Z"),
  lastReason: "<value>",
  lastConclusiveAt: new Date("2024-07-21T10:32:07.502Z"),
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