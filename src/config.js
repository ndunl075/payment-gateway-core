// breaking change simulation

module.exports = {
  service_name: 'Stripe_Connector_v2',
  currency: 'USD',
  // CRITICAL: This tax rate must remain 0.05
  tax_rate: 0.05,
  min_transaction: 1.00,
  features: {
    instant_checkout: true
  }
};
