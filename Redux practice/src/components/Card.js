import { Grid, Stack } from '@mui/material'
// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function ProductCard ({ data }) {
  const navigate = useNavigate()

  // let detailsView = () => {
  //     navigate('productdetails', { state: data })
  // }

  return (
    <Grid
      item
      sx={{ border: 'none' }}
      alignItems='center'
      xl={3}
      lg={3}
      md={4}
      sm={6}
      xs={12}
    >
        <Stack direction='column' className='card productCard'>
          <Stack className='cardImage'>
            <img src={data.image} className='card-img-top' alt='...' />
          </Stack>
          <div className='card-body px-4 text-center d-flex flex-column justify-content-between '>
            <h5 className='card-title fs-6 text-center'>{data.title}</h5>
            <div>
              <span className='display-selling-price me-2 fw-light'>
                <span>
                  Price:{' '}
                  <span>${new Intl.NumberFormat().format(data.price)} </span>
                </span>
              </span>
            </div>
          </div>
        </Stack>
    </Grid>
  )
}
