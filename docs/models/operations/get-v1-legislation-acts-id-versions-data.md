# GetV1LegislationActsIdVersionsData

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsData = {
  items: [
    {
      version: "<value>",
      kind: "republication",
      effectiveOn: "<value>",
      amendingAct: {
        id: "<id>",
        status: "resolved",
        reason: "<value>",
        reference: "<value>",
      },
      sourceDocumentId: "<id>",
      contentHash: "<value>",
      stored: false,
      coverageNote: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                | [operations.GetV1LegislationActsIdVersionsItem](../../models/operations/get-v1-legislation-acts-id-versions-item.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |