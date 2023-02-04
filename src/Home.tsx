import Layout from './components/Layout';
import { Outlet, Link } from "react-router-dom";

export default function Home() {

  return (
    
    <>
        <div className='Home bg-orange-50 h-full text-neutral-800 text-base p-8'>
            <div className='Home-con sm:flex justify-between p-10 '>
                <div className='md:text-3xl lg:text-4xl font-bold '>
                    <h1 className=''> More Protocol </h1>
                </div>
                <Layout/>
            </div>

            <div className='p-8'>
                <h2 className='text-2xl font-semibold font-mono md:text-4xl lg:text-6xl' >The Future Of NFT Staking</h2>
                <p className='md:w-96 py-7'>
               With NFT staking, you lock your NFTs on Me protocol for an amount of time to receive rewards. One benefit that collectors and the larger NFT marketplace gain from NFTs being staked is that it can produce a deflationary supply pressure, resulting in an increase of the price of similar NFTs still in circulation.
                The rewards you’ll get depend on factors such as the annual interest rate offered, staking duration, and number of NFTs staked.
                </p>
            </div>
            <div className='p-6 '>
                <h2 className='lg:text-5xl sm:text-3xl text-2xl  font-semibold capitalize text-center py-4'>how to participate</h2>
                <div className='c md:w-3/4  m-auto my-10 md:p-10 sm:p-6 rounded-2xl'>
                    <h2 className='md:text-5xl text-3xl p-8'>Staking</h2>
                    <p className='p-8 w-11/12'>
                    NFT staking refers to locking up NFTs on Me protocol protocol to earn rewards and other privileges. This allows NFT holders to put their idle assets to work without having to sell them. 
                    Staking an NFT works like staking cryptocurrency, all you need is a Web3 wallet. That said, not all NFTs can be staked on Me protocol If you’re considering staking on Me protocol click on our stake page to view NFTs
                    </p>
                    <nav className='ext-2xl p-4 m-4 bg-slate-600 inline rounded-sm text-orange-50' >
                        <Link className='px-10 ' to="/stake">STAKE</Link>
                    </nav>
                    <Outlet />
                </div>
            </div>
        
        </div>
        <div className='text-orange-50 bg-slate-900  p-12'>
            <h1 className='lg:text-5xl md:text-3xl text-center text-xl'>More Protocol</h1>
            <p className='lg:text-2xl p-4 text-xl'>
            By staking it for rewards, one can buy more NFT (liquidity) from a marketplace, empowering a project to facilitate the production of more NFT.
            </p>  
        </div>

    </>
    
  )
  
}