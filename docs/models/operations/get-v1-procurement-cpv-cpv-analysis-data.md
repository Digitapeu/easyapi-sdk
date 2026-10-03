# GetV1ProcurementCpvCpvAnalysisData

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvAnalysisData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvAnalysisData = {
  cpv: "<value>",
  totalContracts: 931890,
  totalValueRon: 9138.69,
  uniqueSuppliers: 639835,
  uniqueAuthorities: 475624,
  perYear: [
    {
      year: 340339,
      contracts: 116536,
      valueRon: 3734.69,
    },
  ],
  source: "<value>",
  sourceUrl: "https://alienated-midwife.info/",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `cpv`                                                       | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `totalContracts`                                            | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `totalValueRon`                                             | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `uniqueSuppliers`                                           | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `uniqueAuthorities`                                         | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `perYear`                                                   | [operations.PerYear](../../models/operations/per-year.md)[] | :heavy_check_mark:                                          | N/A                                                         |
| `source`                                                    | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `sourceUrl`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |