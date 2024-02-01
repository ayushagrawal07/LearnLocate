// import {
//   FormControl,
//   FormControlLabel,
//   InputAdornment,
//   Radio,
//   RadioGroup,
//   Stack,
//   TextField,
// } from '@mui/material';
// import { useState } from 'react';
// import { useValue } from '../../../context/ContextProvider';
// import InfoField from './InfoField';

// const AddDetails = () => {
//   const {
//     state: {
//       details: { title, description, price },
//     },
//     dispatch,
//   } = useValue();
//   const [costType, setCostType] = useState(price ? 1 : 0);
//   const handleCostTypeChange = (e) => {
//     const costType = Number(e.target.value);
//     setCostType(costType);
//     if (costType === 0) {
//       dispatch({ type: 'UPDATE_DETAILS', payload: { price: 0 } });
//     } else {
//       dispatch({ type: 'UPDATE_DETAILS', payload: { price: 15 } });
//     }
//   };
//   const handlePriceChange = (e) => {
//     dispatch({ type: 'UPDATE_DETAILS', payload: { price:15 } });
//   };
//   return (
//     <Stack
//       sx={{
//         alignItems: 'center',
//         '& .MuiTextField-root': { width: '100%', maxWidth: 500, m: 1 },
//       }}
//     >
//       <FormControl>
//         <RadioGroup
//           name="costType"
//           value={costType}
//           row
//           onChange={handleCostTypeChange}
//         >
//           <FormControlLabel value={0} control={<Radio />} label="Free Stay" />
//           <FormControlLabel value={1} control={<Radio />} label="Nominal Fee" />
//           {Boolean(costType) && (
//             <TextField
//               sx={{ width: '7ch !important' }}
//               variant="standard"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//               inputProps={{ type: 'number' }}
//               value={price}
//               onChange={handlePriceChange}
//               name="price"
//             />
//           )}
//         </RadioGroup>
//       </FormControl>
//       <InfoField
//         mainProps={{ name: 'title', label: 'Title', value: title }}
//         minLength={5}
//       />
//       <InfoField
//         mainProps={{
//           name: 'description',
//           label: 'Description',
//           value: description,
//         }}
//         minLength={10}
//         optionalProps={{ multiline: true, rows: 4 }}
//       />
//     </Stack>
//   );
// };

// export default AddDetails;

import {
  FormLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import form from "@mui/material"
// import { useState } from 'react';
import { useValue } from "../../../context/ContextProvider";
import InfoField from "./InfoField";

const AddDetails = () => {
  const {
    state: {
      details: { title, description, price },
    },
    dispatch,
  } = useValue();
  // const [costType, setCostType] = useState(price ? 1 : 0);
  // const handleCostTypeChange = (e) => {
  //   const costType = Number(e.target.value);
  //   setCostType(costType);
  //   if (costType === 0) {
  //     dispatch({ type: 'UPDATE_DETAILS', payload: { price: 0 } });
  //   } else {
  //     dispatch({ type: 'UPDATE_DETAILS', payload: { price: 15 } });
  //   }
  // };

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    dispatch({ type: "UPDATE_DETAILS", payload: { price: newPrice } });
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        "& .MuiTextField-root": { width: "100%", maxWidth: 500, m: 1 },
      }}
    >
      <form>
        {/* <RadioGroup
          name="costType"
          value={costType}
          row
          onChange={handleCostTypeChange}
        > */}
        <FormLabel
          value={1}
          //  control={<Radio />}
        />
        <Typography>Nominal Fees</Typography>
        {
          <TextField
            sx={{ width: "16ch !important" }}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              ),
              
            }}
            inputProps={{ type: "number" }}
            value={price} // Controlled component
            onChange={handlePriceChange}
            name="price"
          
          />
        }
        {/* /</RadioGroup> */}
      </form>
      <InfoField
        mainProps={{ name: "title", label: "Title", value: title }}
        minLength={5}
      />
      <InfoField
        mainProps={{
          name: "description",
          label: "Description",
          value: description,
        }}
        minLength={10}
        optionalProps={{ multiline: true, rows: 4 }}
      />
    </Stack>
  );
};

export default AddDetails;
