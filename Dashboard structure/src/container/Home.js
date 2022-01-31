import React from 'react';

export default function Home() {
  return <div><h1>Home</h1></div>;
}



// {rows
//   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//   .map((row) => {
//     return (
//       <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//            <TableCell align='center'>
//                {row.serialNumber}
//             </TableCell>
//            <TableCell align='center'>
//                {row.title}
//             </TableCell>
//            <TableCell align='center'>
//                {row.category}
//             </TableCell>
//            <TableCell align='center'>
//                {row.price}
//             </TableCell>
//            <TableCell align='center'>
//                {row.units}
//             </TableCell>
//            <TableCell align='center'>
//                <Box sx={{width:'50px'}}>
//                <img src={row.previewImage} alt="" width='100%' />
//                </Box>
//             </TableCell>
//            <TableCell align='center'>
//                {row.actions}
//             </TableCell>
//       </TableRow>

// // {serialNumber, title, category, price,units,previewImage,actions}
//     );
//   })}
