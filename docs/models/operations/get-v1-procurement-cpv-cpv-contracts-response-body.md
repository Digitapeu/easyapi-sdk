# GetV1ProcurementCpvCpvContractsResponseBody

Success

## Example Usage

```typescript
import { GetV1ProcurementCpvCpvContractsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ProcurementCpvCpvContractsResponseBody = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [operations.GetV1ProcurementCpvCpvContractsData](../../models/operations/get-v1-procurement-cpv-cpv-contracts-data.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |