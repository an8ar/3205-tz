import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { checkUser } from '../../api/check-user';
import { FormProvider } from '../../components/form-provider';
import { RHFPhoneField } from '../../components/rhf-masked-input';
import { RHFTextField } from '../../components/rhf-text-field';

const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email(),
  number: Yup.string(),
});

export interface FormValueProps {
  email: string;
  number?: string;
}

const defaultValues = {
  email: '',
  number: '',
};

interface Props {
  setUser: React.Dispatch<React.SetStateAction<FormValueProps[]>>;
}
export function Form({ setUser }: Props) {
  const methods = useForm<FormValueProps>({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormValueProps) => {
    const res = await checkUser(data);
    if (res) {
      setUser(res.data);
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <FormProvider methods={methods}>
        <Stack spacing={2}>
          <RHFTextField name="email" label="Email" type="email" />
          <RHFPhoneField name="number" label="Number" />
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Stack>
      </FormProvider>
    </Box>
  );
}
