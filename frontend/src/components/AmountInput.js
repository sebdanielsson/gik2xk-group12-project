import {useState} from 'react';
import {Button, TextField} from '@mui/material';

function NumberInput() {
  const [value, setValue] = useState(1);

  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Button onClick={handleDecrease} size="small">
        -
      </Button>
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
          style: {appearance: 'none', maxWidth: 64},
          disableUnderline: true,
        }}
      />
      <Button onClick={handleIncrease} size="small">
        +
      </Button>
    </div>
  );
}

export default NumberInput;
