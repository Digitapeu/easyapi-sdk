# GetV1ProcurementCpvCpvContractsData

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvContractsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvContractsData = {
  total: 178391,
  summary: {
    contractCount: 963255,
    authority: 728047,
    supplier: 830824,
    totalValue: 9432.94,
  },
  contracts: [
    {
      contractNumber: "<value>",
      date: "2024-07-09",
      authorityCui: 4284.95,
      authorityName: "<value>",
      supplierCui: 1066,
      supplierName: "<value>",
      cpvCode: "<value>",
      description: "hexagon nervous guilty shell phew before mystify",
      value: 3909.95,
      procedureType: "<value>",
      link: null,
      source: "<value>",
      sourceUrl: "https://gifted-papa.org/",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `summary`                                                                                                                        | [operations.GetV1ProcurementCpvCpvContractsSummary](../../models/operations/get-v1-procurement-cpv-cpv-contracts-summary.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `contracts`                                                                                                                      | [operations.GetV1ProcurementCpvCpvContractsContract](../../models/operations/get-v1-procurement-cpv-cpv-contracts-contract.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |