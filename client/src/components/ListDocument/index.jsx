import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo from "@/assets/images/Logo.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: "20px",
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: "15%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    height: "100px",
    width: "100%",
    gap: "30px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75px",
  },
  dataContainer: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-end",
    textAlign: "right",
    fontSize: "10px",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  listContainer: {
    paddingHorizontal: "15%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  listItem: {
    borderBottom: "1px solid #8B5CF6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

// Create Document Component
const MyDocument = ({ listName = "", products = [] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} fixed>
        <View style={styles.imageContainer}>
          <Image style={styles.image} src={Logo} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
            Lista de compras
          </Text>
          <View
            style={{
              height: "1px",
              backgroundColor: "#8B5CF6",
              marginVertical: "10px",
            }}
          />
          <Text
            style={{
              fontSize: "10px",
              color: "#9c9898",
            }}
          >
            Lista generada{" "}
            {new Date().toLocaleDateString("default", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        {products.map((product, i) => (
          <View style={styles.listItem} key={i}>
            <Text style={{ fontSize: "15px" }}>
              {product.name} -{" "}
              <Text
                style={{
                  fontSize: "10px",
                  color: "#9c9898",
                }}
              >
                {product.cuantity} x ${product.price}
              </Text>
            </Text>
            <View
              style={{
                height: "20px",
                width: "20px",
                border: "3px solid #8B5CF6",
                marginBottom: "10px",
              }}
            ></View>
          </View>
        ))}
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export default MyDocument;
