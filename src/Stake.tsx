import { Outlet, Link } from "react-router-dom";
import {  useContractRead } from 'wagmi'
import { VAULT_FACTORY_ADDRESS } from './config';
import VaultFactory from "./ABI/deployer.json"
import { toast } from "react-toastify"
import { ethers } from 'ethers';
import TransitionsModal from './components/stake';


export default function Stake() {

  const { data: getData, isLoading: getLoading } = useContractRead({
    address: VAULT_FACTORY_ADDRESS ,
    abi: VaultFactory,
    functionName: "info",

    onError(error) {
      // @ts-ignore
      toast.error(`Failed! ${error.reason}`)
    }
  })
  
  console.log(getData, getLoading);
  
  return (
    <div className='text-orange-50 bg-zinc-900 p-8 min-h-screen'>
      <div className='sm:flex justify-between p-10 '>
        <nav className='flex text-xl font-semibold ' >
          <Link className='px-10' to="/">HOME</Link>
          <Link to="/vault">CREATE VAULT</Link>
        </nav>
        <Outlet />
      </div>

      <div className='flex flex-col justify-center items-center text-zinc-900'>
        <div className='text-4xl'>More Protocol</div>
          <p className='text-2xl'>Securing NFT liquidity across DeFi Protocol</p>
        <div className='bg-orange-200 my-8'>
        </div>
        <div className= 'Table bg-orange-200 w-3/5 rounded-md items-center p-7'>
          <div className='flex justify-around sm:py-12 py-4'>
            <div className='Table-title text-3xl'>vaultName</div>
            <div className='Table-title text-3xl'>rate </div>
            <div className='Table-title text-3xl'>mange </div>
          </div>
          {
            // @ts-ignore
            getData ?  Object.values(getData).map((detail: any, _i: number) => {
              console.log({detail, _i}); 

              return (
                <div key={_i} className='Table-details flex justify-around bg-zinc-900 text-slate-50 p-1 rounded-2xl w-4/5 m-auto'>
                  <div className='  text-xl '>{detail?.vaultName}</div>
                  <div className=' text-xl'>{ethers.utils.formatUnits(detail?.vaultIndex, 0)} days</div>
                  <TransitionsModal address = {detail?.vaultAddress}/>
                </div>    
              )
            }) : " "  
          }
        </div>
      </div>

    </div>
  )
}
