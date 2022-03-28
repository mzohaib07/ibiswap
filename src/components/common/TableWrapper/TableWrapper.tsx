import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { PaperStyle } from './TableWrapper.styles';
import { COLUMNS, ROWS } from '../../../constants/constants';
import { TablePagination } from '@mui/material';


const BasicTable = () => {
  return (
    <PaperStyle>
      <Table style={{ backgroundColor: '#202225', border: 'none', outline: 'none' }} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {COLUMNS.map((item, index) =>
              <TableCell className='table-cell' key={index}>
                {item?.headerName}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow
              className='table-data'
              key={row.name}
            >
              <TableCell style={{ width: '300px' }} className='table-cell' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='table-cell'>{row.calories}</TableCell>
              <TableCell className='table-cell'>{row.fat}</TableCell>
              <TableCell style={{ color: 'red' }} className='table-cell'>{row.carbs}</TableCell>
              <TableCell className='table-cell'>{row.protein}</TableCell>
              <TableCell style={{ color: 'yellow' }} className='table-cell'>{row.curb}</TableCell>
              <TableCell className='table-cell'>{row.fats}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </PaperStyle>
  );
}

export default BasicTable