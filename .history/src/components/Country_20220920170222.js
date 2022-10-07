import React from 'react'

function Country() {

    return (
        <div className='w-[85%] font-muli text-[#54565B] h-[calc(100vh-90px)] p-1'>

            <div className='w-[100%] h-[80px] bg-white p-4 flex justify-between'>

                <div className='flex w-[400px] items-center gap-2'>
                    <img src={ } alt='' />
                    <p>Kenya</p>
                </div>

                <div className='flex gap-3 rounded-lg items-center text-[12px] text-[#38CB89]'>

                    <div className='flex gap-1 rounded-lg items-center text-[12px] text-gray-500  bg-[#FBFBFB] h-[40px] w-[80px] p-3'>

                        <Link to='/'>

                            Back

                        </Link>

                    </div>






                </div>

            </div>



            <div className='w-[100%]  h-[calc(100%-80px)] overflow-y-auto flex gap-9'>

                <div className='mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[65%] overflow-y-auto'>

                    <div className='bg-[#FFFF] p-3 rounded-3xl w-full'>

                        <div className='mb-3 border-b border-gray-200 p-5'>
                            <h1>People</h1>
                        </div>

                        <div className='flex p-5 w-full items-center justify-around'>

                        </div>

                    </div>


                    <div className='flex gap-4 mt-3 p-6 '>


                        <div className='flex justify-between p-3 border-b '>
                            <p>Administrative Level</p>

                        </div>


                        <div className='flex flex-col w-[50%] h-[350px] items-center gap-10'>
                            
                        </div>

                    </div>

                </div>

                <div className='flex mt-[30px] h-[800px] rounded-3xl bg-[#F9F9F9] p-8 w-[35%] overflow-y-auto'>

                    <div className='bg-[#FFFF] w-full overflow-x-auto rounded-3xl'>

                        <div className='mb-2 border-b border-gray-200 p-4'>
                            <h1>Overall Stock Position</h1>
                        </div>


                        <div className='w-full overflow-x-auto p-5'>

                            <table className='w-full over p-6'>

                                <thead>
                                    <tr className="bg-[#F9F9F9] text-left text-[#54565B] text-[14px]">
                                        <th className="py-2 px-2 ">Commodity</th>
                                        <th className="py-2 px-2 ">Grade</th>
                                        <th className="py-2 px-2 ">Volume (MT)</th>
                                        <th className="py-2 px-2 ">Lien(MT)</th>
                                    </tr>
                                </thead>

                                <tbody className="text-[#54565B] text-[12px] font-light">


                                    <tr className="text-left border-b border-gray-200 hover:bg-[#e3f7ee]">

                                        <td className="py-2 px-7">
                                            <span className="font-medium">item.item_code</span>
                                        </td>

                                        <td className="py-2 px-7 ">
                                            <span className="font-medium">grade</span>
                                        </td>

                                        <td className="py-2 px-7">



                                            <span className="font-medium ">total_lien_weight</span>





                                        </td>

                                        <td className="py-2 px-7">
                                            <span className="font-medium ">total_lien_weight</span>
                                        </td>

                                    </tr>

                                </tbody>


                            </table>

                        </div>

                    </div>

                </div>

            </div>




        </div>
    )
}

export default Country
