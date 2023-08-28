import { AuthRouteKey } from './../typing/enums/router-key.enum';
import { UserRouteKey } from "../typing";
import {
    HomeIcon as HomeOutline,
    HeartIcon as HeartOutline,
    ShoppingBagIcon as BagOutline,
  } from 'react-native-heroicons/outline';
  import {
    HomeIcon as HomeSolid,
    HeartIcon as HeartSolid,
    ShoppingBagIcon as BagSolid,
  } from 'react-native-heroicons/solid';

export const tabBarConfig = {
  [UserRouteKey.Home]: {
    title: 'Home',
    default: HomeOutline,
    active: HomeSolid,
  },
  [AuthRouteKey.Welcome]: {
    title: 'Home',
    default: HomeOutline,
    active: HomeSolid,
  },
  [UserRouteKey.Favorite]: {
    title: 'Favorite',
    default: HeartOutline,
    active: HeartSolid,
  },
  [UserRouteKey.Cart]: {
    title: 'Cart',
    default: BagOutline,
    active: BagSolid,
  },
 
};
