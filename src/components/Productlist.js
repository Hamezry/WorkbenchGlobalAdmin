import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { AiOutlineSearch } from 'react-icons/ai';
import recieptIcon from '../Assets/receipt-text.png';
import filterIcon from '../Assets/filter.svg';
import calenderIcon from '../Assets/calendar.svg';
import Dropdown from './Dropdown/ProductDropdown';
//import successIcon from '../Assets/Success-icon.svg'
import axios from 'axios';
import Pagination from './Pagination';
import GlobalProductTile from './page-tiles/GlobalProductTile';

import ProductModal from '../modal/Products/Productmodal'
import DeactivateProductmodal from '../modal/Products/DeactivateProductmodal'


function Productlist({
  list,
  setViewFilter,
  openModal,
}) {
  const [query, setQuery] = useState('');
  const [singleProduct, setSingleProduct] = useState({});
  const [modal, setModal] = useState(false)
  const [deactivateProduct, setDeactivateProduct] = useState(false);

  //console.log(list)

  //DATE FORMAT FUNCTION
  const formDate = (datex) => {
    const date = new Date(datex);
    return `${format(date, 'MMM')} ${format(date, 'ii')} ${format(date, 'Y')}`;
  };

  // const [showElement, setShowElement] = React.useState(true);
  // useEffect(() => {
  //   setTimeout(function () {
  //     setShowElement(false);
  //   }, 2000);
  // }, []);
  const [posts, setPosts] = useState([]);


  const populate = () => {
    setPosts(list.data ?? [])
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  const changeStatus = (pk) => {

    axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/product/change/status/${pk}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list?.data?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    populate()

    // eslint-disable-next-line
  }, [list])




  return (
    <div className='w-[82%] relative flex flex-col font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] gap-14 overflow-y-auto'>
      {/* {showElement ? (<div className='absolute top-3 z-50 right-0 '>
        <img src={successIcon} alt='' />
      </div>) :
        (
          <div></div>
        )} */}
      {/*CARDS */}
      <GlobalProductTile />

      <div className=' flex justify-between items-center w-full h-[calc(100vh-3%)] rounded py-8 px-8 bg-[#F9F9F9] text-[#54565B] text-[14px]'>
        <div className='bg-[#FFFFFF] rounded-3xl w-full py-5 px-8 h-[100%]'>
          <div className='p-4 text-[18px] border-b-2'>
            {' '}
            <p>Overview</p>
          </div>

          <div className='flex justify-end items-center p-4 gap-5'>
            <div className=' flex gap-12 p-3 rounded-2xl border text-sm text-gray-400 bg-[#F9F9F9] h-[54px'>
              <p>Date Registered</p>
              <img src={calenderIcon} alt='' />
            </div>

            <div className='relative'>
              <input
                type='search'
                name=''
                id=''
                placeholder='Search'
                className='p-3 rounded-2xl text-sm text-black border outline-none focus:outline-none bg-[#F9F9F9] h-[54px w-[360px]'
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className='absolute left-[300px] top-3'>
                <AiOutlineSearch className='text-[25px] text-gray-400' />
              </span>
            </div>

            <div className='flex justify-between rounded-lg items-center text-[12px] text-white bg-[#38CB89] h-[40px] w-[142px] p-4'>
              <button
                onClick={() => {
                  setModal(true);
                }}>
                Create product
              </button>
              <img src={recieptIcon} alt='' />
            </div>

            <div className='border border-[#38CB89]  flex gap-1 rounded-lg items-center text-[12px] text-[#38CB89]  bg-white h-[40px] w-[86px] p-4'>
              <img src={filterIcon} alt='' />
              <button
                onClick={() => {
                  setViewFilter(true);
                }}>
                Filter
              </button>
            </div>
          </div>

          {/*TABLE */}

          <div className='px-5 h-[500px] overflow-y-auto overflow-x-auto'>
            <table className='min-w-max w-full table-auto'>
              <thead>
                <tr className='bg-[#F9F9F9] text-[#54565B] text-left text-[14px]'>
                  <th className='py-3 px-6 '>S/N</th>
                  <th className='py-3 px-6 '>Product Name</th>
                  <th className='py-3 px-6 '>Code</th>
                  <th className='py-3 px-6 '>Type</th>
                  <th className='py-3 px-6 '>Sustainable</th>
                  <th className='py-3 px-6 '>Unit Type</th>
                  <th className='py-3 px-6 '>Date Created</th>
                  <th className='py-3 px-6 '>Last Updated</th>
                  <th className='py-3 px-6 '>Action</th>
                </tr>
              </thead>

              <tbody className='text-[#54565B] text-[12px] font-light'>
                {currentPosts
                  ?.filter((item) => item.name.toLowerCase().includes(query))
                  .map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className='text-left border-b border-gray-200 hover:bg-[#e3f7ee]'>
                        <td className='py-5 px-6'>
                          <span className='font-medium'>{index + 1}</span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>{item.name}</span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>{item.code}</span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>
                            {item.product_type}
                          </span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>Yes</span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>{item.unit_type}</span>
                        </td>

                        <td className='py-5 px-6  '>
                          <span className='font-medium '>{`${formDate(
                            item.created
                          )}`}</span>
                        </td>

                        <td className='py-5 px-6'>
                          <span className='font-medium '>{`${formDate(
                            item.updated
                          )} `}</span>
                        </td>

                        <td className='py-5 px-6 relative'>

                          <Dropdown
                            setDeactivateProduct={setDeactivateProduct}
                            item={item}
                            setModal={() => {
                              setModal(true);
                              setSingleProduct(list.data.filter(el => el.pk === item.pk)[0])
                            }}
                            openModal={openModal}
                            modalData={singleProduct}
                          />
                        </td>
                      </tr>
                    );
                  })}

                {
                  modal && <ProductModal setModal={setModal} modalData={singleProduct} />
                }
                {deactivateProduct && (
                  <DeactivateProductmodal
                    setDeactivateProduct={setDeactivateProduct}
                    openModal={openModal}
                    deactivate={() => changeStatus(singleProduct.pk)}
                  />
                )}
              </tbody>
            </table>
          </div>

          <div className='flex items-center justify-between mb-3 bg-[#F9F9F9] p-3 rounded-2xl'>
            <p>1 - 7 of {posts.length} Entries</p>

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              perPage={postsPerPage}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Productlist;
