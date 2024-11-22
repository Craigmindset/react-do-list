import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Task from './components/Task';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
       
       <View style={styles.container}>
     {/*task start her */}
     <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Task to Do</Text>
     </View>
       
       <View style={styles.items}> 
         {/*This is where all the styles*/} 
         <TouchableOpacity> <Task text={'Task 1'}/> </TouchableOpacity>
         
         <Task text={'Task 2'}/>
         <Task text={'Task 3'}/>
         <Task text={'Task 4'}/>
         <Task text={'Task 5'}/>
        
        
       </View>

    </View>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  items: {},
  

});
