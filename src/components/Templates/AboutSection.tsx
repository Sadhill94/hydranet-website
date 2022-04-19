import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';

import { IAppSection } from '../../interfaces';

const AboutSection = ({ id }: IAppSection) => (
  <section id={id} className="w-full">
    <Hero
      dividerClassRef={'bg-divider-about top-0'}
      className={'bg-brand-medium-blue'}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      <ContentSwap
        aSideContent={
          <img
            src="/about-hydra.png"
            className="mx-auto mr-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            alt={'about hydranet'}
          />
        }
        bSideContent={
          <>
            <Caption
              hashLabel={'explain like im five'}
              title={'About Hydranet'}
            />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-current'}>
                Hydranet DAO is a platform focused on Abstractive
                Interoperability – making fundamentally-incompatible
                decentralized crypto networks like Bitcoin and Ethereum talk
                fluently by way of Layer 3 abstraction with EVM-centric smart
                contracts and state channels, and Bitcoin/UTXO-based off-chain
                protocols like the Lightning Network.
              </p>
              <p className={'mt-3 font-light text-current'}>
                HDX is an Arbitrum token based on the (3,3) Protocol-owned
                Liquidity model pioneered by OlympusDAO.
              </p>
              <p className={'mt-3 font-light text-current'}>
                HDX rewards are generated by bonding funds to the protocol to
                provide it further liquidity and by staking to help secure the
                network. HDX will additionally serve as the meta-token of our
                Layer 3 DEX, being the end recipient of swaps from trading fees
                and DeFi services.
              </p>
            </div>
          </>
        }
      />
    </Hero>
  </section>
);

export default AboutSection;
