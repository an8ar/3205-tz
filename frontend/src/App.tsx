/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

import { Box, Stack, Typography, styled } from '@mui/material';

import { Form, FormValueProps } from './features/components/form';

function App() {
  const [users, setUser] = useState<FormValueProps[]>([]);

  return (
    <BoxStyle>
      <Form setUser={setUser} />
      <Box sx={{ display: 'flex', gap: 4 }}>
        {users &&
          users.map((user, index) => (
            <StackStyle spacing={2} key={`user-${index}`}>
              <Typography>{user.email}</Typography>
              <Typography>{user.number}</Typography>
            </StackStyle>
          ))}
      </Box>
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(4),
  marginLeft: theme.spacing(4),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  flexDirection: 'column',
}));

const StackStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: '#d2ecfc',
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

export default App;
