# GetV1FinancialInstitutionsPaymentInstitution

## Example Usage

```typescript
import { GetV1FinancialInstitutionsPaymentInstitution } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsPaymentInstitution = {
  entityCode: "<value>",
  type: "e_money_institution",
  presence: "authorised_in_romania",
  homeAuthority: "<value>",
  country: "Brunei Darussalam",
  nationalCode: "<value>",
  names: [],
  commercialNames: [
    "<value 1>",
  ],
  addresses: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  cities: [],
  postalCodes: [
    "<value 1>",
    "<value 2>",
  ],
  authorisationDates: [
    "<value 1>",
    "<value 2>",
  ],
  branchStatus: "<value>",
  parent: {
    type: "<value>",
    entityCode: "<value>",
  },
  servicesInRomania: [
    "<value 1>",
    "<value 2>",
  ],
  entityVersion: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `entityCode`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `type`                                                                      | [operations.TypeResponse](../../models/operations/type-response.md)         | :heavy_check_mark:                                                          | N/A                                                                         |
| `presence`                                                                  | [operations.PresenceResponse](../../models/operations/presence-response.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `homeAuthority`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `country`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `nationalCode`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `names`                                                                     | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `commercialNames`                                                           | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `addresses`                                                                 | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `cities`                                                                    | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `postalCodes`                                                               | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `authorisationDates`                                                        | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `branchStatus`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `parent`                                                                    | [operations.Parent](../../models/operations/parent.md)                      | :heavy_check_mark:                                                          | N/A                                                                         |
| `servicesInRomania`                                                         | *string*[]                                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `entityVersion`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |