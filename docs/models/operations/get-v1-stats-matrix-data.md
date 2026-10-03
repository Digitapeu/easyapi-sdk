# GetV1StatsMatrixData

## Example Usage

```typescript
import { GetV1StatsMatrixData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsMatrixData = {
  matrix: "<value>",
  name: "<value>",
  periods: [
    "<value 1>",
  ],
  source: "ins-tempo",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `matrix`           | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `periods`          | *string*[]         | :heavy_check_mark: | N/A                |
| `data`             | *any*              | :heavy_minus_sign: | N/A                |
| `source`           | *"ins-tempo"*      | :heavy_check_mark: | N/A                |