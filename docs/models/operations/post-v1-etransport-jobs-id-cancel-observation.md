# PostV1EtransportJobsIdCancelObservation

## Example Usage

```typescript
import { PostV1EtransportJobsIdCancelObservation } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportJobsIdCancelObservation = {
  watchFrom: new Date("2026-11-25T22:13:02.900Z"),
  until: new Date("2026-04-07T12:06:37.331Z"),
  checks: 709748,
  inconclusive: 219688,
  lastCheckAt: new Date("2025-07-30T06:09:32.417Z"),
  lastReason: "<value>",
  lastConclusiveAt: new Date("2025-12-28T03:52:00.796Z"),
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