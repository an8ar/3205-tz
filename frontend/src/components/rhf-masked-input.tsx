/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { ChangeEvent, forwardRef } from 'react';

import { TextField, TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

const PHONE_MASK = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export function RHFPhoneField({ name, ...other }: Props) {
  const { control } = useFormContext();

  const handleChange =
    (onChange: (value: string) => void) =>
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onChange(target.value);
    };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <TextField
          error={!!error}
          helperText={error?.message}
          InputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            inputComponent: TextMaskCustom as any,
            inputProps: {
              onChange: handleChange(onChange),
            },
          }}
          InputLabelProps={{ ...(field.value !== '' && { shrink: true }) }}
          {...field}
          {...other}
        />
      )}
    />
  );
}

type TextMaskCustomProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextMaskCustom = forwardRef<HTMLElement, TextMaskCustomProps>((props, _ref) => (
  <MaskedInput {...props} mask={PHONE_MASK} guide={false} keepCharPositions />
));
