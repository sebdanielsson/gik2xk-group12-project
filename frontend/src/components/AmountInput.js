import {useState} from 'react';
import {TextField, Tooltip} from '@mui/material';

function NumberInput() {
  const [value, setValue] = useState(1);

  return (
    <Tooltip title="Amount">
      <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
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
    </Tooltip>
  );
}

export default NumberInput;
