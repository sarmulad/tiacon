import Navbar from "@/components/Navbar";
import { useState } from "react";
import axios from "axios";

const BASE_URL='HELLO'

const TransactionStatusPage = () =>{
    const [transactionID, setTransactionID] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [transactionFound, setTransactionFound] = useState<boolean>(false)
    const [accountName, setAccountName] = useState<string>('Joshua Oriaklhi')
    const [bankName, setBankName] = useState<string>('Zenith Bank')
    const [USDAmount, setUSDAmount] = useState<number>(400)
    const [NGNAmount, setNGNAmount] = useState<number>(200000)
    const [dateInitiated, setDateInititated] = useState<string>("23-01-1999")
    const [settlementDate, setSettlementDate] = useState<string>("23-07-1999")
    const [settlementStatus, setSettlementStatus] = useState<string>("Successful")
    const [rate, setRate] = useState<number>(500)

    const handleTransactionIDChange = (e:any) =>{
        const inputValue = e.target.value;
        if (/^\d{0,10}$/.test(inputValue)) {
            setTransactionID(e.target.value)
        }
    }

    const getTransactionStatus = () => {
        setLoading(true)
        setTransactionFound(true)
        // API request here
        axios.get(`${BASE_URL}/transactions/get-details`)
        .then((res)=>{
            setLoading(false)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className="">
            <div className="flex flex-col items-center">
                <Navbar />
            </div>
            <div className="bg-secondary min-h-screen py-[100px] px-[20px] md:px-[100px] flex flex-col items-center">
            <div className="flex flex-col md:flex-row w-full max-w-[1240px]">
                <div className="w-1/1 md:w-1/2 flex flex-col justify-center md:justify-start">
                    <h1 className="text-[24px] leading-[30px] mb-[24px] md:mb-[32px] md:text-[40px] md:leading-[51px] font-bold">get transaction status</h1>
                        <p className="text-[16px] font-medium mb-[64px] md:mb-[0px]">
                        you haven&apos;t seen received your ngn in your local bank account yet? use this to get the status of the exchange by putting in the transaction id on your payoneer receipt.
                        </p>
                </div>
                <div className="w-1/1 md:w-1/2 flex justify-start md:justify-end">

                <div className="bg-[#2B2B2B] rounded-[8px] px-[30px] py-[40px] w-full md:w-[409px]">
               
            {
                transactionFound ? (
                    <div>
                        <h4 className="font-bold text-[18px] leading-[23px] text-[#FFFFE3] mb-[20px]">transaction details</h4>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">account name:</h4>
                            <h4 className=" text-[18px] font-semibold leading-[23px] inline text-[#fff] ml-[20px]">{accountName}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">bank name:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{bankName}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">usd value:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{USDAmount}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">ngn value:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{NGNAmount}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">applied rate:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{rate}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">date initiated:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{dateInitiated}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">date settled:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{settlementDate}</h4>
                        </div>
                        <div className="flex mb-[20px]">
                            <h4 className=" text-[18px] leading-[23px] inline text-[#fff]">status:</h4>
                            <h4 className=" text-[18px] leading-[23px] font-semibold inline text-[#fff] ml-[20px]">{settlementStatus}</h4>
                        </div>

                      
                    </div>
                                  
                    ) : (
                    <div>
                        <h4 className="font-bold text-[18px] leading-[23px] text-[#FFFFE3]">enter the transaction id on your payooner receipt</h4>
                        <form className="mt-[40px]">
                            <div className="relative mb-[20px]">
                            <input 
                            type="text"
                            placeholder="enter the id on your reciept"
                            className="border-b-2 bg-transparent text-secondary text-[16px] h-[56px] border-secondary w-full focus:outline-none focus:border-white pl-10 placeholder-secondary rounded-none" 
                            onChange={handleTransactionIDChange}
                            value={transactionID}
                            />
                            <div className="absolute top-0 left-0 h-full flex items-center justify-center">
                                <img src="/tag.svg" className="inline" alt="secured"/>
                            </div>
                            </div>
                            <button className="rounded-[64px] bg-secondary text-[14px] h-[61px] mt-[20px] w-full flex items-center justify-center"
                            onClick={getTransactionStatus}>
                            get transaction status
                            </button>
                        </form>
                    </div>
                    
                )
            }
            
                </div>
     
            </div>
                
        </div>
        </div>
                
        </div>


    )
}


export default TransactionStatusPage