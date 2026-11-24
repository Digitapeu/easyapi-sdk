# GetV1RatesPolicyRequest

## Example Usage

```typescript
import { GetV1RatesPolicyRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesPolicyRequest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `from`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | First day of the range for `changes`, YYYY-MM-DD. Omit to start at the first observation. |
| `to`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | Last day of the range for `changes`, YYYY-MM-DD. Omit to end at `asOf`.                   |