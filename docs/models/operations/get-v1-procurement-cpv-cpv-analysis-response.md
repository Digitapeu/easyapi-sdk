# GetV1ProcurementCpvCpvAnalysisResponse

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvAnalysisResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvAnalysisResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      cpv: "<value>",
      totalContracts: 973225,
      totalValueRon: 54.04,
      uniqueSuppliers: 629217,
      uniqueAuthorities: 485255,
      perYear: [],
      source: "<value>",
      sourceUrl: "https://mundane-haircut.biz",
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                             | Record<string, *string*[]>                                                                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `result`                                                                                                                              | [operations.GetV1ProcurementCpvCpvAnalysisResponseBody](../../models/operations/get-v1-procurement-cpv-cpv-analysis-response-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |