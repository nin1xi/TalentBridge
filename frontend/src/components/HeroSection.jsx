import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">Find the Job That Fits You</span>
                <h1 className="text-5xl font-bold">Your Next Opportunity <br /> Starts <span className="text-[#6A38C2]">Here</span></h1>
                <p>Explore thousands of listings and connect with top employers in one place.</p>

                <input
                    type="text"
                    placeholder='Find your dream jobs'
                    onChange={(e) => setQuery(e.target.value)}
                    className='outline-none border-none w-full'

                />
                <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                    <Search className='h-5 w-5' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection