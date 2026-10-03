# GetV1ProcurementCompanyCuiDirectPurchasesResponse

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiDirectPurchasesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiDirectPurchasesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      total: 568670,
      summary: {
        contractCount: 890230,
        authority: 380870,
        supplier: 756332,
        totalValue: null,
      },
      contracts: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                    | Record<string, *string*[]>                                                                                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `result`                                                                                                                                                     | [operations.GetV1ProcurementCompanyCuiDirectPurchasesResponseBody](../../models/operations/get-v1-procurement-company-cui-direct-purchases-response-body.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |