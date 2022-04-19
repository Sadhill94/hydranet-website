import { IProductsSectionTranslations } from '../../namepaces';

const dexProduct: IProductsSectionTranslations = {
  subtitle: 'product',
  title: 'Hydra DEX - TESTNET',
  paragraphs: [
    'Layer 1: On-chain intranet work transactions. Traditional, limited to one coin.',
    'Layer 2: Off-chain intranet work transactions. Nearly instant, limited to one coin',
    'Layer 3: Cross-chain internet work transactions. Nearly instant, compatible with multiple coins on multiple networks.',
  ],
  'current-build': 'Lazarus build',
};

const bridgeProduct: IProductsSectionTranslations = {
  subtitle: 'product',
  title: 'Hydra Bridge',
  paragraphs: [
    'A bridge aggregator searches for the best rates on available bridging services and offers a route to that bridge as a service. It helps to ensure the best price on your transaction.',
    'Example: A user wants to bridge USDC from Ethereum to Arbitrum. There are multiple bridges between those functions, and the aggregator pings each one looking for all available bridges. The aggregator then gives you the options and allows you to choose the cheapest/fastest/preferred bridge service, and routes your funds through it for you.',
  ],
};

const products: Record<string, IProductsSectionTranslations> = {
  dex: { ...dexProduct },
  bridge: { ...bridgeProduct },
};

export default products;
