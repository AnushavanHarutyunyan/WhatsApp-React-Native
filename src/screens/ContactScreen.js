import { StyleSheet, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { useEffect, useState } from "react";
import ContactListItem from "../components/ContactListItem";

const ContactScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then(({ data }) => {
      setUsers(data?.listUsers?.items);
    });
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default ContactScreen;
