# GetV1LegislationBillsIdDocumentsData

## Example Usage

```typescript
import { GetV1LegislationBillsIdDocumentsData } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsIdDocumentsData = {
  items: [
    {
      id: "<id>",
      kind: "other",
      label: "<value>",
      fileUrl: "https://voluminous-extension.net",
      fileSha256: "<value>",
      bodyText: "<value>",
      sourceUrl: "https://insignificant-dwell.name",
      sourceKind: "cdep",
      documentVersion: "<value>",
      retrievedAt: new Date("2025-11-24T05:14:59.717Z"),
      contentHash: "<value>",
      coverageNote: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                    | [operations.GetV1LegislationBillsIdDocumentsItem](../../models/operations/get-v1-legislation-bills-id-documents-item.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |