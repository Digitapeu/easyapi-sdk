# GetV1ProcurementCompanyCuiDirectPurchasesData

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiDirectPurchasesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiDirectPurchasesData = {
  total: 252057,
  summary: {
    contractCount: 890230,
    authority: 380870,
    supplier: 756332,
    totalValue: null,
  },
  contracts: [],
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                                               | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `summary`                                                                                                                                             | [operations.GetV1ProcurementCompanyCuiDirectPurchasesSummary](../../models/operations/get-v1-procurement-company-cui-direct-purchases-summary.md)     | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `contracts`                                                                                                                                           | [operations.GetV1ProcurementCompanyCuiDirectPurchasesContract](../../models/operations/get-v1-procurement-company-cui-direct-purchases-contract.md)[] | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |