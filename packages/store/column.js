import Checkbox from "../columns/checkbox";
import Index from "../columns/index";
import Expansion from "../columns/expansion";
import Tree from "../columns/tree";

export default function(column) {
  let { type } = column;
  let extColumn = {};
  switch (type) {
    case "checkbox":
      extColumn = Checkbox;
      break;
    case "index":
      extColumn = Index;
      break;
    case "expansion":
      extColumn = Expansion;
      break;
    case "tree":
      extColumn = Tree;
      break;
  }
  Object.assign(column, extColumn);
  column.isLeaf = true;
  column.colStyle = {
    width: `${column.width}px`,
    minWidth: `${column.width}px`
  };
}
