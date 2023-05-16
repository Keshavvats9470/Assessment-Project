import React from 'react'

function Homepage() {
    return (
        <div className='m-auto max-w-7xl mt-8 flex gap-36 h-auto'>
            <div className=''>
                <div className='text-[50px] font-semibold'>
                    <h1 className='text-[#FFFF]'>Access curated courses worth</h1>
                    <div className='flex space-x-2 -mt-3'>

                        <div className='absolute'>
                            <img
                                className='py-8'
                                src="Rectangle.svg" alt="" />
                        </div>
                        <p className='text-[#FFFF]'>₹ 18,500</p>
                        <p className='text-[#FFFF]'>at just</p>
                        <p className='text-[#0096FF]'>₹ 99</p>
                        <p className='text-[#FFFF]'>per year!</p>
                    </div>
                </div>

                <div className='mt-8 space-y-6'>
                    <div className='flex items-center font-medium gap-6'>
                        <img src="bk.png" alt="" />

                        <p className='text-[30px] text-[#FFFF]'><span className='text-[#0096FF]'>100+</span> Job relevant courses </p>
                    </div>


                    <div className='flex items-center font-medium gap-6'>
                        <img src="ck.png" alt="" />

                        <p className='text-[30px] text-[#FFFF]'>
                            <span className='text-[#0096FF]'>20,000+  </span>
                            Hours of content </p>
                    </div>



                    <div className='flex items-center font-medium gap-6'>
                        <img src="live.png" alt="" />

                        <p className='text-[30px] text-[#FFFF]'>
                            <span className='text-[#0096FF]'>Exclusive </span>
                            webinar access </p>
                    </div>


                    <div className='flex items-center font-medium gap-6'>
                        <img src="scholar.png" alt="" />

                        <p className='text-[30px] text-[#FFFF]'>
                            Scholarship worth
                            <span className='text-[#0096FF]'> ₹94,500</span>
                        </p>

                    </div>



                    <div className='flex items-center font-medium gap-6'>
                        <img src="adds.png" alt="" />

                        <p className='text-[30px] text-[#FFFF]'>
                            <span className='text-[#0096FF]'>Ad Free </span>
                            learning experience </p>
                    </div>

                </div>
            </div>

            <div className='border-r-4 border-blue-700 bg-[#FFFF] rounded-lg w-96 mt-2 px-4'>
                <form>
                    <div className='flex justify-between m-auto ml-20 mr-20 mt-4'>
                        <div className='text-xs'>
                            <p className='items-center flex text-xl justify-center rounded-full bg-[#0096FF] text-[rgb(255,255,255)] w-8 h-8 font-light'>
                                1
                            </p>
                            Signup
                        </div>
                        <div className='text-xs justify-center items-center'>
                            <p className='items-center flex text-xl justify-center rounded-full bg-[#0096FF] text-[rgb(255,255,255)] w-8 h-8 font-light ml-3'>
                                2
                            </p>
                            Subscription
                        </div>
                    </div>

                    <div className='flex justify-center mt-3'>
                        <p className=' font-semibold'>Select your subcription plan</p>
                    </div>

                    <div>
                        <div className='border-2 border-[#BEBEBE] bg-[#E7E7E7] rounded-md py-2 items-center mt-2'>
                            <div className='ml-4 items-center flex'>
                                <input type="radio"
                                    className='w-6 h-6'
                                />
                                <div className='flex justify-between w-full ml-2 mr-2'>
                                    <p className='text-[9px] -mt-2'><p className='bg-red-600 w-fit px-4 rounded-b-md'>
                                        Offer expired
                                    </p>

                                        <p className='text-[14px] text-[#BEBEBE]'>12 Months Subscription </p>
                                    </p>

                                    <div>
                                        <p className='text-[10px] opacity-40'><span className='font-semibold'>
                                            Total</span> <span className='text-[13px]'>₹99</span></p>

                                        <div>
                                            <p className='text-[10px] -mt-1 opacity-40'>₹8 /mo </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 rounded-md bg-[#D7EDDD] border-[#47BA68] py-2 items-center mt-2 '>
                            <div className='ml-4 items-center flex'>
                                <input type="radio"
                                    className='w-6 h-6'
                                />
                                <div className='flex justify-between w-full ml-2 mr-2'>
                                    <p className='text-[9px] -mt-2'><p className='bg-green-600 w-fit px-4 rounded-b-md'>
                                        Recommended
                                    </p>

                                        <p className='text-[14px] text-[#3C4852] font-semibold'>12 Months Subscription </p>
                                    </p>

                                    <div>
                                        <p className='text-[10px]'>Total <span className='text-[14px]'>₹179</span></p>

                                        <div>
                                            <p className='text-[10px] -mt-1 opacity-70'>₹15 /mo </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 rounded-md border-[#BEBEBE] py-2 items-center mt-2'>
                            <div className='ml-4 items-center flex'>
                                <input type="radio"
                                    className='w-6 h-6'
                                />
                                <div className='flex justify-between w-full ml-2 mr-2 items-center'>
                                    <p className='text-[9px] items-center'>
                                        <p className='text-[14px] text-[#3C4852] font-semibold'>6 Months Subscription </p>
                                    </p>

                                    <div>
                                        <p className='text-[10px]'>Total <span className='text-[14px]'>₹149</span></p>

                                        <div>
                                            <p className='text-[10px] -mt-1 opacity-70'>₹25 /mo </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-2 rounded-md border-[#BEBEBE] py-2 items-center mt-2'>
                            <div className='ml-4 items-center flex'>
                                <input type="radio"
                                    className='w-6 h-6'
                                />
                                <div className='flex justify-between w-full ml-2 mr-2 items-center'>
                                    <p className='text-[9px] items-center'>
                                        <p className='text-[14px] text-[#3C4852] font-semibold'>3 Months Subscription </p>
                                    </p>

                                    <div>
                                        <p className='text-[10px]'>Total <span className='text-[14px]'>₹99</span></p>

                                        <div>
                                            <p className='text-[10px] -mt-1 opacity-70'>₹33 /mo </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='border-2 border-gray-500/30 mt-5 mb-2' />

                        <div className='text-[12px] flex justify-between ml-4 mr-4 mt-1'>
                            <p>Subscription Fee</p>
                            <p>₹18,500</p>
                        </div>

                        <div className='border-2 rounded-md border-[#DE4313] bg-[#DE4313]/10 py-3 items-center mt-2'>
                            <div className='ml-4 items-center flex'>
                                <div className='flex justify-between w-full ml-2 mr-2 '>
                                    <p className='text-[9px] -mt-1.5'>
                                        <p className='text-[12px] text-[#DE4313] font-medium'>Limited time offer</p>

                                        <div className='flex gap-1'>
                                            <img
                                                className='w-4 h-4'
                                                src="clock.jpg" alt="" />
                                            <p className='text-[11px] text-[#DE4313]'>
                                                Offer valid till 25th March 2023
                                            </p>
                                        </div>
                                    </p>

                                    <div>
                                        <p className='text-[10px] -mt-2'>- ₹18,401 </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-[12px] flex justify-between ml-4 mr-4 mt-1'>
                            <p><span className='font-semibold'>Total</span> (Incl. of 18% GST)</p>
                            <p>₹149</p>
                        </div>

                        <div className='items-center flex gap-2 mt-6'>
                            <button className='border-2 rounded-md text-[13px] px-14 py-3 items-center font-semibold text-[#FFFF] bg-gradient-to-r from-[#FEC163] to-[#DE4313] uppercase'>
                                Cancel
                            </button>
                            <button className='border px-8 py-3 items-center text-[13px] rounded-md text-[#FFFF] font-semibold bg-[#47BA68] uppercase'>
                                Proceed to pay
                            </button>
                        </div>

                        <div className='mt-4 mb-5'>
                            <img src="razor.png" alt="" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Homepage