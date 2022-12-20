import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { pegarDados, PegarDados } from "../../services/BancoService";
import Cabecalho from "../../components/Cabecalho";

const Registro = () => {
  const [salvo, setSalvo] = useState([]);

  useLayoutEffect(() => {
    pegarDados()
      .then((dados) => setSalvo(dados))
      .catch((e) => alert(e));
  }, []);
  return (
    <>
      <div>
        <Cabecalho />
      </div>
      <div className="corpo">
        <br />
        <TableContainer
          component={Paper}
          style={{ paddingTop: 10, marginTop: 40 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Whats</TableCell>
                <TableCell align="right">Dúvida</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salvo.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Nome}
                  </TableCell>
                  <TableCell align="right">{row.dados.Nome}</TableCell>
                  <TableCell align="right">{row.dados.Whats}</TableCell>
                  <TableCell align="right">{row.dados.Duvida}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Registro;

