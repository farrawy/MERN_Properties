import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from 'components'

const home = () => {
  return (
    <Box>
      {/* Dashboard Title */}
      <Typography fontSize={25} fontWeight={700} color='#11142D'>
        Dashboard
      </Typography>

      {/* Wrap Charts */}
      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart
          title='Properties for Sale'
          value={684}
          series={[75, 25]}
          colors={['#475ae8', '#e4b8ef']}
        />
        <PieChart
          title='Properties for Rent'
          value={550}
          series={[60, 40]}
          colors={['#475ae8', '#e4b8ef']}
        />
        <PieChart
          title='Total customers'
          value={5684}
          series={[75, 25]}
          colors={['#475ae8', '#e4b8ef']}
        />
        <PieChart
          title='Properties for Cities'
          value={555}
          series={[75, 25]}
          colors={['#475ae8', '#e4b8ef']}
        />
      </Box>

      {/*  */}
      <Stack
        gap={4}
        mt='25px'
        width='100%'
        direction={{ xs: 'column', lg: 'row' }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default home
