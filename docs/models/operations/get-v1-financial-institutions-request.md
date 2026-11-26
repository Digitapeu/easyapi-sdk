# GetV1FinancialInstitutionsRequest

## Example Usage

```typescript
import { GetV1FinancialInstitutionsRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `category`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Published category, matched exactly ignoring case, e.g. `Credit Institution`. |
| `q`                                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Substring of the name, ignoring case and Romanian diacritics.                 |