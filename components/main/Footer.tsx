import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Explore My Code</div>
                    <a
                    href="https://github.com/Umanginigam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxGithubLogo />
                    <span className="text-[15px] ml-[6px]">GitHub</span>
                    </a>

                    <a
                    href="https://discord.com/channels/1325385863651397675/1325385863651397678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxDiscordLogo />
                    <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                    <a
                    href="https://www.kaggle.com/umanginigam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxDiscordLogo />
                    <span className="text-[15px] ml-[6px]">Kaggle</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxInstagramLogo />
                    <span className="text-[15px] ml-[6px]">Instagram</span>
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Software Engineer</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <a href="#about" className="text-[15px] ml-[6px]">
                             Learning about me
                        </a>
                    </p>

                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">nigamumangi@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center py-10">
                &copy; Umangi nigam 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer