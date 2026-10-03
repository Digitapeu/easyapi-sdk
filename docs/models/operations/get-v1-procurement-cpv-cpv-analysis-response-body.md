# GetV1ProcurementCpvCpvAnalysisResponseBody

Success

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvAnalysisResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvAnalysisResponseBody = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [operations.GetV1ProcurementCpvCpvAnalysisData](../../models/operations/get-v1-procurement-cpv-cpv-analysis-data.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |