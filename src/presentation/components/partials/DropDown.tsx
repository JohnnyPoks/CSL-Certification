import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";
import { Link } from "react-router-dom";

// Interfaces
import { IHeaderDropdownItem } from "../../../domain/interfaces";

const DropdownMenu = ({
  trigger,
  content,
  link,
  className,
}: IHeaderDropdownItem) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${"text-gray-600 hover:text-green-pea text-nowrap"} [&>svg]:hidden`}
          >
            <Link to={link}>{trigger}</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-4 text-center">
              <p className="text-sm leading-6">{content.description}</p>
              <Link
                to={link}
                className={
                  className ||
                  "mt-4 w-full rounded-md bg-green-pea/80 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-pea block text-center"
                }
              >
                {content.linkText}
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
