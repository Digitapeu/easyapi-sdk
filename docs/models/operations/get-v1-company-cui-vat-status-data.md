# GetV1CompanyCuiVatStatusData

## Example Usage

```typescript
import { GetV1CompanyCuiVatStatusData } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiVatStatusData = {
  cui: "<value>",
  vatActive: false,
  vatOnPayment: true,
  vatNumber: "<value>",
  active: true,
  checkedAt: new Date("2025-08-09T20:42:37.092Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cui`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatActive`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatOnPayment`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vatNumber`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |