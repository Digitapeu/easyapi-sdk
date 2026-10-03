# GetV1GeoParcelsResponse

## Example Usage

```typescript
import { GetV1GeoParcelsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1GeoParcelsResponse = {
  headers: {
    "key": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `headers`                                                                                             | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `result`                                                                                              | [operations.GetV1GeoParcelsResponseBody](../../models/operations/get-v1-geo-parcels-response-body.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |