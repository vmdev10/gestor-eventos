import GroupedButtons from "../GroupedButtons";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import React, { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  },
});

function TicketsTable() {
  const classes = useStyles();

  const [amount, setAmount] = useState(0);

  const priceRow = (qty, unit) => {
    return qty * unit;
  };

  const createRow = (desc, qty, unit) => {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  };

  const sendAmount = (amount) => {
    setAmount(amount);
  };

  const rows = [
    createRow("Ingresso Antecipado", 1, 80),
    createRow("Ingresso Regular", 1, 100),
    createRow("Ingresso VIP", 1, 120),
  ];

  const TAX_RATE = 0.07;

  const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  };

  const subtotal = (items) => {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <div className="TicketsTable">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Ingressos</TableCell>
              <TableCell align="right">Qtde.</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">R${row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


export default TicketsTable