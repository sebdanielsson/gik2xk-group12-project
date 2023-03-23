import {useState} from 'react';
import {TextField} from '@mui/material';

function NumberInput() {
  const [value, setValue] = useState(1);

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <TextField
        type="number"
        size="small"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          inputProps: {
            min: 1,
            style: {textAlign: 'center'},
          },
          style: {appearance: 'none', maxWidth: 80},
        }}
      />
    </div>
  );
}

export default NumberInput;
