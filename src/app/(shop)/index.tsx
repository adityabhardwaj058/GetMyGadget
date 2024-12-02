import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { PRODUCTS } from "../../../assets/products";
import ProductListItem from "../../components/ProductListItem";
import { ListHeader } from "../../components/ListHeader";
import { getProductsAndCategories } from "../../api/api";

const Home = () => {
  const { data, error, isLoading } = getProductsAndCategories();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error || !data) {
    return <Text>Error: {error?.message || "An Error Occured"}</Text>;
  }

  console.log(data);

  return (
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => {
          return <ProductListItem product={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
