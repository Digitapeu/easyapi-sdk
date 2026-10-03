# GetV1ProcurementCpvCpvContractsResponse

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvContractsResponse } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvContractsResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [],
  },
  result: {
    data: {
      total: 171637,
      summary: {
        contractCount: 963255,
        authority: 728047,
        supplier: 830824,
        totalValue: 9432.94,
      },
      contracts: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [operations.GetV1ProcurementCpvCpvContractsResponseBody](../../models/operations/get-v1-procurement-cpv-cpv-contracts-response-body.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |