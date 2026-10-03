import { fromMachineCredential } from "@digitap.eu/easyapi";

// Reads the profile written by `easyapi setup` (or EASYAPI_* variables) and calls two endpoints.
const easyapi = await fromMachineCredential();

const { data: me } = (await easyapi.me.get()).result;
console.log(`${me.businessName} on tier ${me.tier.code}; scopes: ${me.scopes.join(", ")}`);

if (me.scopes.includes("company:read")) {
  const vat = await easyapi.company.vatStatus("43020532");
  console.log(vat.result);
}
