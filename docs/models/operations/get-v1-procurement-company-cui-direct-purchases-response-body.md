# GetV1ProcurementCompanyCuiDirectPurchasesResponseBody

Success

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiDirectPurchasesResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiDirectPurchasesResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                      | [operations.GetV1ProcurementCompanyCuiDirectPurchasesData](../../models/operations/get-v1-procurement-company-cui-direct-purchases-data.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |