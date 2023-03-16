import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

interface MenuItems {
  id: number;
  name: string;
  hasChildren: boolean;
  children: MenuItems[];
  url: string;
  Title?: string;
  MetaTagDescription?: string;
}

interface Props {
  categories: MenuItems[] | null;
}

function Menu({ categories }: Props) {
  return (
    <div className="menu">
      <div>
        {categories?.map((category: MenuItems, index: number) => {
          return (
            <div key={index}>
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
