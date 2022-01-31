import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, SvgIcon, Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  { id: 'serialNumber', label: 'S no.', minWidth: 10,align: 'center' },
  { id: 'title', label: 'Title', minWidth: 100, align: 'center',minWidth: 100 },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'center',
    // format: value => value.toLocaleString('en-US')
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'center',
    // format: value => value.toLocaleString('en-US')
  },
  {
    id: 'units',
    label: 'Units',
    minWidth: 170,
    align: 'center',
    // format: value => value.toFixed(2)
  },
  {
    id: 'previewImage',
    label: 'Preview Image',
    minWidth: 100,
    align: 'left',
    // format: value => value.toFixed(2)
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170,
    align: 'center',
    // format: value => value.toFixed(2)
  }
]

function createData (
  serialNumber,
  title,
  category,
  price,
  units,
  previewImage,
  actions
) {
  return { serialNumber, title, category, price, units, previewImage, actions }
}

let rows = []

for (let index = 0; index < 1000; index++) {
  let newObj = createData(
    'serialNumber',
    `title${index + 1}`,
    'category',
    `${500.5 + index}`,
    `${20 + index}`,
   "https://thumbs.dreamstime.com/b/d-image-abstract-tunnel-diagonal-black-white-stripes-optical-illusion-168695979.jpg",
    'Edit and Delete'
  )
  rows.push(newObj)
}
export default function Products () {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Box>
      <Stack
        sx={{ px: 1, mb: 2 }}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack>
          <Typography variant='h4'>Products</Typography>
        </Stack>
        <Stack
          sx={{ backgroundColor: '#1D3557', py: 1, px: 2, borderRadius: '5px' }}
          alignItems={'center'}
        >
          <Typography variant='body1' sx={{ color: 'white', fontSize: 15 }}>
            + Add Product
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 750 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column,i) => (
                    <TableCell
                      key={i}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row,i) => {
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={i}
                      >
                        {columns.map((column,ind) => {
                          const value = row[column.id]
                          return column.id === 'previewImage' ? (
                            <TableCell key={ind} align={column.align}>
                              <Box sx={{ width: '100px' }}>
                                <img
                                  src={value}
                                  alt=''
                                  width='100%'
                                />
                              </Box>
                            </TableCell>
                          ) : column.id === 'serialNumber' ? (
                            <TableCell key={ind} align={column.align}>
                              {page < 1 ? i + 1 :(page * rowsPerPage) +  (i + 1)}
                            </TableCell>
                          ) :(
                            <TableCell key={ind} align={column.align}>
                              {value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Stack>
    </Box>
  )
}
