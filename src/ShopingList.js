import { List } from "./List";

export function ShopingList({ shopItems, onRemoveItem }) {
  return (
    <main className="bg-secondary d-flex flex-row flex-wrap align-items-start pt-3 justify-content-center gap-5">
      {shopItems.map((item) => (
        <List item={item} key={item.id} onRemoveItem={onRemoveItem} />
      ))}
    </main>
  );
}
