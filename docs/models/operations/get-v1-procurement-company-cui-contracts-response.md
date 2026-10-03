# GetV1ProcurementCompanyCuiContractsResponse

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiContractsResponse } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiContractsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      total: 467008,
      summary: {
        contractCount: 688697,
        authority: 71804,
        supplier: 640971,
        totalValue: 5610.45,
      },
      contracts: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                       | Record<string, *string*[]>                                                                                                                      | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `result`                                                                                                                                        | [operations.GetV1ProcurementCompanyCuiContractsResponseBody](../../models/operations/get-v1-procurement-company-cui-contracts-response-body.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |