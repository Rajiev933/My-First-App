# Hello React (* . *)

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Coaching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food Ordering App Structure

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *   - search
 *   - RestaurantContainer
 *        - RestauranrCard
 *            - Img
 *              Name of Res, Star Rating, Cuision, delievery time
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - Contact
 *
 *
 * https://foodfire.onrender.com/api/restaurants?lat=28.65420&lng=77.23730&page_type=DESKTOP_WEB_LISTING
 
 * https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=804071
 */

 Two Types of Export/Import 

 - Default Export/Import
 export default Component;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";

 # React Hooks
 (Normal JavaScrpt utility functions)
 - useState() 
 - useEffect()



 # Routing - 2 Types of routing
 - Client Side Routing
 - Server Side Routing