
export function calculateDistribution(total, holders) {
  return holders.map(h => ({
    address: h.address,
    amount: total * h.percent
  }));
}
