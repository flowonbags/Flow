
import { fetchAccumulatedFees } from "../../integrations/bags/fees.js";
import { snapshotHolders } from "../../core/snapshot/holders.js";
import { calculateDistribution } from "../../core/distribution/calculate.js";
import { executeDistribution } from "../../core/distribution/execute.js";

export async function runDistributionCycle() {
  const fees = await fetchAccumulatedFees();
  if (!fees) return;
  const holders = await snapshotHolders();
  const payouts = calculateDistribution(fees, holders);
  await executeDistribution(payouts);
}
