# PostV1EfacturaJobsIdCancelObservation

## Example Usage

```typescript
import { PostV1EfacturaJobsIdCancelObservation } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaJobsIdCancelObservation = {
  watchFrom: null,
  until: new Date("2026-10-22T22:56:38.456Z"),
  checks: 170072,
  inconclusive: 635005,
  lastCheckAt: new Date("2024-08-24T07:46:57.400Z"),
  lastReason: "<value>",
  lastConclusiveAt: new Date("2026-04-03T00:51:45.042Z"),
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