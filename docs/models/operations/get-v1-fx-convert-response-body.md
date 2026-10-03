# GetV1FxConvertResponseBody

Success

## Example Usage

```typescript
import { GetV1FxConvertResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1FxConvertResponseBody = {
  data: {
    from: "<value>",
    to: "<value>",
    amount: 1551.04,
    result: 5029.62,
    rate: 9192.77,
    date: "2024-12-24",
    source: "BNR",
    checkedAt: new Date("2026-07-10T15:02:48.015Z"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.GetV1FxConvertData](../../models/operations/get-v1-fx-convert-data.md) | :heavy_check_mark:                                                                 | N/A                                                                                |