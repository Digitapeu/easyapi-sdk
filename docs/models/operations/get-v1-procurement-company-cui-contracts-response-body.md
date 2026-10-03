# GetV1ProcurementCompanyCuiContractsResponseBody

Success

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiContractsResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiContractsResponseBody = {
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
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                         | [operations.GetV1ProcurementCompanyCuiContractsData](../../models/operations/get-v1-procurement-company-cui-contracts-data.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |