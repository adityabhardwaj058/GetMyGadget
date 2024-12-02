import { Product } from "./product";

export type OrderStatus =
  | "Pending"
  | "Completed"
  | "Shipped"
  | "InTransit"
  | "Cancelled";

export type Order = {
  id: string;
  slug: string;
  item: string;
  details: string;
  status: OrderStatus;
  date: string;
  items: Product[];
};
