import Menu from "$store/components/autoheader/Menu.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import { Categories } from "deco-sites/std/commerce/types.ts";
export interface Props {
  //TODO: Remove text later
  text: string;
  categories: LoaderReturnType<Categories[] | null>;
}



const AutoHeader = (props: Props) => {
  const { text, categories } = props;
  return (
    <div>
      {text}
      <Menu categories={categories}/>
    </div>
  );
};

export default AutoHeader;
