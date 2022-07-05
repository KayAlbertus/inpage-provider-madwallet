module.exports = {
  errors: {
    disconnected: () => `MadWalletExtension: Lost connection to MadWalletExtension background process.`,
    sendSiteMetadata: () => `MadWalletExtension: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method) => `MadWalletExtension: The MadWalletExtension Web3 object does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: () => 'Must provide a Node.js-style duplex stream.',
    invalidOptions: (maxEventListeners, shouldSendMetadata) => `Invalid options. Received: { maxEventListeners: ${maxEventListeners}, shouldSendMetadata: ${shouldSendMetadata} }`,
    invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
    invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: (method) => `'args.logger' must include required method '${method}'.`,
  },
  warnings: {
    // TODO:deprecation:remove
    autoRefreshDeprecation: `MadWalletExtension: MadWalletExtension will soon stop reloading pages on network change.\nFor more information, see: https://docs.metamask.io/guide/ethereum-provider.html#ethereum-autorefreshonnetworkchange \nSet 'ethereum.autoRefreshOnNetworkChange' to 'false' to silence this warning.`,
    // deprecated methods
    enableDeprecation: `MadWalletExtension: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `MadWalletExtension: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      chainIdChanged: `MadWalletExtension: The event 'chainIdChanged' is deprecated and WILL be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      close: `MadWalletExtension: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      data: `MadWalletExtension: The event 'data' is deprecated and may be removed in the future.`,
      networkChanged: `MadWalletExtension: The event 'networkChanged' is deprecated and may be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      notification: `MadWalletExtension: The event 'notification' is deprecated and may be removed in the future. Please use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    },
    // misc
    experimentalMethods: `MadWalletExtension: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
    publicConfigStore: `MadWalletExtension: The property 'publicConfigStore' is deprecated and WILL be removed in the future.`,
  },
}
