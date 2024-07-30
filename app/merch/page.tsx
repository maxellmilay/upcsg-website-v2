'use client'
import React from 'react'
import { useState } from 'react'
import SuggestMerch from '@/components/merch/SuggestMerch'
import SuggestMerchForm from '@/components/merch/SuggestMerchForm'
import MerchGrid from '@/components/merch/MerchGrid'
import MerchGeneralFilters from '@/components/merch/MerchGeneralFilters'
import MerchSponsors from '@/components/merch/MerchSponsors'

const MerchPage = () => {

    return (
        <div className="flex flex-col font-vietnam text-[#D8DCDF] bg-main-dark min-h-screen">
            <section>
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="sticky top-20 w-full lg:w-1/4 z-[15]">
                        <div className="hidden lg:block">
                        <MerchSponsors />
                    </div>

                    <MerchGeneralFilters />
                    </div>
                    <div className="block lg:hidden">
                    <MerchSponsors />
                </div>
                <div className="w-full lg:w-3/4">
                        <MerchGrid />
                    </div>
                </div>
            </section>

            <section>
                <SuggestMerch />
            </section>
        </div>
    )
}

export default MerchPage
