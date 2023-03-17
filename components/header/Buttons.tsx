import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/cart/useCart.ts";
import type { Image } from "deco-sites/std/components/types.ts";

function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="search icon button"
      onClick={() => {
        displaySearchbar.value = true;
      }}
    >
      <Icon id="MagnifyingGlass" width={20} height={20} strokeWidth={0.1} />
    </Button>
  );
}

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={20} height={20} strokeWidth={0.01} />
    </Button>
  );
}

function CartButton({image}: {image?: Image}) {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <Button
      variant="custom"
      class="relative"
      aria-label="open cart"
      disabled={loading.value}
      onClick={() => {
        displayCart.value = true;
      }}
    >
      {image ? (
        <>
        <img
          src={image}
          alt=""
          class="h-[38px]"
        />
        {totalItems && (
          <span class="absolute text-[9px] right-0 top-0 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        </>
      ) : (
        <>
          <Icon id="ShoppingCart" width={20} height={20} strokeWidth={2} />
          {totalItems && (
            <span class="absolute text-[9px] right-0 top-0 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </>
      )}
    </Button>
  );
}

function HeaderButton({ variant, image }: { variant: "cart" | "search" | "menu"; image?: Image}) {
  if (variant === "cart") {
    return <CartButton image={image} />;
  }

  if (variant === "search") {
    return <SearchButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }

  return null;
}

export default HeaderButton;
