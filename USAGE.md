<!-- Start SDK Example Usage [usage] -->
```typescript
import { EasyApi } from "@digitap.eu/easyapi";

const easyApi = new EasyApi();

async function run() {
  const result = await easyApi.health.check();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->