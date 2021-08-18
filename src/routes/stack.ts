import {createStackNavigator} from '@react-navigation/stack'
import React from 'react';

const stackRoutes = createStackNavigator();

const AppRoutes  = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle:{
        backgroundColor: colors.white,
      }
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome}  />
    <stackRoutes.Screen name="Confirmation" component={Confirmation}  />
    <stackRoutes.Screen name="UserIdentification" component={UserIdentification}  />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes}  />
    <stackRoutes.Screen name="PlantSave" component={PlantSave}  />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes}  />

  </stackRoutes.Navigator>
)