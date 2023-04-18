import React from 'react';
import styles from '../styles';
import { plus, inbox, server, discord } from '../img';
const Inbox = () => {
    return (
        <div className={`relative h-screen ${styles.inboxWidth} bg-[#1e1f22]`}>
            Inbox
            {/* <div className="w-[72px] relative mt-3">
                <div className="flex justify-center h-[48px] w-[48px]">
                    <img src={inbox} alt="inbox" className="font-size m-0 p-0" />
                </div>
            </div>
            <div className="flex justify-center pt-2">
                <div className="h-[2px] w-[32px] bg-[#35363c]"></div>
            </div>
            <div className="server pt-5">
                <div className="flex">
                    <img src={server} alt="server" className="h-[47px] w-[47px]" />
                </div>
            </div>
            <div className="tutorial">
                <div className="flex">
                    <img src={plus} alt="plus" className="h-[47px] w-[47px]" />
                </div>
            </div>
            <div className="laban"></div>
            <div className="flex justify-center">
                <div className="h-[2px] w-[32px] bg-[#35363c]"></div>
            </div>
            <div className="download"></div>
            <div className="hidden"></div> */}
        </div>
    );
};

export default Inbox;
