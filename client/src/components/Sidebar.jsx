import React from 'react';
import styles from '../styles';
import { nitro, friends, plus } from '../img';

const Sidebar = () => {
    return (
        <div className={` h-screen ${styles.directMessageWidth} bg-[#2b2d31] relative`}>
            <div className="flex z-10 w-full p-[10px] border-b-2 border-[#1f2124]">
                <input
                    type="search"
                    placeholder="Find or start a conversation"
                    className="w-full flex items-center justify-between bg-[#1e1f22] p-[2px] text-[14px] leading-6 pl-[6px] rounded-md"
                />
            </div>
            <div className="p-[10px]">
                <div className="flex items-center p-[10px] rounded-md cursor-pointer px-2 bg-[#36393f]">
                    <div className="mr-[10px]">
                        <img
                            src={friends}
                            className="w-6 filter invert-100 opacity-60 cursor-pointer h-[25px] w-[25px]"
                            alt="friends"
                        />
                    </div>
                    <p className="text-gray-500">Fiends</p>
                </div>
                <div className="flex items-center p-[10px] rounded-md cursor-pointer mb-[10px] px-2">
                    <div className="mr-[10px]">
                        <img
                            src={nitro}
                            className="w-6 filter invert-100 opacity-60 cursor-pointer h-[25px] w-[25px]"
                            alt="nitro"
                        />
                    </div>
                    <p className="text-gray-500">Nitro</p>
                </div>
                <div className="flex opacity-40 font-extrabold mt-[15px] mb-[15px] text-gray-500 justify-between items-center">
                    DIRECT MESSAGES
                    <div className="flex flex-shrink-0 w-[16px] h-[16px] ml-0 mr-[2px]">
                        <img src={plus} alt="plus" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
