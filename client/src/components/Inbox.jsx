import React from 'react';
import styles from '../styles';
import { plus, server, discord, explore, download } from '../img';
const Inbox = () => {
    return (
        <div className={`h-screen ${styles.inboxWidth} bg-[#1e1f22] relative`}>
            <div className="relative w-[72px] mt-3 pl-3">
                <div className="flex items-center justify-center h-[48px] w-[48px] rounded-2xl bg-[#5865f2]">
                    <img src={discord} alt="discord" className="font-size m-0 p-0" />
                </div>

                <div className="flex justify-center pt-2 pb-2 pr-[10px]">
                    <div className="h-[2px] w-[32px] bg-[#35363c]"></div>
                </div>

                <div className="h-[48px] w-[48px]">
                    <img
                        src={server}
                        alt="server"
                        className="object-cover rounded-full cursor-pointer hover:rounded-2xl"
                    />
                </div>

                <div className="pt-2">
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-[#5b5d63]">
                        <img src={plus} alt="plus" className=" h-[24px] w-[24px]" />
                    </div>
                </div>

                <div className="pt-2">
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-[#5b5d63]">
                        <img src={explore} alt="explore" className=" h-[24px] w-[24px]" />
                    </div>
                </div>

                <div className="flex justify-center pt-2 pb-2 pr-[10px]">
                    <div className="h-[2px] w-[32px] bg-[#35363c]"></div>
                </div>

                <div>
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-[#5b5d63]">
                        <img src={download} alt="download" className=" h-[24px] w-[24px]" />
                    </div>
                </div>
            </div>
            <div className="hidden"></div>
        </div>
    );
};

export default Inbox;
