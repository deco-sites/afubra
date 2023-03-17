import Menu from "$store/components/autoheader/Menu.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import { Categories } from "deco-sites/std/commerce/types.ts";
import type { Image } from "deco-sites/std/components/types.ts";
import { EditableProps } from "../search/Searchbar.tsx";
import Navbar from "./Navbar.tsx";

export interface Props {
  //TODO: Remove text later
  text: string;
  categories: LoaderReturnType<Categories[] | null>;
  showAllCategories?: boolean;
}
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
  const { text, categories, showAllCategories, imageLogo, login, imageCart, navItems, searchbar } = props;
  return (
    <section>
      {text}
      <Menu categories={categories} allCategories={showAllCategories}/>
      <Navbar navItems={navItems} login={login} imageCart={imageCart} imageLogo={imageLogo} searchbar={searchbar} />
    </section>
  );
};


export default AutoHeader;
