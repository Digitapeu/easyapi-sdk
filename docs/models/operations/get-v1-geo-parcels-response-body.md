# GetV1GeoParcelsResponseBody

Success

## Example Usage

```typescript
import { GetV1GeoParcelsResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1GeoParcelsResponseBody = {
  data: {
    parcels: [
      {
        inspireId: "<id>",
        nationalCadastralReference: "<value>",
        label: "<value>",
        areaSqm: 724.02,
        county: null,
        uat: "<value>",
      },
    ],
    source: "ancpi-inspire",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.GetV1GeoParcelsData](../../models/operations/get-v1-geo-parcels-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |