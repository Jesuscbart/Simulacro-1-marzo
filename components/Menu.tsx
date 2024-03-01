import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        List posts
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Add new post
      </a>
    </div>
  );
};

export default Menu;