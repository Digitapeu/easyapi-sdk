# MatchMatch

## Example Usage

```typescript
import { MatchMatch } from "@digitap.eu/easyapi/models/operations";

let value: MatchMatch = {
  confidence: "exact",
  party: {
    name: "<value>",
    role: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `confidence`                                                                                                | [operations.Confidence](../../models/operations/confidence.md)                                              | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `party`                                                                                                     | [operations.GetV1CompanyCuiLitigationParty](../../models/operations/get-v1-company-cui-litigation-party.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |