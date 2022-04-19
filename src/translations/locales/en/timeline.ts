import { ITimelineSectionTranslations } from '../../namepaces';

const timeline: ITimelineSectionTranslations = {
  subtitle: 'roadmap',
  title: 'Timeline',
  items: [
    {
      title: 'EVM',
      status: 'DONE',
      body: ['Staking dashboard', 'HDX Bonds (DAI and wETH)'],
    },
    {
      title: 'DEX',
      status: 'DONE',
      body: [
        'Lazarus testnet setup',
        'BTC/USDC pair(testnet)',
        'Activated Vortex',
      ],
    },
    {
      title: 'EVM',
      status: 'IN PROGRESS',
      body: [
        'Liquidity provider bonds',
        'Coin swap',
        'Bridge proof of concept',
      ],
    },
    {
      title: 'DEX',
      status: 'IN PROGRESS',
      body: ['Lazarus Testnet release'],
    },
    {
      title: 'PR',
      status: 'IN PROGRESS',
      body: ['Reach out to tracking pages', 'Coin listing'],
    },
  ],
};

export default timeline;
