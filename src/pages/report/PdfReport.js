import React from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image
} from "@react-pdf/renderer";

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

import { useSelector } from "react-redux";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Sarabun",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    alignSelf: 'center',
    marginBottom: 30
  }
});

Font.register({
  family: "Sarabun",
  fonts: [{ src: "./fonts/Sarabun-Regular.ttf" }],
});

const PdfReport = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <PDFViewer className="container-fluid mt-3 " height={600}>
      <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image style={{width:50}} src="./logo192.png "/>
        </View>
          <View style={styles.section}>
            <Text style={styles.title}>รายงานการสั่งซื้อสินค้า</Text>
          </View>
          <Table data={cart}>
            <TableHeader weighting={0.5} textAlign="center">
              <TableCell weighting={0.25}>รหัสสินค้า</TableCell>
              <TableCell weighting={0.5}>ชื่อสินค้า</TableCell>
              <TableCell weighting={0.25}>ราคา</TableCell>
              <TableCell weighting={0.25}>จำนวน</TableCell>
              <TableCell weighting={0.25}>รวม</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell weighting={0.25} style={{textAlign:'center'}} getContent={(r) => r.id} />
              <DataTableCell weighting={0.5} getContent={(r) => r.name} />
              <DataTableCell weighting={0.25} style={{textAlign:'center'}} getContent={(r) => r.price} />
              <DataTableCell weighting={0.25} style={{textAlign:'center'}} getContent={(r) => r.qty} />
              <DataTableCell weighting={0.25} style={{textAlign:'center'}} getContent={(r) => r.qty * r.price} />
            </TableBody>
          </Table>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfReport;
