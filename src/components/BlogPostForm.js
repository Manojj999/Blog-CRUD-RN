import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

const BlogPostForm = ({onSubmit,initialVal}) => {
  const [title, setTitle] = useState(initialVal.title);
  const [content, setContent] = useState(initialVal.content);
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.lable}>Enter Description</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Save Blog Post'
        onPress={() => onSubmit(title,content)
          //after addblogpost don't use   navigation.navigate('Index'); It's easy way To Automatic Go Back from Navigation! But Not Preferable
          // | Problem Arrived When You use Api and if response take a time than it doen't show expected O/P
        }
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialVal:{
    title:'',
    content:'',
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lable: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
