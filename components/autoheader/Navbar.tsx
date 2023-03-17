import type { Image } from "deco-sites/std/components/types.ts";
import { useEffect, useState } from 'preact/hooks';
import HeaderButton from "../header/Buttons.tsx";
import Searchbar, { EditableProps } from "../search/Searchbar.tsx";
import { Login, NavItem } from "./index.tsx";

const Navbar = (props: {
        imageLogo: Image;
        login: Login;
        imageCart: Image;
        navItems: NavItem[];
        searchbar: EditableProps;
    }) => {
    const { imageLogo, imageCart, login, navItems, searchbar } = props;
    // const [scroll, setScroll] = useState(false);

    // const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //         setScroll(true);
    //     } else {
    //         setScroll(false);
    //     }
    // }

    // useEffect(() => {
    //     self.addEventListener('scroll', handleScroll);
    // }, []);
    
    return (
        <>
        {/*desktop header*/}
            <div class={`hidden lg:flex h-[116px] justify-around max-w-[1290px] mx-auto items-center`}>
                <div class="flex gap-[40px] max-h-[95px]">
                    <a href="/" class="flex cursor-pointer">
                        <img class="w-[133px]" src={imageLogo} alt="" />
                    </a>
                    <div class="flex flex-col justify-center">
                        <div class="flex gap-[35px] pl-[16px]">
                            {navItems?.map((item) => {
                                return <a class="underline text(default [12px] roboto) uppercase" href={item.href}>{item.label}</a>
                            })}
                        </div>
                        <div>
                            <Searchbar {...searchbar}/>
                        </div>
                    </div>
                </div>
                <div class="flex max-h-[95px] max-w-[297px] w-full justify-around h-full items-center">
                    <div class="flex gap-[15px] items-center cursor-pointer">
                        <img class="h-[38px]" src={login?.imageLogin} alt="" />
                        <div class="flex gap-[5px] flex-col">
                            <p class="text([14px] afubra-gray-2)">{login?.textLogin}</p>
                            <p class="text([14px] afubra-green-2) font-bold">{login?.strongTextLogin}</p>
                        </div>
                    </div>
                    <div class="flex h-[47px] items-center">
                        <HeaderButton variant="cart" image={imageCart} />
                    </div>
                </div>
            </div>

        {/*desktop header*/}
        {/*mobile header*/}
            <div class="flex lg:hidden flex-col">
                <div class="flex">
                    <div>
                        <HeaderButton variant="menu" />
                    </div>
                    <div>
                        <a href="/">
                            <img src={imageLogo} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/login">
                            <img src={login?.imageLogin} alt="" />
                        </a>
                    </div>
                    <div>
                        <HeaderButton variant="cart" image={imageCart} />
                    </div>
                </div>
                <div>
                    <Searchbar {...searchbar} />
                </div>  
            </div>
        </>
    )

}

export default Navbar;