paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight

leftAvatar={{ source: require('./images/shakavibes.jpg')}}

//// onPress={() => Navigation.navigate('Home')}

<ScrollView>
            
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                resizeMode='contain'
                source={require('./images/home.jpg')}
                />
                </View>
                    
                
                <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>

                <Text>Featured Kite School</Text>
                <RenderItem 
                    item={this.state.school.filter(school => school.featured)[0]} />
                </View>
            </ScrollView>


















import A from '../components/A';
import B from '../components/B';
import C from '../components/C';
import D from '../components/D';

const AStack = createStackNavigator();

function AStackScreen() {
  return (
    <AStack.Navigator>
      <AStack.Screen name="A" component={A} />
      <AStack.Screen name="B" component={B} />
    </AStack.Navigator>
  );
}

const CStack = createStackNavigator();

function CStackScreen() {
  return (
    <CStack.Navigator>
      <CStack.Screen name="C" component={C} />
      <CStack.Screen name="D" component={D} />
    </CStack.Navigator>
  );
}

const Tab2 = createBottomTabNavigator();

function MyTabs2() {
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'A') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'B') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'C') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0c7b93',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
        }}
      >
        <Tab.Screen name="AStack" component={AStackScreen} />
        <Tab.Screen name="CStack" component={CStackScreen} />
        
      </Tab.Navigator>
  );
}