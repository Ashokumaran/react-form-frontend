import React,{useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Usersummary() {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });
const classes = useStyles();
const [data, setData] = useState([])
useEffect(()=>{
    fetch(process.env.SERVERURL||"http://localhost:3000/usersummary")
    .then((res)=>res.json())
    .then((result)=>setData(result.users))
    .catch((error)=>console.log(error))
},[])
return (
  <div className="mr-4">
  <h1>User Summary</h1>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">Gender</StyledTableCell>
          <StyledTableCell align="right">Marital Status</StyledTableCell>
          <StyledTableCell align="right">Country</StyledTableCell>
          <StyledTableCell align="right">State</StyledTableCell>
          <StyledTableCell align="right">City</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">{row.gender}</StyledTableCell>
            <StyledTableCell align="right">{row.maritalstatus}</StyledTableCell>
            <StyledTableCell align="right">{row.country}</StyledTableCell>
            <StyledTableCell align="right">{row.state}</StyledTableCell>
            <StyledTableCell align="right">{row.city}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
)
}export default Usersummary
