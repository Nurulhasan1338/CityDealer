import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MergeIcon from '@mui/icons-material/Merge';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import Star from '@mui/icons-material/Star';
import Image from  "../../assets/sliderImg4.jpg"
import Button from '@mui/joy/Button';



export default function PropertyCard(props) {
  const {category,address,city,state,zipCode,price,bedrooms,bathrooms,squareFeet,description,amenities, liked = false,dateOfPosting} = props.item;
  const [isLiked, setIsLiked] = React.useState(liked);

  const sendMessage = () => {
    const whatsappNumber = '8690301338'; // Replace with your WhatsApp number
    const message = 'Hello, this is a test message!'; // Replace with your desired message
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const DateComparison = (date) => {
    // Convert date string to Date object
    const providedDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMs = currentDate - providedDate;
    // Convert milliseconds to days
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    // Check if the difference is more than 30 days
    const isWithin30Days = differenceInDays <= 30;

    return isWithin30Days;
}

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >

            {/*-------------------------- PropertyImage------------------------------------------------------- */}

        <AspectRatio ratio="1" flex sx={{minWidth: { sm: 120, md: 160 },'--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' }, }}>
          <img alt="" src={Image} />
          <Stack alignItems="center" direction="row" sx={{ position: 'absolute', top: 0, width: '100%', p: 1 }}>
            {
              DateComparison(dateOfPosting) && 
              (
              <Chip variant="soft" color="success" startDecorator={<WorkspacePremiumRoundedIcon />} size="md">latest</Chip>
              )
            }
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto',
                borderRadius: '50%',
                zIndex: '20',
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>

        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography level="body-sm">{category}</Typography>
            <Typography level="title-md">
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.primary' }}
              >
              {address}
              </Link>
            </Typography>
          </div>
          <IconButton
            variant="plain"
            size="sm"
            color={isLiked ? 'danger' : 'neutral'}
            onClick={() => setIsLiked((prev) => !prev)}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              borderRadius: '50%',
            }}
          >
            <FavoriteRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
            {city},{state},{zipCode} 
          </Typography>
          <Typography level="body-xs" startDecorator={<BathtubIcon />}>
            {bathrooms} bathroom
          </Typography>
          <Typography level="body-xs" startDecorator={<StraightenIcon />}>
            {squareFeet}sqt
          </Typography>
          <Typography level="body-xs" startDecorator={<MergeIcon />}>
            North facing
          </Typography>
          <Typography level="body-xs" startDecorator={<LocationCityIcon />}>
            {bedrooms} bedrooms
          </Typography>
        </Stack>
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          {
           amenities.map((amenitie,index)=>{
            return (
              <Chip key={index} color="warning">{amenitie}</Chip>
            )}) 
         
          }
        </Stack>
        <Typography
        level="body-xs"
        >
        {description}
        </Typography>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography level="title-lg" sx={{ display: 'flex', gap: 1 }}>  <strong>₹{price}/-</strong></Typography>

          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right'}}>
          <Typography>
          <Button color="success" className='mx-2' onClick={sendMessage}>enquir</Button>
          </Typography>
           
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
