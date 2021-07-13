import { EFilterByOrder, EFilterByStatus } from '../enums/enums';

export interface IFilterState {
  order: EFilterByOrder;
  select: EFilterByStatus;
}
