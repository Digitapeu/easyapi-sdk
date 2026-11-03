# GetV1CaseLawDecisionsChangesRequest

## Example Usage

```typescript
import { GetV1CaseLawDecisionsChangesRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CaseLawDecisionsChangesRequest = {
  since: new Date("2024-02-06T06:50:33.876Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `since`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |