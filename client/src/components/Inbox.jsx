import React from 'react';
import styles from '../styles';
import { server, discord, PlusIcon, ExploreIcon, DownloadIcon } from '../img';
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
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-iconInbox group">
                        <PlusIcon className="text-iconInbox group-hover:text-white " />
                    </div>
                </div>

                <div className="pt-2">
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-iconInbox group">
                        <ExploreIcon className="text-iconInbox group-hover:text-white" />
                    </div>
                </div>

                <div className="flex justify-center pt-2 pb-2 pr-[10px]">
                    <div className="h-[2px] w-[32px] bg-[#35363c]"></div>
                </div>

                <div>
                    <div className="flex items-center justify-center h-[48px] w-[48px]  rounded-full cursor-pointer bg-[#313338] hover:rounded-2xl hover:bg-iconInbox group">
                        <DownloadIcon className="text-iconInbox group-hover:text-white" />
                    </div>
                </div>
            </div>
            <div className="hidden"></div>
        </div>
    );
};

export default Inbox;
