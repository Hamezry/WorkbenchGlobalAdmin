import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


const url = "https://wb3test.afexnigeria.com/WB3/api/v1/create-product"

function Productmodal({ setModal }) {

    const [productName, setProductName] = useState("");
    const [productVolume, setProductVolume] = useState("");
    const [productType, setProductType] = useState("");
    const [unitType, setUnitType] = useState("");
    const [certified, setCertified] = useState(false);



    const handleSubmit = async () => {
        const resp = await axios.post(url, { name: productName, product_type: productType, unit_type: unitType, code: productVolume });

        //resp()
        
        console.log(JSON.stringify({ name: productName, product_type: productType, unit_type: unitType, code: productVolume }))
        setModal(false)
    };

    return (
        <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed z-50 top-0 left-0'>

            <div className='bg-[#FFFFFF] absolute w-[450px] h-[700px] left-[38%] mt-[8%] rounded-3xl px-10'>

                <div className='flex justify-between  items-center border-b-2 py-6 w-full'>
                    <p className='text-[18px]'>Create Product</p>

                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>


                </div>


                <form className="my-10">

                    <div className='flex flex-col gap-8'>
                        <label>
                            <p className="text-[14px] text-[#54565B] pb-2">Product Name</p>
                            <input id="name" name="name" type="text" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Insert Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </label>

                        <label>
                            <p className="text-[14px] text-[#54565B] pb-2">Code</p>
                            <input id="volume" name="volume" type="text" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Insert Volume"
                                value={productVolume}
                                onChange={(e) => setProductVolume(e.target.value)}
                            />
                        </label>

                        <label>

                            <p className="text-[14px] text-[#54565B] pb-2">Type</p>

                            <select id="type" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow"
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                            >
                                <option value="Type">Select Type</option>
                                <option value="input">input</option>
                                <option value="commodities">commodities</option>
                                <option value="fees">fees</option>
                            </select>

                        </label>

                        <label>

                            <p className="text-[14px] text-[#54565B] pb-2">Unit Type</p>

                            <select id="type" className="w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow"
                                value={unitType}
                                onChange={(e) => setUnitType(e.target.value)}
                            >
                                <option value="Type" className='bg-[#F1F2F3]'>Select Unit Type</option>
                                <option value="input">input</option>
                                <option value="commodities">commodities</option>
                                <option value="fees">fees</option>
                            </select>

                        </label>

                        <div className="flex items-center gap-3">

                            <label className="">
                                <input type="checkbox" id="remember" className="w-4 h-4 focus:bg-[#38CB89]"
                                    value={certified}
                                    onChange={(e) => setCertified(e.target.value)} />

                            </label>
                            <p>Sustainable Product?</p>


                        </div>

                        {/* <div className='self-center'>
                            <Link to="/productlist"
                                onClick={() => {
                                    
                                }}> */}

                            <button className='w-full py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
                            onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        {/* </Link> */}
                        {/* </div> */}

                    </div>

                </form>

            </div>




        </div>
    )



}

export default Productmodal;