# GetV1ProcurementContractsNumberResponse

## Example Usage

```typescript
import { GetV1ProcurementContractsNumberResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementContractsNumberResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      contractNumber: "<value>",
      date: "2024-05-20",
      authorityCui: 7871.23,
      authorityName: "<value>",
      supplierCui: 3725.92,
      supplierName: null,
      cpvCode: "<value>",
      description: "effector eek cheerfully",
      value: 2028.35,
      procedureType: "<value>",
      link: "<value>",
      source: "<value>",
      sourceUrl: "https://squiggly-mallard.info/",
      authorityAddress: "<value>",
      authorityCity: "<value>",
      supplierAddress: "<value>",
      supplierCity: null,
      currency: "Djibouti Franc",
      lots: [
        "<value 1>",
        "<value 2>",
      ],
      publicationDate: null,
      tenderDate: "<value>",
      awardDate: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                              | Record<string, *string*[]>                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `result`                                                                                                                               | [operations.GetV1ProcurementContractsNumberResponseBody](../../models/operations/get-v1-procurement-contracts-number-response-body.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |