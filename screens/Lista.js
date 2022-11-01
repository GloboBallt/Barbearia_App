import {StyleSheet ,View, Text} from 'react-native';

export default function Lista(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',   
    },
    title: {
        fontWeight: 'bold',
    },
  });