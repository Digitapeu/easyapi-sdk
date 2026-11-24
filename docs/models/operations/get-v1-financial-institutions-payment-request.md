# GetV1FinancialInstitutionsPaymentRequest

## Example Usage

```typescript
import { GetV1FinancialInstitutionsPaymentRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsPaymentRequest = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                          | [operations.QueryParamType](../../models/operations/query-param-type.md)                                                        | :heavy_minus_sign:                                                                                                              | Kind of institution.                                                                                                            |
| `presence`                                                                                                                      | [operations.QueryParamPresence](../../models/operations/query-param-presence.md)                                                | :heavy_minus_sign:                                                                                                              | How the institution is present in Romania: authorised by the NBR, a branch in Romania, or passported in from another authority. |
| `q`                                                                                                                             | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Substring of any name or commercial name, ignoring case and Romanian diacritics.                                                |
| `nationalCode`                                                                                                                  | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Exact match on the national registration code (for Romanian institutions, the CUI).                                             |