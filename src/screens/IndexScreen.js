import React,{useContext} from 'react';
import { View , StyleSheet, Text,FlatList,Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = (props) => {

  const {data,addBlogPost} = useContext(BlogContext);


  return(
     <View style={styles.container}>
         <Text>Index Screen</Text>
         <Button title="Add Post" onPress={addBlogPost} />
         <FlatList
         data={data}
         keyExtractor={(blogPost)=> blogPost.title}
         renderItem={({item}) => {
            return <Text>
              {item.title}
            </Text>
         }}

          />
     </View>
  );
}

const styles = StyleSheet.create({
 container: {}
});

export default IndexScreen;