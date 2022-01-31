import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Products from './Products'
import Events from './Events'
import Home from './Home'
import Tags from './Tags'
import { Categories } from './Categories'
import { Publications } from './Publications'
import {
  Stack,
  Typography,
  SvgIcon,
  MenuItem,
  Divider,
  Paper
} from '@mui/material'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoNewspaperOutline } from 'react-icons/io5'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BsGrid, BsCalendar4Event } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { HiOutlineTag } from 'react-icons/hi'
import { FaRegNewspaper } from 'react-icons/fa'
import { PressReleases } from './PressReleases'
import { Opportunities } from './Opportunities'

let textColor = '#1D3557'

export const Dashboard = () => {
  const [sideBarActive, setSideBarActive] = useState(true)

  let listOfMenuItems = [
    {
      caption: 'Products',
      linkTo: '',
      icon: <BsGrid />,
      element: <Products />
    },
    {
      caption: 'Publications',
      linkTo: 'publications',
      icon: <IoNewspaperOutline />,
      element: <Publications />
    },
    {
      caption: 'Events',
      linkTo: 'events',
      icon: <BsCalendar4Event />,
      element: <Events />
    },
    {
      caption: 'Press Releases',
      linkTo: 'press-releases',
      icon: <FaRegNewspaper />,
      element: <PressReleases />
    },
    {
      caption: 'Opportunities',
      linkTo: 'opportunities',
      icon: <BsBriefcase />,
      element: <Opportunities />
    },
    {
      caption: 'Categories',
      linkTo: 'categories',
      icon: <AiOutlineUnorderedList />,
      element: <Categories />
    },
    {
      caption: 'Tags',
      linkTo: 'tags',
      icon: <HiOutlineTag />,
      element: <Tags />
    }
  ]

  return (
    <>
      <Stack>
        <Stack className={`sideBar ${sideBarActive ? 'active' : ''}`}>
          <Stack sx={{ px: 3, py: 3 }}>
            <Stack direction='row' alignItems='start'>
              <SvgIcon sx={{ overflow: 'initial', marginRight: '25px' }}>
                <AiOutlineDashboard color='white' fontSize={30} />
              </SvgIcon>
              <Typography
                variant='h6'
                align='right'
                sx={{ color: 'white', fontWeight: 'normal' }}
                noWrap
              >
                Company Dashboard
              </Typography>
            </Stack>

            <Divider
              sx={{ backgroundColor: 'gray', mt: 6 }}
              orientation='horizontal'
              variant='fullWidth'
              light
            />

            <Stack sx={{ py: 3, mt: 3 }} direction='column' spacing={4}>
              {listOfMenuItems.map((e, i) => (
                <Link key={i} color='white' to={e.linkTo}>
                  <MenuItem
                    disableGutters
                    dense
                    key={i}
                    autoFocus={false}
                    style={{
                      color: 'white',
                      textDecoration: 'none'
                    }}
                  >
                    <Stack direction='row' alignItems='center'>
                      <SvgIcon
                        sx={{
                          overflow: 'initial',
                          color: 'white',
                          fontSize: 23,
                          marginRight: '25px'
                        }}
                      >
                        {e.icon}
                      </SvgIcon>

                      <Stack>
                        <Typography sx={{ fontSize: 20, fontWeight: 'light' }}>
                          {e.caption}
                        </Typography>
                      </Stack>
                    </Stack>
                  </MenuItem>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack className='pages'>
          <Paper
            elevation={2}
            sx={{ px: 3, py: 3, mb: 4, borderRadius: 0 }}
            children={
              <Stack>
                {sideBarActive ? (
                  <SvgIcon onClick={() => setSideBarActive(!sideBarActive)}>
                    <IoIosArrowBack color={textColor} size={25} />
                  </SvgIcon>
                ) : (
                  <SvgIcon onClick={() => setSideBarActive(!sideBarActive)}>
                    <FiMenu color={textColor} size={25} />
                  </SvgIcon>
                )}
              </Stack>
            }
          />
          <Stack sx={{ px: 3 }}>
            <Routes>
              {listOfMenuItems.map((e, i) => (
                <Route key={i} path={e.linkTo} element={e.element} />
              ))}
            </Routes>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
