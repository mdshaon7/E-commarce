import React from 'react'
import box1 from "../assets/box/HOL25-Peak_10595_HP_DQC_Gifts-by-Price_under10_V1_1x_186x116._SY116_CB797242024_.jpg"
import box2 from "../assets/box/HOL25-Peak_10598_HP_DQC_Gifts-by-Price_under25_V1_1x_186x116._SY116_CB797581088_.jpg"
import box3 from "../assets/box/HOL25-Peak_10599_HP_DQC_Gifts-by-PriceDeals_V1_1x_186x116._SY116_CB797242024_ (1).jpg"
import box4 from "../assets/box/HOL25-Peak_10601_HP_DQC_Gifts-by-Price_under50_V1_1x_186x116._SY116_CB797242024_.jpg"
import { Link } from 'react-router'
import box5 from "../assets/box1/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
import box6 from "../assets/box1/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
import box7 from "../assets/box1/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
import box8 from "../assets/box1/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_1x_186x116._SY116_CB543392481_.jpg"
import box9 from "../assets/box2/Bedding_1x._SY116_CB563137408_.jpg"
import box10 from "../assets/box2/CleaningTool_1x._SY116_CB563137408_.jpg"
import box11 from "../assets/box2/HomeDecor_1x._SY116_CB563137408_.jpg"
import box12 from "../assets/box2/HomeStorage_1x._SY116_CB563137408_.jpg"
import box13 from "../assets/box3/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg"
import box14 from "../assets/box3/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg"
import box15 from "../assets/box3/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg"
import box16 from "../assets/box3/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg"

const Box = () => {
    return (
        <>
            <div className=" grid grid-cols-4  gap-5 mt-[-300px] ">

                <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px] '>
                    <h3 className=' text-[25px] font-bold items-center py-2 mb-3'>Shop gifts by category</h3>
                    <div className=' flex flex-wrap justify-around gap-2'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box1} alt="" />
                            <p className='text-[14px]'>
                                Under $10
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box2} alt="" /><p className='text-[14px]'>

                            Under $20
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box3} alt="" /><p className='text-[14px]'>Under $50</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box4} alt="" /><p className='text-[14px]'> deals</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300 mt-2'>

                            Discover more for Holiday</Link>
                    </div>
                </div>

                <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2 mb-3'>Shop gifts by recipient</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box5} alt="" />
                            <p className='text-[14px]'>
                                For him
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box6} alt="" /><p className='text-[14px]'>

                            For her
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box7} alt="" /><p className='text-[14px]'>for kid</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box8} alt="" /><p className='text-[14px]'> deals</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300 mt-2'>

                            Shaop all gifts</Link>
                    </div>
                </div>

                    <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2'>Shop for your home essentials</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box9} alt="" />
                            <p className='text-[14px]'>
                                Cleanig Tools
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box10} alt="" /><p className='text-[14px]'>

                            Home Storage
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box11} alt="" /><p className='text-[14px]'>Home Decor</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box12} alt="" /><p className='text-[14px]'> Bedding</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300'>

                            Discover more in home</Link>
                    </div>
                </div>

                    <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2'>New home arrivals under $50</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box13} alt="" />
                            <p className='text-[14px]'>
                               Kitchen & dining
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box14} alt="" /><p className='text-[14px]'>

                            Home improvement
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box15} alt="" /><p className='text-[14px]'> Decor</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box16} alt="" /><p className='text-[14px]'> Bedding & bath</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300'>

                            Shop the latest from Home</Link>
                    </div>
                </div>

                
            </div>
            <div className=" grid grid-cols-4  gap-5 mt-5 ">

                <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px] '>
                    <h3 className=' text-[25px] font-bold items-center py-2 mb-3'>Shop gifts by category</h3>
                    <div className=' flex flex-wrap justify-around gap-2'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box1} alt="" />
                            <p className='text-[14px]'>
                                Under $10
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box2} alt="" /><p className='text-[14px]'>

                            Under $20
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box3} alt="" /><p className='text-[14px]'>Under $50</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box4} alt="" /><p className='text-[14px]'> deals</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300 mt-2'>

                            Discover more for Holiday</Link>
                    </div>
                </div>

                <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2 mb-3'>Shop gifts by recipient</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box5} alt="" />
                            <p className='text-[14px]'>
                                For him
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box6} alt="" /><p className='text-[14px]'>

                            For her
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box7} alt="" /><p className='text-[14px]'>for kid</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box8} alt="" /><p className='text-[14px]'> deals</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300 mt-2'>

                            Shaop all gifts</Link>
                    </div>
                </div>

                    <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2'>Shop for your home essentials</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box9} alt="" />
                            <p className='text-[14px]'>
                                Cleanig Tools
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box10} alt="" /><p className='text-[14px]'>

                            Home Storage
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box11} alt="" /><p className='text-[14px]'>Home Decor</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box12} alt="" /><p className='text-[14px]'> Bedding</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300'>

                            Discover more in home</Link>
                    </div>
                </div>

                    <div className='w-[310px] bg-gray-50 rounded-[5px] shadow-[0_0_4px] shadow-gray-400 p-3 h-[500px]'>
                    <h3 className=' text-[25px] font-bold items-center py-2'>New home arrivals under $50</h3>
                    <div className=' flex flex-wrap gap-3'>

                        <div className='w-[130px] h-[150px]'  ><img className=' bg-blue-400 w-full h-[130px]' src={box13} alt="" />
                            <p className='text-[14px]'>
                               Kitchen & dining
                            </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg-red-800 w-full h-[130px]' src={box14} alt="" /><p className='text-[14px]'>

                            Home improvement
                        </p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-yellow-900 w-full h-[130px]' src={box15} alt="" /><p className='text-[14px]'> Decor</p></div>
                        <div className='w-[130px] h-[150px]'><img className=' bg- bg-pink-950 w-full h-[130px]' src={box16} alt="" /><p className='text-[14px]'> Bedding & bath</p></div>
                        <Link className='hover:underline hover:text-blue-500 duration-300'>

                            Shop the latest from Home</Link>
                    </div>
                </div>

                
            </div>

        </>
    )
}



export default Box
