// Skip to content
 
// Search or jump to…

// Pull requests
// Issues
// Marketplace
// Explore
 
// @EzekielDavid 
// 0
// 0 0 EzekielDavid/ismfs Private
//  Code  Issues 0  Pull requests 0  Projects 0  Security  Insights  Settings
// ismfs/src/router.js
// @EzekielDavid EzekielDavid add edit and view user
// b5c6c77 on May 14
// 139 lines (132 sloc)  3.17 KB
    
// import React from "react";
// import { Platform, StatusBar } from "react-native";
// import {
//     createBottomTabNavigator,
//     createSwitchNavigator,
//     createAppContainer
// } from "react-navigation";
// import { FontAwesome } from "react-native-vector-icons";
// import SignIn from "./components/login/Login";
// import Category from "./components/admin/Category";
// import Policy from "./components/admin/Policies";
// import Users from "./components/admin/Users";
// import CategoryAdd from "./components/admin/CategoryAdd";
// import PoliciesDefinition from "./components/admin/PoliciesDefinition";
// import AddPd from "./components/admin/AddPd";
// import AddPolicy from "./components/admin/AddPolicy";
// import AddUser from "./components/admin/AddUser";
// import EditCategory from "./components/admin/EditCategory";
// import EditUser from "./components/admin/EditUser";
// import EditPolicy from "./components/admin/EditPolicy";
// import HomeUser from "./components/user/HomeUser";
// import PolicyUser from "./components/user/PolicyUser";
// import DefinitionUser from "./components/user/DefinitionUser";
// const headerStyle = {
//   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
// };

// export const SignedOut = createSwitchNavigator({
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       headerStyle
//     }
//   },
  
//   CategoryAdd: {
//     screen: CategoryAdd,
//     navigationOptions: false
//   },   
// });

// export const SignedInTab = createBottomTabNavigator (
//   {
//     Category: {
//       screen: Category,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="th-large" size={30} color={tintColor} />
//         )
//       }
//     },
//     Policy: {
//       screen: Policy,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="book" size={30} color={tintColor} />
//         )
//       }
//     },   
//     Users: {
//       screen: Users,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="user-o" size={30} color={tintColor} />
//         )
//       }
//     },   
//     PoliciesDefinition: {
//       screen: PoliciesDefinition,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="address-book-o" size={30} color={tintColor} />
//         )
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       showLabel: false
//     }
//   }
// );

// export const SignedIn = createSwitchNavigator({
//   SignedInTab: {
//     screen: SignedInTab
//   },
//   CategoryAdd: {
//     screen: CategoryAdd
//   },   
//   AddPd: {
//     screen: AddPd
//   },
//   AddPolicy: {
//     screen: AddPolicy
//   },
//   AddUser: {
//     screen: AddUser
//   },
//   EditCategory: {
//     screen: EditCategory
//   },
//   EditUser:{
//     screen: EditUser
//   },
//   EditPolicy:{
//     screen: EditPolicy
//   },
//   HomeUser: {
//     screen: HomeUser
//   },
//   PolicyUser: {
//     screen: PolicyUser
//   },
//   DefinitionUser: {
//     screen: DefinitionUser
//   }
// });


// const  SwitchNav = (signedIn = false) => { 
//   return createSwitchNavigator(
//     {
//       SignedIn: {
//         screen: SignedIn
//       },
//       SignedOut: {
//         screen: SignedOut
//       }
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" :"SignedOut"
//     }
//   );
// }
// export const createRootNavigator = (signedIn = false) => {
//   return createAppContainer(SwitchNav(signedIn))
// };