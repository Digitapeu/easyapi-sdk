import { createClient } from "@easyapi/sdk";

// Reads the profile written by `easyapi setup` (or EASYAPI_* variables) and calls two endpoints.
const client = createClient();

const me = await client.me();
console.log(`${me.businessName} on tier ${me.tier.code}; scopes: ${me.scopes.join(", ")}`);

if (me.scopes.includes("company:read")) {
  const company = await client.company.get("43020532");
  console.log(`${company.name} (VAT active: ${company.vat.vatActive})`);
}
