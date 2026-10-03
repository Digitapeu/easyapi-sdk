# Parcel

## Example Usage

```typescript
import { Parcel } from "@digitap/easyapi/models/operations";

let value: Parcel = {
  inspireId: "<id>",
  nationalCadastralReference: "<value>",
  label: "<value>",
  areaSqm: null,
  county: "Adams County",
  uat: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `inspireId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `nationalCadastralReference` | *string*                     | :heavy_check_mark:           | N/A                          |
| `label`                      | *string*                     | :heavy_check_mark:           | N/A                          |
| `areaSqm`                    | *number*                     | :heavy_check_mark:           | N/A                          |
| `geometry`                   | *any*                        | :heavy_minus_sign:           | N/A                          |
| `county`                     | *string*                     | :heavy_check_mark:           | N/A                          |
| `uat`                        | *string*                     | :heavy_check_mark:           | N/A                          |