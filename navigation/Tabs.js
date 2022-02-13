import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Featured, Schedule, Tickets, Mine } from '../screens';
//import { Checkout, History, Payment } from '../screens';
import Checkout from '../screens/Checkout';
import Payment from '../screens/Payment';
import History from '../screens/History';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { McText, McIcon } from '../components';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <McIcon
        size={focused ? 24 : 32}
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? COLORS.white : COLORS.gray,
        }}
      />
    </View>
  );
};
const TabLabel = ({ focused, text }) => {
  return focused ? (
    <McText
      h4
      style={{
        marginTop: -25,
        paddingBottom: 10,
      }}
    >
      {text}
    </McText>
  ) : (
    <View />
  );
};

const Tabs = ({ params }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.tabBar,
          opacity: 0.9,
          borderTopColor: 'transparent',
          height: 111,
          borderRadius: SIZES.radius,
        },
      }}
    >
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_1} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Checkout" />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_2} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Payment" />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="History" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_4} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Mine" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
