# Invoice

## Example Usage

```typescript
import { Invoice } from "@digitap/easyapi/models/operations";

let value: Invoice = {
  typeCode: "380",
  number: "<value>",
  issueDate: "<value>",
  currency: "Venezuelan bolívar",
  seller: {
    name: "<value>",
    address: {
      street: "Orn Harbors",
      city: "Thealand",
      country: "Brazil",
    },
  },
  buyer: {
    name: "<value>",
    address: {
      street: "Oberbrunner Dale",
      city: "Apple Valley",
      country: "Bouvet Island",
    },
  },
  lines: [
    {
      id: "<id>",
      quantity: "<value>",
      unitCode: "<value>",
      unitPrice: "<value>",
      vatCategory: "Z",
      item: {
        name: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `typeCode`                                                                                           | [operations.TypeCode](../../models/operations/type-code.md)                                          | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `number`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `issueDate`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dueDate`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `vatTotalRon`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `notes`                                                                                              | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `buyerReference`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `projectReference`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `contractReference`                                                                                  | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `orderReference`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `precedingInvoice`                                                                                   | [operations.PrecedingInvoice](../../models/operations/preceding-invoice.md)                          | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deliveryDate`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deliveryAddress`                                                                                    | [operations.DeliveryAddress](../../models/operations/delivery-address.md)                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `invoicingPeriod`                                                                                    | [operations.InvoicingPeriod](../../models/operations/invoicing-period.md)                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `seller`                                                                                             | [operations.Seller](../../models/operations/seller.md)                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `buyer`                                                                                              | [operations.Buyer](../../models/operations/buyer.md)                                                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payment`                                                                                            | [operations.Payment](../../models/operations/payment.md)                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `allowances`                                                                                         | [operations.Allowance](../../models/operations/allowance.md)[]                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `charges`                                                                                            | [operations.Charge](../../models/operations/charge.md)[]                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `vatExemptions`                                                                                      | [operations.VatExemption](../../models/operations/vat-exemption.md)[]                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `lines`                                                                                              | [operations.PostV1EfacturaInvoicesLine](../../models/operations/post-v1-efactura-invoices-line.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `expectedTotals`                                                                                     | [operations.ExpectedTotals](../../models/operations/expected-totals.md)                              | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |