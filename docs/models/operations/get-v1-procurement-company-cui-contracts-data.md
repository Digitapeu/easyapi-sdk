# GetV1ProcurementCompanyCuiContractsData

## Example Usage

```typescript
import { GetV1ProcurementCompanyCuiContractsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCompanyCuiContractsData = {
  total: 922063,
  summary: {
    contractCount: 688697,
    authority: 71804,
    supplier: 640971,
    totalValue: 5610.45,
  },
  contracts: [
    {
      contractNumber: "<value>",
      date: "2024-06-11",
      authorityCui: 5383.23,
      authorityName: "<value>",
      supplierCui: 726.8,
      supplierName: null,
      cpvCode: "<value>",
      description: "oxygenate windy considering",
      value: 7340.98,
      procedureType: "<value>",
      link: "<value>",
      source: "<value>",
      sourceUrl: "https://proud-crocodile.name",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                                  | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `summary`                                                                                                                                | [operations.GetV1ProcurementCompanyCuiContractsSummary](../../models/operations/get-v1-procurement-company-cui-contracts-summary.md)     | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `contracts`                                                                                                                              | [operations.GetV1ProcurementCompanyCuiContractsContract](../../models/operations/get-v1-procurement-company-cui-contracts-contract.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |