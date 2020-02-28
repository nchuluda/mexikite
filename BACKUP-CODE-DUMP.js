
function RenderItem(props) {
  const { item } = props;
  
  if (props.isLoading) {
      return <Loading />;
  }
  if (props.errMess) {
      return (
          <View>
              <Text>{props.errMess}</Text>
          </View>
      );
  }
  if (item) {
      return (
          <Card
              featuredTitle={item.name}
              image={{uri: baseUrl + item.image}}
              
>
              <Text
                  style={{ fontSize: 14, margin: 10}}>
                  {item.description}
              </Text>
              <Button
                  title={item.name}
                  onPress={() => navigate('SchoolInfo', { schoolId: item.id })}

              />
          </Card>
      );
  }
  return <View />;
}




<Input
                            placeholder='Name'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(name)=>this.setState({name: name})}
                            value={this.state.name}
                            />
                        <Input
                            placeholder='Email'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(email)=>this.setState({email: email})}
                            value={this.state.email}
                            />
                        <Input
                            multiline='true'
                            placeholder='Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(text)=>this.setState({text: text})}
                            value={this.state.text}
                            />






<Input
                            placeholder='Author'
                            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(name)=>this.setState({name: name})}
                            value={this.state.name}
                            />
                        <Input
                            placeholder='Comment'
                            leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={(text)=>this.setState({text: text})}
                            value={this.state.text}
                            />



onRequestClose={() => this.toggleModal()}

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