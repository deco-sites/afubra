/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Placeholder no mobile
   * @description Search bar default placeholder message on mobile
   * @default What are you looking for?
   */
  placeholderMobile?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[];
  suggestions?: Suggestion;
};

function Searchbar({
  placeholder = "Procure por qualquer informação como código, marca ou nome de produto",
  placeholderMobile = "Procure por qualquer informação",
  action = "/s",
  name = "q",
  query,
  products,
  suggestions: { searches } = {},
}: Props) {
  return (
    <>
      <div class="lg:w-[677px] mt-[6px]">
        <form
          id="searchbar"
          action={action}
          class="flex gap-3 border(2 afubra-green-1) rounded-[10px] overflow-hidden"
        >
          <input
            class="hidden lg:block flex-grow outline-none h-[42px] text([15px] afubra-gray-1) pb-[2px] placeholder-afubra-green-2 pl-[1rem]"
            name={name}
            defaultValue={query}
            placeholder={placeholder ? placeholder : placeholderMobile}
          />
          <input
            class="block lg:hidden flex-grow outline-none h-[42px] text([15px] afubra-gray-1) pb-[2px] placeholder-afubra-green-2 pl-[1rem]"
            name={name}
            defaultValue={query}
            placeholder={placeholderMobile ? placeholderMobile : placeholder}
          />
          <Button
            variant="custom"
            aria-label="Search"
            htmlFor="searchbar"
            class="lg:bg-afubra-green-2 text-white border-transparent flex pl-[10px] justify-center"
          >
            <Icon
              class="text-afubra-green-2 lg:text-[#fff]"
              id="MagnifyingGlass"
              width={20}
              height={20}
              strokeWidth={0.01}
            />
            <span class="hidden lg:block text-[18px] font-bold pr-[10px]">BUSCAR</span>
          </Button>
        </form>
      </div>
      <div class="flex flex-col divide-y divide-default">
        {searches && (
          <div class="flex flex-col gap-6 px-4 py-6">
            <Text variant="heading-3">Termos mais buscados</Text>
            <ul class="flex flex-col gap-6">
              {searches.map(({ term }) => (
                <li>
                  <a href={`/s?q=${term}`} class="flex gap-4 items-center">
                    <Text variant="body">
                      <Icon
                        id="MagnifyingGlass"
                        width={20}
                        height={20}
                        strokeWidth={0.01}
                      />
                    </Text>
                    <Text variant="body">
                      {term}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {products && (
          <div class="flex flex-col gap-6 py-6">
            <Text class="px-4" variant="heading-3">Produtos sugeridos</Text>
            <Slider>
              {products.map((product, index) => (
                <div
                  class={`${
                    index === 0
                      ? "ml-4"
                      : index === products.length - 1
                      ? "mr-4"
                      : ""
                  } min-w-[200px] max-w-[200px]`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}

export default Searchbar;
