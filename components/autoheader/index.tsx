import type { Image } from "deco-sites/std/components/types.ts";
import { EditableProps } from "../search/Searchbar.tsx";
import Navbar from "./Navbar.tsx";

export interface NavItem {
    label: string;
    href: string;
}

export interface Login {
    textLogin: string;
    strongTextLogin: string;
    imageLogin: Image;
}
export interface Props {
    imageLogo: Image;
    login: Login;
    imageCart: Image;
    navItems: NavItem[];
    searchbar: EditableProps;
}

const AutoHeader = (props: Props) => {
    const { imageLogo, login, imageCart, navItems, searchbar } = props;

    return (
        <div>
            <Navbar navItems={navItems} login={login} imageCart={imageCart} imageLogo={imageLogo} searchbar={searchbar} />
        </div>
    )
}

export default AutoHeader;