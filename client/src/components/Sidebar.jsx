import React from 'react';
import styles from '../styles';
import { nitro, friends, plus } from '../img';

const Sidebar = () => {
    return (
        <section className={` h-screen ${styles.directMessageWidth} bg-[#2b2d31] relative`}>
            <div className="flex z-10 w-full p-[10px] border-b-2 border-[#1f2124] ">
                <input
                    type="search"
                    placeholder="Find or start a conversation"
                    className="w-full flex items-center justify-between bg-[#1e1f22] p-[2px] text-[14px] leading-6 pl-[6px] rounded-md cursor-pointer"
                />
            </div>
            <div className="p-[10px]">
                <div className="flex items-center p-[10px] rounded-md cursor-pointer px-2 hover:bg-[#36393f]">
                    <div className="mr-[10px]">
                        <img
                            src={friends}
                            className="w-6 filter invert-100 opacity-60 cursor-pointer h-[25px] w-[25px]"
                            alt="friends"
                        />
                    </div>
                    <p className="text-gray-500">Friends</p>
                </div>
                <div className="flex items-center p-[10px] rounded-md cursor-pointer mb-[10px] px-2 hover:bg-[#36393f]">
                    <div className="mr-[10px]">
                        <img
                            src={nitro}
                            className="w-6 filter invert-100 opacity-60 cursor-pointer h-[25px] w-[25px]"
                            alt="nitro"
                        />
                    </div>
                    <p className="text-gray-500">Nitro</p>
                </div>
                <div className="flex opacity-4 mt-[15px] mb-[15px] cursor-default text-gray-500 justify-between items-center hover:text-blue-100">
                    <h1 className="text-xs font-medium pl-2">DIRECT MESSAGES</h1>
                    <div className="flex flex-shrink-0 w-[16px] h-[16px] ml-0 mr-[2px] cursor-pointer">
                        <img src={plus} alt="plus" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
