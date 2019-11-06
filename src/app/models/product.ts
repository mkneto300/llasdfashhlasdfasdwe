import { Image } from './image';
import { Category } from './category';
import { Style } from './style';
import { Sett } from './set';
import { Material } from './material';
import { Price } from './price';
import { SubCategory } from './subCategory';

export class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  color: string;
  category: Category;
  subCategory: SubCategory;
  style: Style;
  set: Sett;
  materials: Material[];
  images: Image[];
  price: Price;

}
