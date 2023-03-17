import Menu from "$store/components/autoheader/Menu.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import { Categories } from "deco-sites/std/commerce/types.ts";
import type { Image } from "deco-sites/std/components/types.ts";
import { EditableProps } from "../search/Searchbar.tsx";
import Navbar from "./Navbar.tsx";

export interface Props {
  categories: LoaderReturnType<Categories[] | null>;
  showAllCategories?: boolean;
  imageLogo: Image;
  login: Login;
  imageCart: Image;
  navItems: NavItem[];
  searchbar: EditableProps;

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


const AutoHeader = (props: Props) => {
  const { categories, showAllCategories, imageLogo, login, imageCart, navItems, searchbar } = props;
  return (
    <section>
      <Navbar navItems={navItems} login={login} imageCart={imageCart} imageLogo={imageLogo} searchbar={searchbar} />
      <Menu categories={categories} allCategories={showAllCategories}/>
    </section>
  );
};


export default AutoHeader;
