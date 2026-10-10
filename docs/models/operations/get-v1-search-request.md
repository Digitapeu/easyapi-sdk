# GetV1SearchRequest

## Example Usage

```typescript
import { GetV1SearchRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1SearchRequest = {
  q: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Company name or part of it (1-200 characters).                                                                                         |
| `limit`                                                                                                                                | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Maximum rows requested from the provider (1-50, default 20); a page can hold fewer.                                                    |
| `county`                                                                                                                               | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Restrict to one county (judet).                                                                                                        |
| `offset`                                                                                                                               | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Passed to the provider (0-10000). Pages may overlap or repeat entries; results are a relevance-ordered sample, not an enumerable list. |