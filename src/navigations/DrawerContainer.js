import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text } from 'react-native';
import ItemList from '../screens/ItemList';
import AddItem from '../screens/AddItem';
import { firestoreService } from '../utils/firebase';

const DashboardDrawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Welcome user</Text>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={async () => {
          await firestoreService.logout()
          props.navigation.navigate('AuthenticateNavigator');
        }}
      />
    </DrawerContentScrollView>
  );
}

const DrawerContainer = props => {

  return (
    <DashboardDrawer.Navigator initialRouteName="Item List" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <DashboardDrawer.Screen name="Item List" component={ItemList} />
      <DashboardDrawer.Screen name="Add Item" component={AddItem} />
    </DashboardDrawer.Navigator>
  );
};

export default DrawerContainer;
