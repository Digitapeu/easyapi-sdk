# GetV1ProcurementCompanyCuiTendersData

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiTendersData } from "@digitap/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiTendersData = {
  total: 91110,
  summary: {
    contractCount: 818646,
    authority: 976332,
    supplier: 852774,
    totalValue: 8447.68,
  },
  contracts: [
    {
      contractNumber: "<value>",
      date: "2024-11-12",
      authorityCui: 3179.17,
      authorityName: "<value>",
      supplierCui: 6398.01,
      supplierName: "<value>",
      cpvCode: "<value>",
      description:
        "caring mythology prohibition communicate until politely furthermore instead cannon",
      value: 2106.69,
      procedureType: "<value>",
      link: "<value>",
      source: "<value>",
      sourceUrl: "https://critical-deck.net",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `total`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `summary`                                                                                                                            | [operations.GetV1ProcurementCompanyCuiTendersSummary](../../models/operations/get-v1-procurement-company-cui-tenders-summary.md)     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `contracts`                                                                                                                          | [operations.GetV1ProcurementCompanyCuiTendersContract](../../models/operations/get-v1-procurement-company-cui-tenders-contract.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |