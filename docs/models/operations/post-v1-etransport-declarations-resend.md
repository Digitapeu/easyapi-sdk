# PostV1EtransportDeclarationsResend

## Example Usage

```typescript
import { PostV1EtransportDeclarationsResend } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportDeclarationsResend = {
  eligible: true,
  refusalReason: "copy_exists",
  request: {
    evidenceVersion: 559990,
    state: "refused",
    refusalReason: "flag_disabled",
    actorKind: "operator",
    actorRole: "<value>",
    requestedAt: new Date("2025-11-24T16:41:04.005Z"),
    decidedAt: new Date("2025-09-11T22:12:07.643Z"),
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                                | *boolean*                                                                                                                                 | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `refusalReason`                                                                                                                           | [operations.PostV1EtransportDeclarationsRefusalReason](../../models/operations/post-v1-etransport-declarations-refusal-reason.md)         | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `request`                                                                                                                                 | [operations.EtransportPostV1EtransportDeclarationsRequest](../../models/operations/etransport-post-v1-etransport-declarations-request.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |