import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { LuFilter } from 'react-icons/lu'
import TheButton from '../generics/TheButton'

const ProductTypes = [
    'TOTE BAGS',
    'SHIRTS',
    'HOODIES',
    'HATS',
    'PINS',
    'STICKERS',
]
const PriceRange = [
    'PHP 20 – PHP 50',
    'PHP 50 – PHP 100',
    'PHP 100 – PHP 150',
    'PHP 150 – PHP 200',
    'PHP 200 – PHP 250',
    'PHP 250+',
    'Lowest to Highest',
    'Highest to Lowest',
]
const Sizes = ['XSMALL', 'SMALL', 'MEDIUM', 'LARGE', 'XLARGE']

const MerchGeneralFilters = () => {
    const [isOpen, setIsOpen] = useState([false, false, false])
    const [isVisible, setIsVisible] = useState(false)

    const toggleMenu = (index: number) => {
        setIsOpen((prevState) =>
            prevState.map((state, i) => (i === index ? !state : false))
        )
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    const handleFilter = () => {
        return
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        if (typeof window !== 'undefined') {
            setIsVisible(window.innerWidth >= 1024)
            window.addEventListener('resize', handleResize)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])

    return (
        <>
            <div
                className={`sticky top-28 xl:top-20 left-0 w-full  max-lg:gap-4 p-4 bg-main-dark xl:py-12 lg:pl-10 xl:pl-24 ${isVisible ? 'max-lg:flex max-lg:flex-col' : 'hidden '}`}
            >
                <form
                    className="font-bold text-white text-lg xl:text-3xl flex flex-col gap-4 tracking-wider xl:px-0"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <p>FILTERS</p>
                    <div className="flex flex-col bg-black text-sm xl:text-xl rounded-lg p-4">
                        <button
                            onClick={() => toggleMenu(0)}
                            className="flex flex-row justify-between text-white cursor-pointer  hover:text-white/75"
                        >
                            PRODUCT TYPE
                            <IoIosArrowDown
                                className={`${isOpen[0] ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                            />
                        </button>
                        {isOpen[0] && (
                            <ul className="grid grid-cols-2 lg:flex lg:flex-col font-normal">
                                {ProductTypes.map((type) => (
                                    <li
                                        key={type}
                                        className="flex items-center mt-2"
                                    >
                                        <input
                                            type="checkbox"
                                            id={type}
                                            name="product_type"
                                            className="size-3 xl:size-5 bg-gray-100 border-gray-100 focus:ring-transparent accent-[#EE6C45] cursor-pointer"
                                            value={type}
                                        />
                                        <label
                                            htmlFor={type}
                                            className="text-[#A6A6B1] text-sm xl:text-base ml-2"
                                        >
                                            {type}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <button
                            onClick={() => toggleMenu(1)}
                            className="flex flex-row justify-between text-white cursor-pointer mt-4  hover:text-white/75"
                        >
                            PRICE RANGE
                            <IoIosArrowDown
                                className={`${isOpen[1] ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                            />
                        </button>
                        {isOpen[1] && (
                            <ul className="text-white font-normal">
                                {PriceRange.map((type) => (
                                    <li
                                        key={type}
                                        className="flex items-center mt-2"
                                    >
                                        <input
                                            type="checkbox"
                                            id={type}
                                            name="product_type"
                                            className="size-3 xl:size-5 bg-gray-100 border-gray-100 focus:ring-transparent accent-[#EE6C45] cursor-pointer"
                                            value={type}
                                        />
                                        <label
                                            htmlFor={type}
                                            className="text-[#A6A6B1] text-sm xl:text-base ml-2"
                                        >
                                            {type}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <button
                            onClick={() => toggleMenu(2)}
                            className="flex flex-row justify-between text-white cursor-pointer mt-4 hover:text-white/75"
                        >
                            SIZE
                            <IoIosArrowDown
                                className={`${isOpen[2] ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                            />
                        </button>
                        {isOpen[2] && (
                            <ul className="grid grid-cols-2 lg:flex lg:flex-col text-white font-normal">
                                {Sizes.map((type) => (
                                    <li
                                        key={type}
                                        className="flex items-center mt-2"
                                    >
                                        <input
                                            type="checkbox"
                                            id={type}
                                            name="product_type"
                                            className="size-3 xl:size-5 bg-gray-100 border-gray-100 focus:ring-transparent accent-[#EE6C45] cursor-pointer"
                                            value={type}
                                        />
                                        <label
                                            htmlFor={type}
                                            className="text-[#A6A6B1] text-sm xl:text-base ml-2"
                                        >
                                            {type}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="flex flex-row justify-center">
                        <TheButton
                            onClick={handleFilter}
                            style="flex items-center gap-2"
                        >
                            <LuFilter />
                            Apply Filters
                        </TheButton>
                    </div>
                </form>
                <div className="flex w-full justify-center lg:hidden">
                    <button
                        onClick={toggleVisibility}
                        className="flex flex-row items-center text-white  text-sm xl:text-xl gap-3 underline hover:text-white/75"
                    >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                        {isVisible ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>
            </div>
            {!isVisible && (
                <div className="sticky top-20 py-5 xl:pt-10 md:top-20 lg:top-24">
                    <button
                        onClick={toggleVisibility}
                        className=" flex flex-row items-center text-white
                                    bg-csg-green-100 text-sm xl:text-xl gap-3 underline p-2 xl:p-3 rounded-r-lg
                                    hover:bg-csg-green-200 hover:text-white/75"
                    >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                        {isVisible ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>
            )}
        </>
    )
}

export default MerchGeneralFilters
