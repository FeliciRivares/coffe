export enum AuthRouteKey {
    Welcome = 'welcome',
    Loading = 'loading',
  
    SignIn = 'signIn',
    SignUp = 'signUp',
    ForgotPassword = 'forgotPassword',
  }
  
  export enum UserRouteKey {
    Loading = 'loading',
  
    Home = 'home',
  
    Detailed = 'detailed',
    Cart = 'cart',
    Favorite = 'favorite',
    Order = 'order',
    
    Settings = 'settings',
  }
  
  
  export type RouteKey = AuthRouteKey | UserRouteKey  ;
  