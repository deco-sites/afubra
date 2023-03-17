import Menu from "$store/components/autoheader/Menu.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import { Categories } from "deco-sites/std/commerce/types.ts";
export interface Props {
  //TODO: Remove text later
  text: string;
  categories: LoaderReturnType<Categories[] | null>;
  showAllCategories?: boolean;
}



const AutoHeader = (props: Props) => {
  const { text, categories, showAllCategories } = props;
  return (
    <section>
      {text}
      <Menu categories={categories} allCategories={showAllCategories}/>
    </section>
  );
};

export default AutoHeader;
